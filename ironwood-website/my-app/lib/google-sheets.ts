import { google } from "googleapis";
import { CallbackFormData } from "./validations/callback-form";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set");
  }

  let credentials;
  try {
    credentials = JSON.parse(serviceAccountKey);
  } catch {
    throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_KEY format");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES
  });

  return auth;
}

export async function appendToSheet(formData: CallbackFormData) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEETS_ID environment variable is not set");
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toISOString();

  const values = [
    [
      timestamp,
      formData.fullName,
      formData.phone,
      formData.email || "Not provided",
      formData.clientType === "individual" ? "Individual" : "Business",
      getServiceLabel(formData.service),
      getBestTimeLabel(formData.bestTime),
      formData.message || "Not provided",
      "Yes"
    ]
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Submissions!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values
      }
    });

    return {
      success: true,
      updatedRange: response.data.updates?.updatedRange
    };
  } catch (error) {
    console.error("Error appending to sheet:", error);
    throw new Error("Failed to save submission to Google Sheets");
  }
}

function getServiceLabel(value: string): string {
  const serviceMap: Record<string, string> = {
    "accounting-financial-reporting": "Accounting & Financial Reporting",
    "tax-services": "Tax Services",
    "payroll-services": "Payroll Services",
    "business-advisory-cfo": "Business Advisory & CFO Services",
    "company-secretarial-compliance": "Company Secretarial & Compliance",
    "accounting-systems-digital": "Accounting Systems & Digital Solutions",
    "other": "Other / General Inquiry"
  };
  return serviceMap[value] || value;
}

function getBestTimeLabel(value: string): string {
  const timeMap: Record<string, string> = {
    "morning": "Morning (08:00 - 12:00)",
    "afternoon": "Afternoon (12:00 - 17:00)",
    "evening": "Evening (17:00 - 19:00)"
  };
  return timeMap[value] || value;
}
