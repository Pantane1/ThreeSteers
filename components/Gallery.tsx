import React, { useState } from 'react';
import Reveal from './ui/Reveal';
import Modal from './ui/Modal';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const images = [
    { src: 'https://picsum.photos/id/405/600/800', alt: 'Lobby', span: 'row-span-2' },
    { src: 'https://picsum.photos/id/433/600/400', alt: 'Pool', span: 'row-span-1' },
    { src: 'https://picsum.photos/id/292/600/400', alt: 'Food', span: 'row-span-1' },
    { src: 'https://picsum.photos/id/352/600/800', alt: 'Room Detail', span: 'row-span-2' },
    { src: 'https://picsum.photos/id/450/600/400', alt: 'Exterior', span: 'row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Visual Tour</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
          {images.map((img, idx) => (
             <Reveal key={idx} delay={idx * 50}>
                <div 
                  className={`relative group overflow-hidden rounded-sm cursor-zoom-in h-full ${img.span === 'row-span-2' ? 'md:row-span-2 md:h-full' : 'h-64 md:h-full'}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 tracking-widest uppercase text-sm">
                      View
                    </span>
                  </div>
                </div>
             </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.alt}
      >
        {selectedImage && (
          <div className="flex flex-col items-center">
             <div className="w-full rounded-lg overflow-hidden shadow-xl">
               <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[70vh] object-contain bg-black/5" />
             </div>
             <p className="mt-4 text-gray-600 font-light italic">
                {selectedImage.alt} - Experience the detail and luxury of Three Steers Hotel.
             </p>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default Gallery;