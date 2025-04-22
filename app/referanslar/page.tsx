import Image from "next/image"
import { Star } from "lucide-react"

export default function ReferencesPage() {
  // Referanslar için örnek şirketler (siz gerçek şirket isimlerini ekleyebilirsiniz)
  const references = [
    {
      name: "CWT Anadolu Lojistik",
      logo: "/images/references/cwt.jpg",
      testimonial:
        "Karizma Nakliyat ile 5 yıldır çalışıyoruz. Profesyonel ekipleri ve zamanında teslimatları ile her zaman memnun kaldık.",
      person: "Ahmet Yılmaz",
      title: "Lojistik Müdürü",
      rating: 5,
    },
    {
      name: "XYZ Şirketi",
      logo: "/images/references/xyz-logo.png",
      testimonial:
        "Fabrika taşıma projemizde Karizma Nakliyat'ın sunduğu çözümler sayesinde hiçbir aksaklık yaşamadık. Teşekkürler!",
      person: "Mehmet Kaya",
      title: "Genel Müdür",
      rating: 5,
    },
    {
      name: "123 Endüstri",
      logo: "/images/references/123-logo.png",
      testimonial:
        "Uluslararası taşımacılık konusunda Karizma Nakliyat'ın deneyimi ve güvenilirliği bizim için çok değerli.",
      person: "Ayşe Demir",
      title: "İthalat Müdürü",
      rating: 4,
    },
    {
      name: "Global Lojistik",
      logo: "/images/references/global-logo.png",
      testimonial:
        "Karizma Nakliyat ile yaptığımız işbirliği sayesinde müşterilerimize daha kapsamlı hizmetler sunabiliyoruz.",
      person: "Ali Can",
      title: "Operasyon Direktörü",
      rating: 5,
    },
    {
      name: "Mega İnşaat",
      logo: "/images/references/mega-logo.png",
      testimonial:
        "Büyük inşaat projelerimizde ağır yük taşıma konusunda Karizma Nakliyat'ın uzmanlığından faydalanıyoruz.",
      person: "Hakan Şahin",
      title: "Proje Müdürü",
      rating: 4,
    },
    {
      name: "Tech Solutions",
      logo: "/images/references/tech-logo.png",
      testimonial:
        "Hassas elektronik ekipmanlarımızın taşınmasında gösterdikleri özen için Karizma Nakliyat'a teşekkür ederiz.",
      person: "Zeynep Yıldız",
      title: "Tedarik Zinciri Sorumlusu",
      rating: 5,
    },
    {
      name: "Mobilya A.Ş.",
      logo: "/images/references/mobilya-logo.png",
      testimonial:
        "Mağaza açılışlarımızda Karizma Nakliyat'ın hızlı ve güvenilir hizmeti sayesinde planlanan zamanda açılışlarımızı gerçekleştiriyoruz.",
      person: "Murat Özkan",
      title: "Operasyon Müdürü",
      rating: 5,
    },
    {
      name: "Tekstil Grubu",
      logo: "/images/references/tekstil-logo.png",
      testimonial: "Sezon ürünlerimizin zamanında mağazalara ulaştırılmasında Karizma Nakliyat'ın katkısı çok büyük.",
      person: "Selin Aydın",
      title: "Lojistik Direktörü",
      rating: 4,
    },
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Referanslarımız</h1>
          <p className="text-lg text-gray-600">
            Yıllar içinde birçok saygın kurum ve kuruluşa hizmet verdik. İşte bize güvenen markalardan bazıları ve
            onların değerli yorumları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {references.map((ref, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-32 h-16">
                    <Image src={ref.logo || "/placeholder.svg"} alt={ref.name} fill className="object-contain" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < ref.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{ref.testimonial}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{ref.person}</p>
                  <p className="text-sm text-gray-500">
                    {ref.title}, {ref.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Siz de Referanslarımız Arasında Yer Alın
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Karizma Nakliyat olarak, her müşterimize özel çözümler sunuyor ve uzun vadeli işbirlikleri kuruyoruz. Siz de
            profesyonel lojistik hizmetlerimizden faydalanmak için hemen bizimle iletişime geçin.
          </p>
          <div className="flex justify-center">
            <a
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
