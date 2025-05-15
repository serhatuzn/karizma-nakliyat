import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  const {
    name,
    phone,
    email,
    cargoType,
    weight,
    volume,
    from,
    to,
  } = body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // .env.local içinde tanımlı
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Karizma Nakliyat" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Parsiyel Taşımacılık Teklif Talebi",
    html: `
      <h2>Parsiyel Taşıma Teklif Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Yük Tipi:</strong> ${cargoType}</p>
      <p><strong>Ağırlık:</strong> ${weight} kg</p>
      <p><strong>Hacim:</strong> ${volume} m³</p>
      <p><strong>Nereden:</strong> ${from}</p>
      <p><strong>Nereye:</strong> ${to}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Parsiyel mail gönderme hatası:", error)
    return NextResponse.json({ success: false, error: "Mail gönderilemedi" }, { status: 500 })
  }
}
