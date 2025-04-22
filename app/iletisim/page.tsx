import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">İletişim</h1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <a href="tel:+905551234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                +90 555 123 4567
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-posta</h3>
              <a
                href="mailto:info@karizmanakliyat.com.tr"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                info@karizmanakliyat.com.tr
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
                <form>
                  <div className="mb-4">
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

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Gönder
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-gray-200 min-h-[300px] md:min-h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Adresimiz</h3>
                  <p className="text-gray-600 mb-4">
                    Örnek Mahallesi, Örnek Sokak No:123, <br />
                    İstanbul, Türkiye
                  </p>
                  <p className="text-sm text-gray-500">(Harita entegrasyonu için Google Maps API kullanılabilir)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
