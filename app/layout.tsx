import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karizma Nakliyat - Güvenilir Ev ve Ofis Taşıma Hizmetleri",
  description:
    "Karizma Nakliyat ile ev, ofis ve eşya taşıma hizmetlerinde profesyonel çözümler. 20 yılı aşkın tecrübe ile İstanbul ve tüm Türkiye'de hizmetinizdeyiz.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
