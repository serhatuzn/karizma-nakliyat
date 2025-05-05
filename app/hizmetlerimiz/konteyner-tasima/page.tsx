import Image from "next/image"
import Link from "next/link"
import { Package, Shield, Clock, CheckCircle, Phone, Anchor, Truck, Train } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContainerTransportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Konteyner Taşımacılığı"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Konteyner Taşımacılığı</h1>
            <p className="text-xl opacity-90 mb-8">
              Uluslararası standartlarda konteyner taşımacılığı hizmeti. Deniz, kara ve demiryolu entegrasyonu ile
              kapıdan kapıya güvenli taşımacılık.
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
                    src="/images/konteyner.jpg"
                    alt="Konteyner Taşımacılığı Detay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Konteyner Taşımacılığı Hizmetimiz</h2>
                  <p className="text-gray-600 mb-4">
                    Karizma Nakliyat olarak, uluslararası standartlarda konteyner taşımacılığı hizmeti sunuyoruz.
                    Konteyner taşımacılığı, yüklerin standart boyutlardaki konteynerler içinde taşınması anlamına gelir
                    ve özellikle uluslararası taşımacılıkta tercih edilen güvenli bir yöntemdir.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Konteyner taşımacılığı hizmetimiz, deniz, kara ve demiryolu entegrasyonu ile kapıdan kapıya güvenli
                    taşımacılık imkanı sunar. İthalat, ihracat ve transit taşımacılık operasyonlarınız için komple
                    çözümler sunuyoruz.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Farklı boyutlarda konteynerler (20', 40', 40'HC, Reefer vb.) ile her türlü yükünüzü güvenle
                    taşıyoruz. Gümrükleme, sigorta ve depolama hizmetlerimiz ile uluslararası taşımacılık süreçlerinizi
                    kolaylaştırıyoruz.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">FCL (Full Container Load) Hizmeti</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">LCL (Less Container Load) Hizmeti</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Intermodal Taşımacılık</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Gümrükleme Hizmetleri</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Sigorta Hizmetleri</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">Depolama Hizmetleri</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">Konteyner Taşımacılığı Avantajları</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Güvenlik</h4>
                      <p className="text-gray-600">
                        Konteynerler, yüklerinizi dış etkenlerden (hava koşulları, çalınma, hasar vb.) korur ve güvenli
                        bir taşıma sağlar.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Standartlaştırılmış Taşıma</h4>
                      <p className="text-gray-600">
                        Uluslararası standartlardaki konteynerler, farklı taşıma modları (deniz, kara, demiryolu)
                        arasında kolay aktarım imkanı sunar.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Maliyet Avantajı</h4>
                      <p className="text-gray-600">
                        Büyük hacimli yüklerin taşınmasında konteyner kullanımı, diğer taşıma yöntemlerine göre daha
                        ekonomiktir.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">İzlenebilirlik</h4>
                      <p className="text-gray-600">
                        Konteyner takip sistemleri sayesinde, yükünüzün nerede olduğunu her an izleyebilirsiniz.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">Konteyner Taşımacılığı Sürecimiz</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Talep ve Planlama</h4>
                        <p className="text-gray-600">
                          Yükünüzün detaylarını alır, en uygun konteyner tipini ve taşıma rotasını belirleriz.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Konteyner Temini</h4>
                        <p className="text-gray-600">
                          Yükünüze uygun konteyner temin edilir ve yükleme noktasına getirilir.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Yükleme ve Mühürleme</h4>
                        <p className="text-gray-600">
                          Yükünüz konteynere yüklenir, güvenli bir şekilde sabitlenir ve konteyner mühürlenir.
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
                          Konteyner, belirlenen rota üzerinden (deniz, kara, demiryolu) varış noktasına taşınır.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Gümrük İşlemleri</h4>
                        <p className="text-gray-600">
                          Gerekli gümrük işlemleri tamamlanır ve konteyner gümrükten çekilir.
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
                          Konteyner alıcı adresine teslim edilir, boşaltılır ve iade edilir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Konteyner Tipleri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">20' Standart Konteyner</span>
                          <p className="text-sm text-gray-600">İç Hacim: 33.2 m³, Maksimum Yük: 28 ton</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">40' Standart Konteyner</span>
                          <p className="text-sm text-gray-600">İç Hacim: 67.7 m³, Maksimum Yük: 28 ton</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">40' High Cube Konteyner</span>
                          <p className="text-sm text-gray-600">İç Hacim: 76.4 m³, Maksimum Yük: 28 ton</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">Reefer Konteyner</span>
                          <p className="text-sm text-gray-600">Soğutmalı konteyner, sıcaklık kontrollü taşıma</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">Open Top Konteyner</span>
                          <p className="text-sm text-gray-600">Üstü açılabilir konteyner, yüksek yükler için</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-800">Flat Rack Konteyner</span>
                          <p className="text-sm text-gray-600">Yanları açık konteyner, geniş yükler için</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/iletisim">Konteyner Taşıma Teklifi Alın</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Taşıma Modları */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Konteyner Taşıma Modları</h3>
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Anchor className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Deniz Yolu Taşımacılığı</h4>
                        <p className="text-gray-600 mb-2">
                          Büyük hacimli yükler için en ekonomik taşıma yöntemidir. Dünya genelindeki tüm büyük limanlara
                          konteyner taşımacılığı hizmeti sunuyoruz.
                        </p>
                        <p className="text-gray-600">
                          FCL (Full Container Load) ve LCL (Less Container Load) seçenekleri ile her ölçekteki yükünüz
                          için uygun çözümler sunuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Truck className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Kara Yolu Taşımacılığı</h4>
                        <p className="text-gray-600 mb-2">
                          Kapıdan kapıya konteyner taşımacılığı için kara yolu taşımacılığı hizmeti sunuyoruz.
                          Limanlardan iç bölgelere veya doğrudan sınır kapılarına konteyner taşıma hizmeti veriyoruz.
                        </p>
                        <p className="text-gray-600">
                          Modern araç filomuz ve deneyimli sürücülerimiz ile konteynerlerinizi güvenle taşıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Train className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Demir Yolu Taşımacılığı</h4>
                        <p className="text-gray-600 mb-2">
                          Uzun mesafeli taşımalar için ekonomik ve çevre dostu bir alternatif olan demir yolu
                          taşımacılığı hizmeti sunuyoruz. Özellikle Avrupa ve Asya rotalarında tercih edilen bir
                          yöntemdir.
                        </p>
                        <p className="text-gray-600">
                          Intermodal taşımacılık çözümlerimiz ile deniz, kara ve demir yolu entegrasyonu sağlıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sık Sorulan Sorular */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Sık Sorulan Sorular</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Konteyner taşımacılığı ne kadar sürer?</h4>
                      <p className="text-gray-600">
                        Taşıma süresi, varış noktasına ve taşıma moduna göre değişiklik gösterir. Deniz yolu ile
                        Avrupa'ya 7-10 gün, Uzak Doğu'ya 30-40 gün, Amerika'ya 20-25 gün sürebilir. Kara yolu ve demir
                        yolu taşımacılığı süreleri rota ve mesafeye göre değişir.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">FCL ve LCL arasındaki fark nedir?</h4>
                      <p className="text-gray-600">
                        FCL (Full Container Load), bir konteynerin tamamının tek bir müşterinin yüküyle doldurulması
                        anlamına gelir. LCL (Less Container Load) ise, bir konteynerin birden fazla müşterinin
                        yükleriyle paylaşılması anlamına gelir. FCL, büyük hacimli yükler için, LCL ise küçük hacimli
                        yükler için uygundur.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Konteyner taşımacılığında sigorta zorunlu mu?</h4>
                      <p className="text-gray-600">
                        Sigorta zorunlu değildir, ancak yükünüzün güvenliği için kesinlikle önerilir. Karizma Nakliyat
                        olarak, tüm konteyner taşımalarında sigorta hizmeti sunuyoruz. Sigorta kapsamı ve limitleri
                        hakkında detaylı bilgi için müşteri temsilcimizle görüşebilirsiniz.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Konteyner taşımacılığında gümrük işlemlerini kim yapar?
                      </h4>
                      <p className="text-gray-600">
                        Karizma Nakliyat olarak, konteyner taşımacılığında gümrük işlemlerini de üstlenebiliriz. Gümrük
                        müşavirliği hizmetimiz ile ithalat, ihracat ve transit işlemlerinizi profesyonel ekibimiz
                        tarafından yürütüyoruz.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Konteynerimi nasıl takip edebilirim?</h4>
                      <p className="text-gray-600">
                        Konteynerinizi, size verilen takip numarası ile online takip sistemimizden izleyebilirsiniz.
                        Ayrıca, müşteri temsilcimiz tarafından düzenli olarak bilgilendirilirsiniz.
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
                  <h3 className="text-xl font-bold">Konteyner Taşıma Teklifi</h3>
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
                      <label htmlFor="container-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Konteyner Tipi
                      </label>
                      <select
                        id="container-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="20-std">20' Standart</option>
                        <option value="40-std">40' Standart</option>
                        <option value="40-hc">40' High Cube</option>
                        <option value="reefer">Reefer</option>
                        <option value="open-top">Open Top</option>
                        <option value="flat-rack">Flat Rack</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cargo-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Yük Tipi
                      </label>
                      <input
                        type="text"
                        id="cargo-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                        Nereye
                      </label>
                      <input
                        type="text"
                        id="to"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Teklif İste
                    </Button>
                  </form>
                </div>
              </div>

              {/* Konteyner Bilgilendirme */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Konteyner Bilgilendirme</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Konteyner Boyutları</p>
                        <p className="text-gray-600">20', 40', 40'HC, Reefer, Open Top, Flat Rack</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Anchor className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Deniz Yolu Rotaları</p>
                        <p className="text-gray-600">Avrupa, Uzak Doğu, Amerika, Afrika, Avustralya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Kara Yolu Hizmeti</p>
                        <p className="text-gray-600">Türkiye ve komşu ülkeler</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Sigorta</p>
                        <p className="text-gray-600">Tüm konteyner taşımaları sigortalanabilir</p>
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
                        <a href="tel:+905330367300" className="text-blue-600 hover:underline">
                         +90 533 036 7300
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">Çalışma Saatleri</p>
                        <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 18:00</p>
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
                  src="/images/sehirler-arasi.png"
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
                <Image src="/images/parsiyel.jpg" alt="Parsiyel Taşımacılık" fill className="object-cover" />
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
                <Image src="/images/depolama.jpg" alt="Depolama Hizmetleri" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Depolama Hizmetleri</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Modern ve güvenli depolama tesislerimizde eşyalarınız güvende. Kısa ve uzun süreli depolama çözümleri.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Konteyner Taşımacılığı İçin Bize Ulaşın</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Uluslararası standartlarda konteyner taşımacılığı hizmeti için hemen bizimle iletişime geçin. Uzman ekibimiz
            size özel çözümler sunacaktır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/iletisim">Teklif Alın</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+905330367300">+90 533 036 7300</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
