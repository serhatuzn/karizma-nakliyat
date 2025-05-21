"use client"

import Image from "next/image";
import Link from "next/link";
import { MapPin, Shield, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntercityTransportPage() {
  // Şehirlerarası taşımacılık hizmeti verilen örnek şehirler
  const cities = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Şanlıurfa",
    "Kocaeli",
    "Mersin",
    "Diyarbakır",
    "Hatay",
    "Manisa",
    "Kayseri",
    "Samsun",
    "Balıkesir",
    "Kahramanmaraş",
    "Van",
    "Aydın",
    "Denizli",
    "Sakarya",
    "Tekirdağ",
    "Muğla",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Şehirlerarası Yük Taşımacılığı"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Şehirlerarası Yük Taşımacılığı
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Türkiye'nin 81 iline konteyner, ticari yük ve proje taşımacılığı
              çözümleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/iletisim">Hemen Teklif Alın</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+905551234567">Bizi Arayın</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-80">
                  <Image
                    src="/images/sehirler-arasi.png"
                    alt="Şehirlerarası Taşımacılık Detay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Şehirlerarası Taşımacılık Hizmetimiz
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Karizma Nakliyat olarak, Türkiye'nin dört bir yanına ağır
                    yük, konteyner ve ticari malzeme taşımacılığı hizmeti
                    sunuyoruz. Modern araç filomuz ve uzman kadromuzla her tür
                    projenize çözüm sunmaktayız.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Konteyner taşımacılığı, inşaat ve sanayi projeleri, büyük
                    sevkiyatlar gibi alanlarda kurumsal ve güvenli lojistik
                    destek sağlıyoruz.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Tüm taşımalar, özel ekibimizle yapılır ve sigorta
                    kapsamındadır. Teslimatlar zamanında ve eksiksiz olarak
                    gerçekleştirilir.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Ağır yük ve proje taşımacılığı
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Konteyner taşımacılığı
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Sigortalı taşımacılık
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Zamanında teslimat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        7/24 müşteri desteği
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Ulusal ağ, 81 ilde hizmet
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Şehirlerarası Taşımacılık Sürecimiz
                  </h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Keşif ve Planlama
                        </h4>
                        <p className="text-gray-600">
                          Yük türü ve miktarına göre uygun araç ve ekip
                          belirlenir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Hazırlık
                        </h4>
                        <p className="text-gray-600">
                          Yükleriniz güvenli taşıma için ekibimizle özel olarak
                          hazırlanır 
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Yükleme
                        </h4>
                        <p className="text-gray-600">
                          Güvenli bir şekilde yükleme işlemi gerçekleştirilir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Taşıma</h4>
                        <p className="text-gray-600">
                          Yükleriniz, deneyimli sürücülerimiz tarafından güvenli
                          bir şekilde taşınır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Sevkiyat
                        </h4>
                        <p className="text-gray-600">
                          Araçlarımızla Türkiye genelinde güvenli şekilde
                          sevkiyat gerçekleştirilir
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Neden Karizma Nakliyat?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          20 yılı aşkın sektör tecrübesi
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Modern ve bakımlı araç filosu
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Profesyonel ve deneyimli ekip
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Sigortalı taşımacılık güvencesi
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Rekabetçi fiyatlar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Müşteri memnuniyeti odaklı hizmet
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/iletisim">
                        Ücretsiz Keşif ve Fiyat Teklifi Alın
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Müşteri Yorumları */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Müşteri Yorumları
                  </h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">AY</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Ahmet Yılmaz
                          </h4>
                          <p className="text-gray-500 text-sm">
                            İstanbul - Gaziantep proje taşımacılığı
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Büyük ölçekli projemizin yüklerini Karizma Nakliyat ile
                        taşıdık. Zamanında teslimat ve mükemmel koordinasyon
                        sayesinde işlerimiz aksamadı. Kurumsal desteklerinden
                        çok memnun kaldık."
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">SD</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Selin Demir
                          </h4>
                          <p className="text-gray-500 text-sm">
                            İzmir - Kayseri konteyner taşıması
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Yüksek hacimli konteyner taşımamızda tüm süreç şeffaf
                        ve kontrollü ilerledi. GPS takip ve düzenli
                        bilgilendirme ile yüklerimizin güvende olduğunu
                        hissettik."
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">MK</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Mehmet Kaya
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Adana - Samsun ticari yük transferi
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Ticari ürün sevkiyatımız için aldığımız hizmetten
                        oldukça memnunuz. Taşıma süreci boyunca profesyonel
                        destek aldık ve yüklerimiz sorunsuz teslim edildi."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Hizmet Verilen Şehirler */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Hizmet Verilen Şehirler
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.map((city, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hızlı Teklif Formu */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 sticky top-24">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">Hızlı Teklif Formu</h3>
                  <p className="text-sm opacity-90">
                    Ücretsiz keşif ve fiyat teklifi alın
                  </p>
                </div>
                <div className="p-6">
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;

                      const data = {
                        name: (form.querySelector("#name") as HTMLInputElement)
                          .value,
                        phone: (
                          form.querySelector("#phone") as HTMLInputElement
                        ).value,
                        from: (form.querySelector("#from") as HTMLInputElement)
                          .value,
                        to: (form.querySelector("#to") as HTMLInputElement)
                          .value,
                        date: (form.querySelector("#date") as HTMLInputElement)
                          .value,
                        notes: (
                          form.querySelector("#notes") as HTMLTextAreaElement
                        ).value,
                      };

                      const res = await fetch("/api/send-city-mail", {
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

                    <div>
                      <label
                        htmlFor="from"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nereden
                      </label>
                      <input
                        type="text"
                        id="from"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="to"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nereye
                      </label>
                      <input
                        type="text"
                        id="to"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Taşınma Tarihi
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Notlar
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Teklif İste
                    </Button>
                  </form>
                </div>
              </div>

              {/* İletişim Bilgileri */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    İletişim
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Telefon</p>
                        <a
                          href="tel:+905330367300"
                          className="text-blue-600 hover:underline"
                        >
                          +90 533 036 7300
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Çalışma Saatleri
                        </p>
                        <p className="text-gray-600">
                          Pazartesi - Cuma: 08:00 - 18:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Güvence</p>
                        <p className="text-gray-600">
                          Tüm taşımalarımız sigorta kapsamındadır
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Hizmetlerimiz */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Diğer Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/images/parsiyel.jpg"
                  alt="Parsiyel Taşımacılık"
                  fill
                  className="object-cover"
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

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/images/konteyner.jpg"
                  alt="Konteyner Taşımacılığı"
                  fill
                  className="object-cover"
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

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/images/proje.jpg"
                  alt="Proje Hizmetleri"
                  fill
                  className="object-cover"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Şehirlerarası Taşımacılık İçin Bize Ulaşın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Güvenli ve ekonomik şehirlerarası taşımacılık hizmeti için hemen
            bizimle iletişime geçin. Uzman ekibimiz size özel çözümler
            sunacaktır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/iletisim">Teklif Alın</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+905330367300">+90 533 036 7300</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
