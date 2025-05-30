import Image from "next/image"
import Link from "next/link"
import { Truck, Package, Home, Building, Archive, Globe } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-lg text-gray-600">
            Karizma Nakliyat olarak konteyner, proje, parsiyel taşımacılığında profesyonel çözümler sunuyoruz. Deneyimli ekibimiz ve
            modern araç filomuzla hizmetinizdeyiz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image src="/images/sehirler-arasi.png" alt="Sehirlerarası Taşıma Hizmeti" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Şehirlerarası Taşımacılık</h3>
              <p className="text-gray-600 mb-4">
                Yükünüzü güvenle ve özenle belirttiğiniz konuma taşıyoruz. Yükleriniz bizimle güvende.
              </p>
              <Link
                href="/hizmetlerimiz/sehirlerarasi-tasima"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image src="/images/parsiyel.jpg" alt="Ofis Taşıma Hizmeti" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parsiyel Taşımacılık</h3>
              <p className="text-gray-600 mb-4">
                İş yerinizi minimum kesinti ile yeni lokasyonunuza taşıyoruz. Elektronik cihazlar ve ofis mobilyaları
                için özel çözümler.
              </p>
              <Link
                href="/hizmetlerimiz/parsiyel-tasima"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image src="/images/konteyner.jpg" alt="Eşya Depolama Hizmeti" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Archive className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Konteyner Taşımacılığı</h3>
              <p className="text-gray-600 mb-4">
                Güvenli ve iklim kontrollü depolama alanlarımızda eşyalarınızı istediğiniz süre boyunca saklıyoruz.
              </p>
              <Link
                href="/hizmetlerimiz/konteyner-tasima"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image
                src="/images/proje.jpg"
                alt="Proje Taşımacılığı Hizmeti"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proje Taşımacılığı</h3>
              <p className="text-gray-600 mb-4">
                Türkiye'nin her noktasına güvenli ve hızlı taşımacılık hizmeti sunuyoruz. Uzun mesafe taşımacılığında
                uzman ekibimizle yanınızdayız.
              </p>
              <Link
                href="/hizmetlerimiz/proje-tasima"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <Image
                src="/images/depolama.jpg"
                alt="Depolama Hizmeti"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Depolama Hizmetleri</h3>
              <p className="text-gray-600 mb-4">
                Yurtdışına taşınma planlarınız için kapsamlı çözümler sunuyoruz. Gümrük işlemleri ve uluslararası
                nakliye konusunda deneyimli ekibimizle hizmetinizdeyiz.
              </p>
              <Link
                href="/hizmetlerimiz/depolama"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Taşınma Planlarınız İçin Bize Ulaşın</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin. Uzman ekibimiz size en uygun çözümü sunacaktır.
          </p>
          <Link
            href="/iletisim"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Teklif Alın
          </Link>
        </div>
      </div>
    </div>
  )
}
