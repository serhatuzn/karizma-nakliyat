import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, phone, from, to, date, notes } = body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Karizma Nakliyat" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Yeni Şehirlerarası Taşımacılık Teklif Talebi",
    html: `
      <h2>Şehirlerarası Taşımacılık Teklif Formu</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Nereden:</strong> ${from}</p>
      <p><strong>Nereye:</strong> ${to}</p>
      <p><strong>Taşınma Tarihi:</strong> ${date || "Belirtilmedi"}</p>
      <p><strong>Notlar:</strong> ${notes || "Yok"}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mail gönderme hatası:", error)
    return NextResponse.json({ success: false, error: "Mail gönderilemedi" }, { status: 500 })
  }
}
