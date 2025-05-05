import Image from "next/image"
import { FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificatesPage() {
  const certificates = [
    {
      id: "k1",
      title: "K1 Yetki Belgesi",
      description: "Yurtiçi ticari eşya taşımacılığı yapacak firmalara verilen resmi yetki belgesidir.",
      image: "/images/certificates/k1-belgesi.jpg",
      validUntil: "16/12/2027",
    },
    {
      id: "k2",
      title: "TIO Yetki Belgesi",
      description: "Taşıma işleri organizatörlüğü yapacak firmalar için düzenlenmiş yetki belgesidir.",
      image: "/images/certificates/tio-belgesi.png",
      validUntil: "10/10/2032",
    },
    {
      id: "c2",
      title: "Emtia Taşıma Belgesi",
      description: "Yurtiçi ve uluslararası emtia taşımacılığı yapacak firmalara verilen resmi belge.",
      image: "/images/certificates/emtia-belgesi.png",
      validUntil: "10.09.2046",
    },
    {
      id: "l1",
      title: "Ticaret Odası Kayıt Belgesi",
      description: "Firmanın ticaret odasına kayıtlı olduğunu gösteren resmi belgedir.",
      image: "/images/certificates/ticaret-belgesi.png",
      validUntil: "22.03.2045",
    },
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Yetki Belgelerimiz</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Karizma Nakliyat olarak tüm yasal gereklilikleri karşılıyor, gerekli tüm yetki belgelerine sahibiz.
          </p>

          <div className="space-y-8">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{certificate.title}</h2>
                    <p className="text-gray-600 mb-4">{certificate.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Geçerlilik Tarihi: {certificate.validUntil}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 px-4">
                        <a
                          href={certificate.image}
                          download
                          className="flex items-center text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Belgeyi İndir
                        </a>
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4">
                        <a
                          href={certificate.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Belgeyi Görüntüle
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Belgelerimiz Hakkında</h3>
            <p className="text-gray-600 mb-4">
              Karizma Nakliyat olarak, Ulaştırma ve Altyapı Bakanlığı tarafından verilen tüm gerekli yetki belgelerine sahibiz.
              Bu belgeler, taşımacılık faaliyetlerimizi yasal çerçevede yürüttüğümüzün ve belirli standartları karşıladığımızın resmi kanıtıdır.
            </p>
            <p className="text-gray-600">
              Yetki belgelerimiz düzenli olarak denetlenmekte ve yenilenmektedir. Müşterilerimiz, yasal gerekliliklere uygun şekilde hizmet aldıklarından emin olabilirler.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
