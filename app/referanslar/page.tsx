import Link from "next/link"

export default function ReferencesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Referanslarımız</h1>
          <p className="text-lg text-gray-600 mb-12">
            Karizma Nakliyat olarak, her müşterimize özel çözümler sunuyor ve uzun vadeli işbirlikleri kuruyoruz.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Siz de Referanslarımız Arasında Yer Alın
            </h2>
            <p className="text-gray-600 mb-8">
              Profesyonel lojistik hizmetlerimizden faydalanmak ve iş ortaklarımız arasında yer almak için bizimle
              iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
