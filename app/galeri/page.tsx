"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: "/images/gallery/arac-1.jpeg", alt: "" },
    { id: 2, src: "/images/gallery/kemal-1.jpeg", alt: "" },
    { id: 3, src: "/images/gallery/arac-2.jpeg", alt: "" },
    { id: 4, src: "/images/gallery/arac-3.jpeg", alt: "" },
    { id: 5, src: "/images/gallery/arac-4.jpeg", alt: "i" },
    { id: 6, src: "/images/gallery/arac-5.jpeg", alt: "" },
    { id: 7, src: "/images/gallery/arac-6.jpeg", alt: "" },
    { id: 8, src: "/images/gallery/arac-7.jpeg", alt: "" },
    { id: 9, src: "/images/gallery/arac-8.jpeg", alt: "" },
    { id: 10, src: "/images/gallery/ofis-1.jpeg", alt: "" },
    { id: 11, src: "/images/gallery/arac-10.jpeg", alt: "" },
    { id: 12, src: "/images/gallery/arac-11.jpeg", alt: "" },
    { id: 13, src: "/images/gallery/arac-12.jpeg", alt: "" },
    { id: 14, src: "/images/gallery/arac-13.jpeg", alt: "" },
    { id: 15, src: "/images/gallery/arac-14.jpeg", alt: "" },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Galeri</h1>
          <p className="text-lg text-gray-600">
            Karizma Nakliyat olarak gerçekleştirdiğimiz taşıma projelerinden,
            araç filomuzdan ve profesyonel ekibimizden görüntüler.
          </p>
        </div>

        {/* Galeri Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-lg font-medium">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-[90vw] max-w-4xl">
              {/* Kapatma Butonu */}
              <button
                onClick={() => setSelectedImage(null)}
                className="fixed top-6 right-6 z-[9999] text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Resim */}
              <div className="relative w-full h-auto">
                <Image
                  src={selectedImage}
                  alt="Açık Görsel"
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Profesyonel Nakliyat Hizmetimizden Yararlanın
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Karizma Nakliyat ile taşınmak güvenli, hızlı ve ekonomik. Ücretsiz
            keşif ve fiyat teklifi için hemen iletişime geçin.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition-colors">
            <Link href="/iletisim">Bizimle İletişime Geçin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
