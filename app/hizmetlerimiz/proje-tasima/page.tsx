"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Briefcase,
  HardHat,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectTransportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Proje Taşımacılığı"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proje Taşımacılığı
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Büyük ölçekli projeler için özel lojistik çözümler. Ağır yük ve
              gabari dışı taşımacılık konusunda uzman ekibimizle yanınızdayız.
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
                    src="/images/proje.jpg"
                    alt="Proje Taşımacılığı Detay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Proje Taşımacılığı Hizmetimiz
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Karizma Nakliyat olarak, büyük ölçekli projeler için özel
                    lojistik çözümler sunuyoruz. Ağır yük ve gabari dışı
                    taşımacılık konusunda uzmanlaşmış ekibimiz ve özel
                    ekipmanlarımızla, en zorlu projelerde bile güvenilir hizmet
                    veriyoruz.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Proje taşımacılığı, standart taşımacılık hizmetlerinden
                    farklı olarak, her proje için özel planlama, risk
                    değerlendirmesi ve uygulama gerektiren bir hizmettir.
                    Endüstriyel ekipmanlar, ağır makineler, fabrika taşımaları,
                    enerji santralleri ekipmanları gibi özel taşıma gerektiren
                    yükler için kapsamlı çözümler sunuyoruz.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Proje taşımacılığı hizmetimiz, yükün özelliklerine göre özel
                    taşıma araçları, kaldırma ekipmanları ve uzman personel ile
                    desteklenir. Tüm süreç boyunca, projenizin güvenli ve
                    zamanında tamamlanması için titizlikle çalışırız.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Ağır yük taşımacılığı
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Gabari dışı taşımacılık
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Endüstriyel ekipman taşıma
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Fabrika taşıma</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Enerji ekipmanları taşıma
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        İnşaat ekipmanları taşıma
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Proje Taşımacılığı Avantajları
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Özel Çözümler
                      </h4>
                      <p className="text-gray-600">
                        Her proje için özel olarak tasarlanmış taşıma çözümleri
                        sunuyoruz. Yükünüzün boyutu, ağırlığı ve hassasiyeti ne
                        olursa olsun, en uygun taşıma yöntemini belirliyoruz.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Uzman Ekip
                      </h4>
                      <p className="text-gray-600">
                        Proje taşımacılığı konusunda uzmanlaşmış mühendisler,
                        teknik personel ve operatörlerden oluşan ekibimiz, en
                        zorlu projelerde bile güvenli ve verimli çözümler sunar.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Özel Ekipmanlar
                      </h4>
                      <p className="text-gray-600">
                        Ağır yük taşıma araçları, hidrolik platformlar, vinçler
                        ve diğer özel ekipmanlarla donatılmış filomuz, her türlü
                        proje taşımacılığı için hazırdır.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Kapsamlı Planlama
                      </h4>
                      <p className="text-gray-600">
                        Proje başlamadan önce detaylı risk analizi, rota
                        planlaması ve lojistik stratejisi oluşturuyoruz. Bu
                        sayede, projenizin sorunsuz ilerlemesini sağlıyoruz.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Proje Taşımacılığı Sürecimiz
                  </h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Keşif ve Analiz
                        </h4>
                        <p className="text-gray-600">
                          Proje ekibimiz, taşınacak yükü yerinde inceler,
                          gerekli ölçümleri yapar ve taşıma için en uygun
                          yöntemi belirler.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Planlama ve Hazırlık
                        </h4>
                        <p className="text-gray-600">
                          Detaylı bir taşıma planı oluşturulur, gerekli izinler
                          alınır ve özel ekipmanlar hazırlanır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Demontaj (Gerekirse)
                        </h4>
                        <p className="text-gray-600">
                          Büyük ekipmanlar için gerekirse demontaj işlemi
                          yapılır ve parçalar güvenli bir şekilde paketlenir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Yükleme ve Sabitleme
                        </h4>
                        <p className="text-gray-600">
                          Özel ekipmanlarla yük güvenli bir şekilde taşıma
                          aracına yüklenir ve sabitlenir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Taşıma</h4>
                        <p className="text-gray-600">
                          Önceden belirlenen rota üzerinden, gerekli güvenlik
                          önlemleri alınarak taşıma gerçekleştirilir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">6</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Montaj ve Kurulum
                        </h4>
                        <p className="text-gray-600">
                          Varış noktasında yük boşaltılır ve gerekirse montaj ve
                          kurulum işlemleri yapılır.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Proje Taşımacılığı Uzmanlık Alanlarımız
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Enerji santralleri ekipmanları taşıma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Endüstriyel makineler ve üretim hatları taşıma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          İnşaat ve madencilik ekipmanları taşıma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Transformatör ve elektrik ekipmanları taşıma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Rüzgar türbinleri ve güneş panelleri taşıma
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/iletisim">
                        Proje Taşımacılığı Teklifi Alın
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
                          <span className="text-blue-600 font-bold">MK</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Mehmet Kaya
                          </h4>
                          <p className="text-gray-500 text-sm">
                            ABC Enerji - Proje Müdürü
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Rüzgar türbini projemizde Karizma Nakliyat ile
                        çalıştık. Zorlu bir proje olmasına rağmen, profesyonel
                        ekipleri ve özel ekipmanları sayesinde tüm türbin
                        parçaları güvenle taşındı. Planlama aşamasından kuruluma
                        kadar her detayı düşünmüşlerdi."
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">AD</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Ayşe Demir
                          </h4>
                          <p className="text-gray-500 text-sm">
                            XYZ Makine - Operasyon Direktörü
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Fabrika taşıma projemizde Karizma Nakliyat'ın sunduğu
                        çözümler sayesinde hiçbir aksaklık yaşamadık. Ağır
                        makinelerimiz özenle taşındı ve yeni lokasyonumuzda
                        sorunsuz kuruldu. Teşekkürler!"
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">HS</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            Hakan Şahin
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Mega İnşaat - Proje Müdürü
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Büyük inşaat projelerimizde ağır yük taşıma konusunda
                        Karizma Nakliyat'ın uzmanlığından faydalanıyoruz.
                        Özellikle gabari dışı yüklerin taşınmasında
                        gösterdikleri titizlik ve profesyonellik için teşekkür
                        ederiz."
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
                  <h3 className="text-xl font-bold">Proje Taşıma Teklifi</h3>
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
                        projectType: (
                          form.querySelector(
                            "#project-type"
                          ) as HTMLSelectElement
                        ).value,
                        details: (
                          form.querySelector("#details") as HTMLTextAreaElement
                        ).value,
                        from: (form.querySelector("#from") as HTMLInputElement)
                          .value,
                        to: (form.querySelector("#to") as HTMLInputElement)
                          .value,
                      };

                      const res = await fetch("/api/send-project-mail", {
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
                        htmlFor="project-type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Proje Tipi
                      </label>
                      <select
                        id="project-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="enerji">Enerji Ekipmanları</option>
                        <option value="fabrika">Fabrika Taşıma</option>
                        <option value="insaat">İnşaat Ekipmanları</option>
                        <option value="makine">Endüstriyel Makineler</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Proje Detayları
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Taşınacak yükün boyutları, ağırlığı, özel gereksinimleri vb."
                        required
                      ></textarea>
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

              {/* Proje Taşımacılığı Bilgilendirme */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Proje Taşımacılığı Bilgilendirme
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Proje Yönetimi
                        </p>
                        <p className="text-gray-600">
                          Her proje için özel ekip ve planlama
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HardHat className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Uzman Ekip</p>
                        <p className="text-gray-600">
                          Mühendisler ve teknik personel
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Özel Ekipmanlar
                        </p>
                        <p className="text-gray-600">
                          Ağır yük taşıma araçları ve vinçler
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Sigorta</p>
                        <p className="text-gray-600">
                          Tüm projeler sigorta kapsamındadır
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Proje Taşımacılığı İçin Bize Ulaşın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Büyük ölçekli projeleriniz için özel lojistik çözümler sunuyoruz.
            Uzman ekibimiz size özel çözümler sunacaktır.
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
