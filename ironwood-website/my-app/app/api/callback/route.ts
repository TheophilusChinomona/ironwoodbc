import { NextRequest, NextResponse } from "next/server";
import { callbackFormSchema } from "@/lib/validations/callback-form";
import { appendToSheet } from "@/lib/google-sheets";
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

    // Run both operations in parallel
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendToSheet(result.data),
      sendCallbackEmail(result.data)
    ]);

    // Log any failures but don't fail the request
    if (sheetResult.status === "rejected") {
      console.error("Failed to append to Google Sheets:", sheetResult.reason);
    }

    if (emailResult.status === "rejected") {
      console.error("Failed to send email:", emailResult.reason);
    }

    // If both failed, return an error
    if (sheetResult.status === "rejected" && emailResult.status === "rejected") {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to process request. Please try again later."
        },
        { status: 500 }
      );
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
