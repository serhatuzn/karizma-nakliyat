import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-lg text-gray-600">
            Karizma Nakliyat olarak 20 yılı aşkın süredir ev ve ofis taşımacılığında kaliteli hizmet sunuyoruz.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-6">Biz Kimiz?</h2>
              <p className="text-gray-600 mb-4">
                Karizma Nakliyat, 1998 yılında İstanbul'da kurulmuş, ev ve ofis taşımacılığı alanında uzmanlaşmış bir
                nakliyat firmasıdır. Kurulduğumuz günden bu yana müşteri memnuniyetini ön planda tutarak, güvenilir ve
                kaliteli hizmet sunmayı ilke edindik.
              </p>
              <p className="text-gray-600 mb-4">
                Deneyimli ekibimiz ve modern araç filomuzla, Türkiye'nin her noktasına ve yurtdışına taşımacılık hizmeti
                veriyoruz. Eşyalarınızı kendi eşyalarımız gibi özenle taşıyor, her aşamada profesyonel çözümler
                sunuyoruz.
              </p>
              <p className="text-gray-600 mb-6">
                Karizma Nakliyat olarak amacımız, taşınma sürecini sizin için stressiz ve sorunsuz hale getirmektir. Bu
                doğrultuda, paketlemeden yerleştirmeye kadar tüm süreçlerde yanınızda oluyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">20+ Yıllık Deneyim</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Profesyonel Ekip</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Modern Araç Filosu</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Sigortalı Taşımacılık</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Uygun Fiyatlar</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">7/24 Müşteri Desteği</span>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] lg:min-h-full">
              <Image src="/images/ekip.jpg" alt="Karizma Nakliyat Ekibi" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">15,000+</div>
            <div className="text-gray-600">Başarılı Taşıma</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">20+</div>
            <div className="text-gray-600">Yıllık Deneyim</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-gray-600">Uzman Personel</div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Karizma Nakliyat olarak misyonumuz, müşterilerimize en kaliteli, güvenilir ve uygun fiyatlı taşımacılık
              hizmetini sunmaktır. Eşyalarınızı özenle taşıyarak, taşınma sürecini sizin için stressiz ve sorunsuz hale
              getirmeyi hedefliyoruz.
            </p>
            <p className="text-gray-600">
              Her müşterimizin ihtiyaçlarını anlayarak, kişiselleştirilmiş çözümler sunmak ve sektörde fark yaratmak
              için çalışıyoruz.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Vizyonumuz, Türkiye'nin ve dünyanın önde gelen nakliyat firmalarından biri olmak ve sektörde kalite
              standartlarını belirlemektir. Teknolojik yenilikleri takip ederek, hizmet kalitemizi sürekli artırmayı ve
              müşteri memnuniyetini en üst seviyede tutmayı hedefliyoruz.
            </p>
            <p className="text-gray-600">
              Çevreye duyarlı taşımacılık çözümleri geliştirerek, sürdürülebilir bir gelecek için sorumluluk almayı
              önemsiyoruz.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Profesyonel Nakliyat Hizmetimizden Yararlanın</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Karizma Nakliyat ile taşınmak güvenli, hızlı ve ekonomik. Ücretsiz keşif ve fiyat teklifi için hemen
            iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  )
}
