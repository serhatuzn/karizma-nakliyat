import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karizma Nakliyat - Lojistik ve Taşımacılık",
  description:
    "Karizma Nakliyat, taşımacılık ve lojistik alanında kapsamlı çözümler sunan güvenilir bir hizmet sağlayıcısıdır. Türkiye genelinde karayolu taşımacılığı, proje taşımacılığı, konteyner hizmetleri ve daha fazlası.",
  robots: "index, follow",
  authors: [{ name: "Karizma Nakliyat" }],
  keywords: [
    "Karizma Nakliyat",
    "lojistik",
    "taşımacılık",
    "karayolu taşımacılığı",
    "proje taşımacılığı",
    "konteyner hizmetleri",
    "Türkiye taşımacılık",
  ],
  other: {
    "google-site-verification": "90BX1m-YQWooxPS_8rmv7kU5K45KUw4S7TtDiUBlykk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
