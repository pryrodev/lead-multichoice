import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, enquirySchema } from "@/components/site/ContactForm";

const valid = { name: "Jane Doe", email: "jane@example.com", type: "General Enquiry", subject: "Hello", message: "We would like to discuss supply." };

describe("contact enquiry", () => {
  it("sends to the confirmed WhatsApp number", () => {
    expect(buildWhatsAppMessage(valid)).toMatch(/^https:\/\/wa\.me\/250788312338\?text=/);
  });
  it("requires a business email", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "" }).success).toBe(false);
  });
  it("rejects unknown enquiry types", () => {
    expect(enquirySchema.safeParse({ ...valid, type: "Other" }).success).toBe(false);
  });
});
