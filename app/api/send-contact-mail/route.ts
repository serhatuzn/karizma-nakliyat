import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, email, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Karizma Nakliyat" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Yeni Teklif Talebi (Genel Form)",
    html: `
      <h2>Genel Teklif Formu</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Mail gönderilemedi" },
      { status: 500 }
    );
  }
}
