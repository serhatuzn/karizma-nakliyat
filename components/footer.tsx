import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/icon.svg"
              alt="Karizma Nakliyat Logo"
              width={180}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              20 yılı aşkın tecrübemizle taşımacılıkta güvenilir çözüm ortağınız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/karizmagrouppp/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-gray-400 hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Fixed links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetlerimiz/sehirlerarasi-tasima"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Şehirlerarası Taşıma
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/parsiyel-tasima"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Parsiyel Taşıma
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/konteyner-tasima"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Konteyner Taşıma
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/proje-tasima" className="text-gray-400 hover:text-white transition-colors">
                  Proje Taşıma
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/depolama" className="text-gray-400 hover:text-white transition-colors">
                  Depolama Hizmetleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Yakuplu Mahallesi, 64. Sokak No:54, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+905551234567" className="text-gray-400 hover:text-white transition-colors">
                  +90 533 036 7300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:info@karizmanakliyat.com.tr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@karizmanakliyat.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Karizma Nakliyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
