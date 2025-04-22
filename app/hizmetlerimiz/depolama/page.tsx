import Image from "next/image"
import Link from "next/link"
import { Archive, Shield, Clock, CheckCircle, Phone, Lock, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StorageServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/depolama.jpg" alt="Depolama Hizmetleri" fill className="object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Depolama Hizmetleri</h1>
            <p className="text-xl opacity-90 mb-8">
              Modern ve güvenli depolama tesislerimizde eşyalarınız güvende. Kısa ve uzun süreli depolama çözümleri
              sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/iletisim">Hemen Teklif Alın</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white">
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
                    src="/images/depolama-detay.jpg"
                    alt="Depolama Hizmetleri Detay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Depolama Hizmetlerimiz</h2>
                  <p className="text-gray-600 mb-4">
                    Karizma Nakliyat olarak, modern ve güvenli depolama tesislerimizde eşyalarınızı istediğiniz süre
                    boyunca saklıyoruz. Ev eşyalarından ticari mallara, arşiv belgelerinden sezonluk ürünlere kadar her
                    türlü eşyanız için özel depolama çözümleri sunuyoruz.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Depolama tesislerimiz, 7/24 güvenlik kameraları ile izlenmekte, nem ve sıcaklık kontrolü yapılmakta
                    ve yangın önleme sistemleri ile donatılmıştır. Eşyalarınız, profesyonel ekibimiz tarafından özenle
                    paketlenir, etiketlenir ve depolama alanına yerleştirilir.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Kısa süreli depolama ihtiyaçlarınız için saatlik veya günlük çözümler, uzun süreli depolama
                    ihtiyaçlarınız için aylık ve yıllık çözümler sunuyoruz. İhtiyacınıza göre farklı boyutlarda depolama
                    alanları mevcuttur.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Ev eşyası depolama</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Ticari mal depolama</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Arşiv depolama</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Sezonluk eşya depolama</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Kısa ve uzun süreli depolama</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Özel eşya depolama</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">Depolama Hizmetlerimizin Avantajları</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Güvenlik</h4>
                      <p className="text-gray-600">
                        7/24 güvenlik kameraları, alarm sistemleri ve güvenlik personeli ile eşyalarınız tam koruma
                        altındadır.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">İklim Kontrolü</h4>
                      <p className="text-gray-600">
                        Nem ve sıcaklık kontrollü depolama alanlarımız, hassas eşyalarınızın zarar görmesini önler.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Esneklik</h4>
                      <p className="text-gray-600">
                        İhtiyacınıza göre farklı boyutlarda depolama alanları ve esnek kiralama süreleri sunuyoruz.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Sigorta</h4>
                      <p className="text-gray-600">
                        Depolanan tüm eşyalarınız sigorta kapsamındadır. Olası hasarlara karşı tam koruma sağlıyoruz.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">Depolama Sürecimiz</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Keşif ve Planlama</h4>
                        <p className="text-gray-600">
                          Uzman ekibimiz, depolanacak eşyalarınızı yerinde inceler ve ihtiyacınıza uygun depolama
                          alanını belirler.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Paketleme</h4>
                        <p className="text-gray-600">
                          Eşyalarınız profesyonel ekibimiz tarafından özel malzemelerle güvenli bir şekilde paketlenir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Etiketleme ve Envanter</h4>
                        <p className="text-gray-600">
                          Tüm eşyalarınız etiketlenir ve detaylı bir envanter listesi oluşturulur.
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
                          Paketlenen eşyalarınız özel araçlarımızla depolama tesisimize taşınır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Depolama</h4>
                        <p className="text-gray-600">
                          Eşyalarınız, belirlenen depolama alanına yerleştirilir ve güvenle saklanır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">6</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Teslimat</h4>
                        <p className="text-gray-600">
                          İhtiyaç duyduğunuzda, eşyalarınız istediğiniz adrese teslim edilir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Depolama Çözümlerimiz</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Bireysel Depolama: Ev eşyaları, sezonluk eşyalar, kişisel eşyalar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Kurumsal Depolama: Ofis eşyaları, arşiv belgeleri, ticari mallar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Özel Eşya Depolama: Antika eşyalar, sanat eserleri, değerli eşyalar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Kısa Süreli Depolama: Taşınma, renovasyon, seyahat süreçlerinde
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Uzun Süreli Depolama: Yurtdışı görevleri, uzun süreli seyahatler
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/iletisim">Depolama Hizmeti Teklifi Alın</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Müşteri Yorumları */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Müşteri Yorumları</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">AY</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Ahmet Yılmaz</h4>
                          <p className="text-gray-500 text-sm">6 ay boyunca ev eşyalarını depoladı</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Yurtdışı görevim nedeniyle 6 ay boyunca ev eşyalarımı Karizma Nakliyat'ın depolama tesisinde
                        sakladım. Döndüğümde eşyalarımı ilk günkü gibi temiz ve hasarsız buldum. Profesyonel hizmetleri
                        için teşekkür ederim."
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">SD</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Selin Demir</h4>
                          <p className="text-gray-500 text-sm">Ofis taşınması sırasında depolama hizmeti aldı</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Ofisimizin taşınması sırasında geçici olarak eşyalarımızı depolamak zorunda kaldık. Karizma
                        Nakliyat'ın sunduğu depolama hizmeti sayesinde bu süreci sorunsuz atlattık. Güvenli ve temiz
                        depolama alanları için teşekkürler!"
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">MK</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Mehmet Kaya</h4>
                          <p className="text-gray-500 text-sm">Sezonluk ürünlerini depoluyor</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Şirketimizin sezonluk ürünlerini Karizma Nakliyat'ın depolama tesisinde saklıyoruz. İklim
                        kontrollü depolama alanları sayesinde ürünlerimiz her zaman ilk günkü gibi kalıyor. Ayrıca,
                        ihtiyaç duyduğumuzda hızlı teslimat hizmetleri de çok işimize yarıyor."
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
                  <h3 className="text-xl font-bold">Depolama Teklifi</h3>
                  <p className="text-sm opacity-90">Hemen ücretsiz fiyat teklifi alın</p>
                </div>
                <div className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="storage-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Depolama Tipi
                      </label>
                      <select
                        id="storage-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="ev">Ev Eşyası Depolama</option>
                        <option value="ofis">Ofis Eşyası Depolama</option>
                        <option value="ticari">Ticari Mal Depolama</option>
                        <option value="arsiv">Arşiv Depolama</option>
                        <option value="ozel">Özel Eşya Depolama</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                        Depolama Süresi
                      </label>
                      <select
                        id="duration"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="1-3">1-3 Ay</option>
                        <option value="3-6">3-6 Ay</option>
                        <option value="6-12">6-12 Ay</option>
                        <option value="12+">12+ Ay</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                        Detaylar
                      </label>
                      <textarea
                        id="details"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Depolanacak eşyalarınız hakkında bilgi veriniz."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Teklif İste
                    </Button>
                  </form>
                </div>
              </div>

              {/* Depolama Bilgilendirme */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Depolama Bilgilendirme</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Güvenlik</p>
                        <p className="text-gray-600">7/24 kamera ve alarm sistemleri</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Thermometer className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">İklim Kontrolü</p>
                        <p className="text-gray-600">Nem ve sıcaklık kontrollü alanlar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Archive className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Alan Seçenekleri</p>
                        <p className="text-gray-600">Farklı boyutlarda depolama alanları</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Sigorta</p>
                        <p className="text-gray-600">Tüm eşyalar sigorta kapsamındadır</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* İletişim Bilgileri */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">İletişim</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Telefon</p>
                        <a href="tel:+905551234567" className="text-blue-600 hover:underline">
                          +90 555 123 4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Çalışma Saatleri</p>
                        <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 18:00</p>
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
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Diğer Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/images/sehirlerarasi-tasima.jpg"
                  alt="Şehirlerarası Taşımacılık"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Şehirlerarası Taşımacılık</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Türkiye'nin 81 iline güvenli ve hızlı taşımacılık hizmeti. Eşyalarınız bizimle güvende.
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

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image src="/images/parsiyel-tasima.jpg" alt="Parsiyel Taşımacılık" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Parsiyel Taşımacılık</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Küçük hacimli yükleriniz için ekonomik çözümler. Parsiyel taşımacılık ile maliyetlerinizi düşürün.
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

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image src="/images/proje-tasima.jpg" alt="Proje Taşımacılığı" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Proje Taşımacılığı</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Büyük ölçekli projeler için özel lojistik çözümler. Ağır yük ve gabari dışı taşımacılık uzmanlığı.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Depolama Hizmetleri İçin Bize Ulaşın</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Modern ve güvenli depolama tesislerimizde eşyalarınızı güvenle saklıyoruz. Uzman ekibimiz size özel çözümler
            sunacaktır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/iletisim">Teklif Alın</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+905551234567">+90 555 123 4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
