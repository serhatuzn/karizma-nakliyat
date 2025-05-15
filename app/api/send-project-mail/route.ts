import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, phone, email, projectType, details, from, to } = body

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
    subject: "Yeni Proje Taşıma Teklifi",
    html: `
      <h2>Yeni Proje Taşıma Teklifi</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Proje Tipi:</strong> ${projectType}</p>
      <p><strong>Detaylar:</strong> ${details}</p>
      <p><strong>Nereden:</strong> ${from}</p>
      <p><strong>Nereye:</strong> ${to}</p>
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
