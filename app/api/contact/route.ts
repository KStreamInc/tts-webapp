import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_API_SECRET || ''
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Send email ONLY to the Admin
    await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: "Website Contact Form",
            },
            To: [
              {
                Email: process.env.ADMIN_EMAIL,
                Name: "Admin",
              },
            ],
            // Hitting "Reply" will reply to the visitor
            ReplyTo: {
              Email: email,
              Name: name,
            },
            Subject: `[New Inquiry] ${subject}`,
            HTMLPart: `
              <h3>New Message from ${name}</h3>
              <ul>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                <li><strong>Subject:</strong> ${subject}</li>
              </ul>
              <hr />
              <p>${message}</p>
            `,
          },
        ],
      });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Mailjet Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}