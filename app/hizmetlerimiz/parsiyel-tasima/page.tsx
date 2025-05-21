"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  TruckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartialTransportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Parsiyel Taşımacılık"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parsiyel Taşımacılık
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Küçük hacimli yükleriniz için ekonomik ve hızlı taşımacılık
              çözümleri. Parsiyel taşımacılık ile maliyetlerinizi düşürün.
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
                    src="/images/parsiyel.jpg"
                    alt="Parsiyel Taşımacılık Detay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Parsiyel Taşımacılık Hizmetimiz
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Karizma Nakliyat olarak, parsiyel taşımacılık hizmetimiz ile
                    küçük hacimli yüklerinizi ekonomik ve hızlı bir şekilde
                    taşıyoruz. Parsiyel taşımacılık, tam araç kapasitesini
                    doldurmayan yüklerin yüklerle
                    birleştirilerek taşınması anlamına gelir.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Bu hizmetimiz ithalat ve ihracat yapan firmalar için bire bir
                    çözümdür sadece kullandığınız
                    alan kadar ödeme yaparak maliyetlerinizi önemli ölçüde
                    düşürebilirsiniz.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Parsiyel taşımacılık hizmetimiz, Türkiye'nin tüm illerine ve
                    uluslararası destinasyonlara sunulmaktadır. Yükleriniz,
                    profesyonel ekibimiz tarafından özenle paketlenir,
                    etiketlenir ve takip edilir.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Ekonomik taşıma çözümü
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Hızlı teslimat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Profesyonel paketleme
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
                      <span className="text-gray-700">
                        Online takip sistemi
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Düzenli sevkiyat programı
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Parsiyel Taşımacılık Avantajları
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Maliyet Avantajı
                      </h4>
                      <p className="text-gray-600">
                        Parsiyel taşımacılık ile sadece kullandığınız alan kadar
                        ödeme yaparsınız. Bu sayede, tam araç kiralamaya göre
                        %30-60 arasında tasarruf sağlayabilirsiniz.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Hızlı Teslimat
                      </h4>
                      <p className="text-gray-600">
                        Düzenli sevkiyat programımız sayesinde, yükleriniz
                        beklemeden hızlı bir şekilde alıcısına ulaştırılır.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Esneklik</h4>
                      <p className="text-gray-600">
                        Farklı boyut ve ağırlıktaki yükleriniz için esnek
                        çözümler sunarız. Tek bir koliden tam palete kadar her
                        türlü yükünüzü taşıyabiliriz.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Güvenlik</h4>
                      <p className="text-gray-600">
                        Tüm yükleriniz sigorta kapsamındadır ve profesyonel
                        ekibimiz tarafından özenle elleçlenir.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Parsiyel Taşımacılık Sürecimiz
                  </h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Talep ve Fiyatlandırma
                        </h4>
                        <p className="text-gray-600">
                          Yükünüzün boyut, ağırlık ve varış noktası bilgilerini
                          alır, size özel fiyat teklifi sunarız.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Yük Alımı
                        </h4>
                        <p className="text-gray-600">
                          Belirlenen tarihte yükünüzü adresinizden alır,
                          gerekirse profesyonel paketleme yaparız.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Depolama
                        </h4>
                        <p className="text-gray-600">
                          Yükünüz, güvenli depolarımızda bekletilir ve
                          düzenli olarak kontrol edilir.
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
                          Yükünüz belirlenen sevkiyat programına göre varış
                          noktasına taşınır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Teslimat
                        </h4>
                        <p className="text-gray-600">
                          Yükünüz alıcı adresine teslim edilir ve teslimat
                          belgesi alınır.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Kimler İçin Uygundur?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Küçük ve orta ölçekli işletmeler
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Düzenli sevkiyat yapan firmalar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Bireysel müşteriler
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          İthalat ve ihracat yapan firmalar
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/iletisim">Parsiyel Taşıma Teklifi Alın</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sık Sorulan Sorular */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Sık Sorulan Sorular
                  </h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Parsiyel taşımacılık nedir?
                      </h4>
                      <p className="text-gray-600">
                        Parsiyel taşımacılık, tam araç kapasitesini doldurmayan
                        yüklerin diğer yüklerle birleştirilerek
                        taşınması anlamına gelir. Bu sayede, müşteriler sadece
                        kullandıkları alan kadar ödeme yaparlar.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Parsiyel taşımacılık ile ne kadar tasarruf
                        sağlayabilirim?
                      </h4>
                      <p className="text-gray-600">
                        Tasarruf miktarı, yükünüzün boyutu, ağırlığı ve varış noktasına göre
                        değişiklik gösterir.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Parsiyel taşımacılıkta teslimat süresi ne kadardır?
                      </h4>
                      <p className="text-gray-600">
                        Teslimat süresi, varış noktasına ve sevkiyat programına
                        göre değişiklik gösterir. Genellikle şehir içi
                        teslimatlar 1-2 gün, şehirlerarası teslimatlar 2-4 gün,
                        uluslararası teslimatlar ise 5-10 gün içinde
                        gerçekleştirilir.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Yükümü nasıl takip edebilirim?
                      </h4>
                      <p className="text-gray-600">
                        Yükünüzü, size verilen takip numarası ile online takip
                        sistemimizden izleyebilirsiniz. Ayrıca, müşteri
                        temsilcimiz tarafından düzenli olarak
                        bilgilendirilirsiniz.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Yükümün sigorta kapsamı nedir?
                      </h4>
                      <p className="text-gray-600">
                        Tüm yükleriniz, taşıma sürecinde oluşabilecek hasarlara
                        karşı sigorta kapsamındadır. Sigorta kapsamı ve
                        limitleri hakkında detaylı bilgi için müşteri
                        temsilcimizle görüşebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Hızlı Teklif Formu */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 sticky top-24">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">Parsiyel Taşıma Teklifi</h3>
                  <p className="text-sm opacity-90">
                    Hemen ücretsiz fiyat teklifi alın
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
                        email: (
                          form.querySelector("#email") as HTMLInputElement
                        ).value,
                        cargoType: (
                          form.querySelector("#cargo-type") as HTMLSelectElement
                        ).value,
                        weight: (
                          form.querySelector("#weight") as HTMLInputElement
                        ).value,
                        volume: (
                          form.querySelector("#volume") as HTMLInputElement
                        ).value,
                        from: (form.querySelector("#from") as HTMLInputElement)
                          .value,
                        to: (form.querySelector("#to") as HTMLInputElement)
                          .value,
                      };

                      const res = await fetch("/api/send-parsiyel-mail", {
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
                    {/* input alanları buradan itibaren aynı */}
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
                        htmlFor="cargo-type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Yük Tipi
                      </label>
                      <select
                        id="cargo-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="paket">Paket/Koli</option>
                        <option value="palet">Palet</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="weight"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Ağırlık (kg)
                        </label>
                        <input
                          type="number"
                          id="weight"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="volume"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Hacim (m³)
                        </label>
                        <input
                          type="number"
                          id="volume"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
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
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Teklif İste
                    </Button>
                  </form>
                </div>
              </div>

              {/* Parsiyel Taşıma Bilgilendirme */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Parsiyel Taşıma Bilgilendirme
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TruckIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Minimum Yük</p>
                        <p className="text-gray-600">
                          1 koli/paket (min. 1 kg)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Maksimum Yük
                        </p>
                        <p className="text-gray-600">10 palet (max. 5000 kg)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Sevkiyat Programı
                        </p>
                        <p className="text-gray-600">
                          Haftalık düzenli sevkiyatlar
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Sigorta</p>
                        <p className="text-gray-600">
                          Tüm yükler sigorta kapsamındadır
                        </p>
                      </div>
                    </div>
                  </div>
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
                  src="/images/sehirler-arasi.png"
                  alt="Şehirlerarası Taşımacılık"
                  fill
                  className="object-cover"
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
                  Eşyalarınız bizimle güvende.
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
                  alt="Proje Taşımacılığı"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Parsiyel Taşımacılık İçin Bize Ulaşın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ekonomik ve hızlı parsiyel taşımacılık hizmeti için hemen bizimle
            iletişime geçin. Uzman ekibimiz size özel çözümler sunacaktır.
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
