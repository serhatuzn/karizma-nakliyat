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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <title>Karizma Nakliyat - Lojistik ve Taşımacılık</title>
        <meta
          name="description"
          content="Karizma Nakliyat, taşımacılık ve lojistik alanında kapsamlı çözümler sunan güvenilir bir hizmet sağlayıcısıdır. Türkiye genelinde karayolu taşımacılığı, proje taşımacılığı, konteyner hizmetleri ve daha fazlası."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Karizma Nakliyat" />
        <link rel="canonical" href="https://karizmanakliyat.com.tr/" />
      </head>
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
