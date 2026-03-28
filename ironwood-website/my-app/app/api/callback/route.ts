import { NextRequest, NextResponse } from "next/server";
import { callbackFormSchema } from "@/lib/validations/callback-form";
import { saveSubmission, appendToSheet } from "@/lib/google-sheets";
import { sendCallbackEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot field
    if (body.website) {
      // Silently reject spam submissions
      return NextResponse.json(
        { success: true, message: "Request submitted successfully" },
        { status: 200 }
      );
    }

    // Validate the request body
    const result = callbackFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    // Run all three operations in parallel — DB save is primary, others are best-effort
    const [dbResult, sheetResult, emailResult] = await Promise.allSettled([
      saveSubmission(result.data),
      appendToSheet(result.data),
      sendCallbackEmail(result.data)
    ]);

    // DB save failure is a hard error
    if (dbResult.status === "rejected") {
      console.error("Failed to save submission to database:", dbResult.reason);
      return NextResponse.json(
        { success: false, message: "Failed to process request. Please try again later." },
        { status: 500 }
      );
    }

    if (sheetResult.status === "rejected") {
      console.error("Failed to append to Google Sheets:", sheetResult.reason);
    }

    if (emailResult.status === "rejected") {
      console.error("Failed to send email:", emailResult.reason);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Callback request submitted successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing callback request:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      },
      { status: 500 }
    );
  }
}
