import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Send email ONLY to the Admin
    // Send email ONLY to the Admin
    await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL as string,
      subject: `[New Inquiry] ${subject}`,
      replyTo: email,
      html: `
        <h3>New Message from ${name}</h3>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Subject:</strong> ${subject}</li>
        </ul>
        <hr />
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}