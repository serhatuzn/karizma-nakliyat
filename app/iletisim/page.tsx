"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            İletişim
          </h1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <a
                href="tel:+905330367300"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                +90 533 036 7300
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
              <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 18:00</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
                <form
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
                      message: (
                        form.querySelector("#message") as HTMLTextAreaElement
                      ).value,
                    };

                    const res = await fetch("/api/send-contact-mail", {
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
                  }}>
                  <div className="mb-4">
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

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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

              <div className="w-full h-full">
                <iframe
                  title="Harita"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.036616419611!2d28.6655143!3d40.9945591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f00448b6e9d%3A0x6ad7c7a4e2d6206!2sYakuplu%2C%2064.%20Sk.%20No%3A54%2C%2034500%20Beylikd%C3%BCz%C3%BC%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1683546000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg w-full h-[300px] md:h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
