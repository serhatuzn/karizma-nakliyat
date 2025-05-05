"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  // Desktop dropdown states
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false)
  const [isDesktopDocsOpen, setIsDesktopDocsOpen] = useState(false)

  // Refs for dropdown menus
  const servicesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)

  // Handle outside click to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsDesktopServicesOpen(false)
      }
      if (docsRef.current && !docsRef.current.contains(event.target as Node)) {
        setIsDesktopDocsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/karizma_logo.png" alt="Karizma Nakliyat Logo" width={180} height={50} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Ana Sayfa
            </Link>

            {/* Hizmetlerimiz Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-1"
                onClick={() => {
                  setIsDesktopServicesOpen(!isDesktopServicesOpen)
                  setIsDesktopDocsOpen(false)
                }}
                aria-expanded={isDesktopServicesOpen}
              >
                Hizmetlerimiz
                <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isDesktopServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="p-2">
                    <Link
                      href="/hizmetlerimiz/sehirlerarasi-tasima"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Şehirlerarası Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetlerimiz/parsiyel-tasima"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Parsiyel Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetlerimiz/konteyner-tasima"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Konteyner Taşımacılığı
                    </Link>
                    <Link
                      href="/hizmetlerimiz/proje-tasima"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Proje Taşımacılığı
                    </Link>
                    <Link
                      href="/hizmetlerimiz/depolama"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Depolama Hizmetleri
                    </Link>
                    <Link
                      href="/hizmetlerimiz"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-md"
                      onClick={() => setIsDesktopServicesOpen(false)}
                    >
                      Tüm Hizmetlerimiz
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/hakkimizda"
              className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Hakkımızda
            </Link>

            <Link
              href="/referanslar"
              className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Referanslar
            </Link>

            {/* Belgelerimiz Dropdown */}
            <div className="relative" ref={docsRef}>
              <button
                className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-1"
                onClick={() => {
                  setIsDesktopDocsOpen(!isDesktopDocsOpen)
                  setIsDesktopServicesOpen(false)
                }}
                aria-expanded={isDesktopDocsOpen}
              >
                Belgelerimiz
                <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopDocsOpen ? "rotate-180" : ""}`} />
              </button>

              {isDesktopDocsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="p-2">
                    <Link
                      href="/belgelerimiz"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopDocsOpen(false)}
                    >
                      K1 Yetki Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopDocsOpen(false)}
                    >
                      Tio Yeki Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopDocsOpen(false)}
                    >
                      Emtia Taşıma Belgesi
                    </Link>                    <Link
                      href="/belgelerimiz"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsDesktopDocsOpen(false)}
                    >
                      Ticaret Odası Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-md"
                      onClick={() => setIsDesktopDocsOpen(false)}
                    >
                      Tüm Belgelerimiz
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Galeri Button */}
            <Link
              href="/galeri"
              className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Galeri
            </Link>

            <Link
              href="/iletisim"
              className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
            >
              İletişim
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+905330367300">Hemen Ara</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>

              {/* Mobile Hizmetlerimiz Dropdown */}
              <div>
                <button
                  className="w-full text-left text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                >
                  <span>Hizmetlerimiz</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      href="/hizmetlerimiz/sehirlerarasi-tasima"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Şehirlerarası Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetlerimiz/parsiyel-tasima"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Parsiyel Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetlerimiz/konteyner-tasima"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Konteyner Taşımacılığı
                    </Link>
                    <Link
                      href="/hizmetlerimiz/proje-tasima"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Proje Taşımacılığı
                    </Link>
                    <Link
                      href="/hizmetlerimiz/depolama"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Depolama Hizmetleri
                    </Link>
                    <Link
                      href="/hizmetlerimiz/uluslararasi-tasima"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Uluslararası Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetlerimiz"
                      className="block py-2 px-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tüm Hizmetlerimiz
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/hakkimizda"
                className="text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>

              <Link
                href="/referanslar"
                className="text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Referanslar
              </Link>

              {/* Mobile Belgelerimiz Dropdown */}
              <div>
                <button
                  className="w-full text-left text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => setIsDocsOpen(!isDocsOpen)}
                  aria-expanded={isDocsOpen}
                >
                  <span>Belgelerimiz</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDocsOpen ? "rotate-180" : ""}`} />
                </button>

                {isDocsOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      href="/belgelerimiz/k1-belgesi"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      K1 Yetki Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz/k2-belgesi"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      K2 Yetki Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz/c2-belgesi"
                      className="block py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      C2 Yetki Belgesi
                    </Link>
                    <Link
                      href="/belgelerimiz"
                      className="block py-2 px-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tüm Belgelerimiz
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/iletisim"
                className="text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>

              <a
                href="tel:+905551234567"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
