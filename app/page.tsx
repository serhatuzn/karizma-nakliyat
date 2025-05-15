"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  Truck,
  Shield,
  Award,
  CheckCircle,
  FileCheck,
  Globe,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  // Referanslar için örnek şirketler (siz gerçek şirket isimlerini ekleyebilirsiniz)
  const references = [
    { name: "CWT Anadolu", logo: "/images/references/cwt.jpg" },
    { name: "DHL Global", logo: "/images/references/Dhl.png" },
    { name: "SKYLİNE Logistic", logo: "/images/references/Skyline.png" },
    { name: "Midas Global", logo: "/images/references/Midas.jpg" },
    { name: "EXPEDİTORS", logo: "/images/references/expeditors.png" },
    { name: "BARSAN GlobaL", logo: "/images/references/barsan.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Daha etkileyici ve modern */}
      <section className="relative h-[85vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Karizma Nakliyat Taşıma Hizmeti"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Profesyonel Lojistik ve Nakliyat Çözümleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              20 yılı aşkın tecrübemizle Türkiye'nin ve dünyanın her noktasına
              güvenilir taşımacılık hizmeti sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                <Link href="/iletisim">Hemen Teklif Alın</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center backdrop-blur-sm"
              >
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Öne Çıkan İstatistikler */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold">20+</div>
                <div className="text-sm md:text-base text-blue-100">
                  Yıllık Tecrübe
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">5000+</div>
                <div className="text-sm md:text-base text-blue-100">
                  Başarılı Taşıma
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">20+</div>
                <div className="text-sm md:text-base text-blue-100">
                  Uzman Personel
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">30+</div>
                <div className="text-sm md:text-base text-blue-100">
                  Araç Filosu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz - Daha modern ve görsel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Karizma Nakliyat olarak müşterilerimize kapsamlı lojistik ve
              taşımacılık çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hizmet 1 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/sehirler-arasi.png"
                  alt="Şehirlerarası Taşımacılık"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Şehirlerarası Taşımacılık
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Türkiye'nin 81 iline güvenli ve hızlı taşımacılık hizmeti.
                  Özel araç filomuz ve uzman ekibimizle eşyalarınız güvende.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 2 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/parsiyel.jpg"
                  alt="Parsiyel Taşımacılık"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Parsiyel Taşımacılık
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Küçük hacimli yükleriniz için ekonomik çözümler. Parsiyel
                  taşımacılık ile maliyetlerinizi düşürün.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 3 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/konteyner.jpg"
                  alt="Konteyner Taşımacılığı"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Konteyner Taşımacılığı
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Uluslararası standartlarda konteyner taşımacılığı hizmeti.
                  Deniz, kara ve demiryolu entegrasyonu.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 4 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/proje.jpg"
                  alt="Proje Taşımacılığı"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Proje Taşımacılığı
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Büyük ölçekli projeler için özel lojistik çözümler. Ağır yük
                  ve gabari dışı taşımacılık uzmanlığı.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 5 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/depolama.jpg"
                  alt="Depolama Hizmetleri"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Depolama Hizmetleri
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Modern ve güvenli depolama tesislerimizde eşyalarınız güvende.
                  Kısa ve uzun süreli depolama çözümleri.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/hizmetlerimiz">Tüm Hizmetlerimizi Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz - Daha detaylı ve ikna edici */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Karizma Nakliyat olarak müşteri memnuniyetini en üst seviyede
              tutmak için çalışıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">20+ Yıllık Tecrübe</h3>
              <p className="text-gray-600">
                20 yılı aşkın sektör tecrübemizle, lojistik alanında uzmanlaşmış
                kadromuz ve modern araç filomuzla hizmetinizdeyiz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sigortalı Taşımacılık</h3>
              <p className="text-gray-600">
                Tüm taşımacılık operasyonlarımız sigorta kapsamındadır.
                Eşyalarınız bizimle %100 güvende.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Araç Filosu</h3>
              <p className="text-gray-600">
                Düzenli bakımı yapılan, modern ve geniş araç filomuzla her türlü
                taşımacılık ihtiyacınıza çözüm sunuyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resmi Belgeler</h3>
              <p className="text-gray-600">
                K1, K2, C2 ve diğer tüm gerekli yetki belgelerine sahibiz. Yasal
                gereklilikler konusunda endişelenmeyin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Profesyonel Ekip</h3>
              <p className="text-gray-600">
                Uzman ve deneyimli personelimiz, taşıma sürecinin her aşamasında
                profesyonel hizmet sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü - Ana sayfada kısa tanıtım */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Karizma Nakliyat Hakkında
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                1998 yılında kurulan Karizma Nakliyat, lojistik sektöründe
                güvenilir ve kaliteli hizmet anlayışıyla öne çıkan bir markadır.
                Müşteri memnuniyetini her zaman ön planda tutan firmamız,
                yılların verdiği tecrübe ile sektörde lider konumdadır.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Modern araç filomuz, uzman kadromuz ve teknolojik altyapımız ile
                ev ve ofis taşımacılığından uluslararası lojistik çözümlere
                kadar geniş bir hizmet yelpazesi sunuyoruz.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">20+ Yıllık Deneyim</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Profesyonel Ekip</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Modern Araç Filosu</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Sigortalı Taşımacılık</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
              </Button>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/ekip.jpg"
                alt="Karizma Nakliyat Ekibi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar Bölümü */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Referanslarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yıllar içinde birçok saygın kurum ve kuruluşa hizmet verdik. İşte
              bize güvenen markalardan bazıları:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={ref.logo || "/placeholder.svg"}
                    alt={ref.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/referanslar">Tüm Referanslarımızı Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Yetki Belgeleri Tanıtımı */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Yetki Belgelerimiz</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Karizma Nakliyat olarak tüm yasal gereklilikleri karşılıyor, gerekli
            tüm yetki belgelerine sahibiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              K1 Yetki Belgesi
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              Tio Yetki Belgesi
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              Ticaret Odası Belgesi
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              Emtia Taşıma Belgesi
            </div>
          </div>
          <Button className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/belgelerimiz">Belgelerimizi İnceleyin</Link>
          </Button>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Hemen Teklif Alın</h2>
                <p className="text-lg mb-6 opacity-90">
                  Taşıma ihtiyaçlarınız için ücretsiz keşif ve fiyat teklifi
                  alın. Uzman ekibimiz size en uygun çözümü sunacaktır.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    <span>+90 533 036 7300</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>info@karizmanakliyat.com.tr</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Teklif Formu
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;

                    const data = {
                      name: (form.querySelector("#name") as HTMLInputElement)
                        .value,
                      phone: (form.querySelector("#phone") as HTMLInputElement)
                        .value,
                      email: (form.querySelector("#email") as HTMLInputElement)
                        .value,
                      service: (
                        form.querySelector("#service") as HTMLSelectElement
                      ).value,
                      message: (
                        form.querySelector("#message") as HTMLTextAreaElement
                      ).value,
                    };

                    const res = await fetch("/api/send-mail", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });

                    if (res.ok) {
                      alert("Teklif formunuz başarıyla gönderildi!");
                      form.reset();
                    } else {
                      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Hizmet Türü
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="sehirlerarasi">
                        Şehirlerarası Taşımacılık
                      </option>
                      <option value="parsiyel">Parsiyel Taşımacılık</option>
                      <option value="konteyner">Konteyner Taşımacılığı</option>
                      <option value="proje">Proje Taşımacılığı</option>
                      <option value="depolama">Depolama Hizmetleri</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Teklif İsteyin
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
