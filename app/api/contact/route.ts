import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/sendgrid";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(1).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Compose email content for owner
    const html = `
      <div style="font-family: sans-serif; font-size: 16px; color: #222;">
        <h2>New Landyze Inquiry</h2>
        <ul>
          <li><b>First Name:</b> ${data.firstName}</li>
          <li><b>Last Name:</b> ${data.lastName}</li>
          <li><b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></li>
          <li><b>Subject:</b> ${data.subject}</li>
        </ul>
        <div style="margin-top:12px;"><b>Message:</b>
          <div style="margin-top:4px; padding:8px 0; border-left: 2px solid #ff8f5a; margin-left:8px;">
            ${data.message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      </div>
    `;

    // Owner: Chirag Dodiya, hi@chirag.co
    const sendResult = await sendEmail("hi@chirag.co", `[Landyze] Contact — ${data.subject}`, html);

    if (!sendResult.success) {
      return NextResponse.json(
        { error: "Failed to deliver your inquiry. Please email hi@chirag.co directly.", details: sendResult.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const msg =
      err instanceof z.ZodError
        ? err.issues?.[0]?.message
        : err instanceof Error
        ? err.message
        : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}