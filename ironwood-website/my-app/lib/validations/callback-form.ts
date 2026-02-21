import { z } from "zod";

const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;

export const callbackFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid South African phone number (e.g., 0821234567 or +27821234567)"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  clientType: z.enum(["individual", "business"], {
    message: "Please select whether you are an individual or business"
  }),
  service: z.enum([
    "accounting-financial-reporting",
    "tax-services",
    "payroll-services",
    "business-advisory-cfo",
    "company-secretarial-compliance",
    "accounting-systems-digital",
    "other"
  ], {
    message: "Please select a service"
  }),
  bestTime: z.enum(["morning", "afternoon", "evening"], {
    message: "Please select your preferred call time"
  }),
  message: z
    .string()
    .max(500, "Message must not exceed 500 characters")
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to proceed"
  }),
  website: z.string().optional()
});

export type CallbackFormData = z.infer<typeof callbackFormSchema>;

export const serviceOptions = [
  { value: "accounting-financial-reporting", label: "Accounting & Financial Reporting" },
  { value: "tax-services", label: "Tax Services" },
  { value: "payroll-services", label: "Payroll Services" },
  { value: "business-advisory-cfo", label: "Business Advisory & CFO Services" },
  { value: "company-secretarial-compliance", label: "Company Secretarial & Compliance" },
  { value: "accounting-systems-digital", label: "Accounting Systems & Digital Solutions" },
  { value: "other", label: "Other / General Inquiry" }
];

export const clientTypeOptions = [
  { value: "individual", label: "Individual" },
  { value: "business", label: "Business" }
];

export const bestTimeOptions = [
  { value: "morning", label: "Morning (08:00 - 12:00)" },
  { value: "afternoon", label: "Afternoon (12:00 - 17:00)" },
  { value: "evening", label: "Evening (17:00 - 19:00)" }
];

export const popiaConsentText = `I consent to Ironwood Business Consulting processing my personal information in accordance with the Protection of Personal Information Act (POPIA). I understand my data will be used solely for the purpose of contacting me regarding my inquiry and will be stored securely.`;
