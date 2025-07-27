"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const photos = [
  '/gallery/mars_gallery_1.jpeg', 
  '/gallery/mars_gallery_2.jpeg',
  '/gallery/mars_gallery_3.jpeg',
  '/gallery/mars_gallery_4.jpeg',
  '/gallery/mars_gallery_5.jpeg',
  '/gallery/mars_gallery_6.jpeg',
  '/gallery/mars_gallery_7.jpeg',
  '/gallery/mars_gallery_8.jpeg',
  '/gallery/mars_gallery_9.jpeg',
  '/gallery/mars_gallery_10.jpeg',
  '/gallery/mars_gallery_11.jpeg',
  '/gallery/mars_gallery_12.jpeg',
  '/gallery/mars_gallery_13.jpeg',
  '/gallery/mars_gallery_14.jpeg',
  '/gallery/mars_gallery_15.jpeg',
  '/gallery/mars_gallery_16.jpeg'
];

export default function TeamGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mt-5 mb-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Team Gallery</h1>
        <p className="text-lg text-muted-foreground mb-6">Photos and videos from our team events, projects, and more.</p>
      </div>
      <section className="mb-16">
        <h2 className="text-2xl text-primary font-semibold mb-8 text-center">Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {photos.map((src, idx) => {
            // Create different sizes for collage effect
            const getSizeClass = (index: number) => {
              // Featured images (larger)
              if (index === 0 || index === 5 || index === 10) {
                return 'col-span-2 row-span-2 h-72 sm:h-80 md:h-96 lg:h-[28rem]';
              }
              // Medium images
              if (index === 2 || index === 7 || index === 12 || index === 15) {
                return 'col-span-2 row-span-1 h-36 sm:h-40 md:h-48 lg:h-56';
              }
              // Standard images
              return 'col-span-1 row-span-1 h-36 sm:h-40 md:h-48 lg:h-56';
            };

            return (
              <div 
                key={idx} 
                className={`overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer ${getSizeClass(idx)}`} 
                onClick={() => openModal(src)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Team photo ${idx + 1}`}
                    className="transition-opacity duration-500 opacity-80 group-hover:opacity-100 object-cover"
                    loading="lazy"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-[9999] p-4 transition-all duration-300 ease-out"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden transform scale-95 transition-all duration-300 ease-out" 
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'scale(1)' }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all z-10"
            >
              ×
            </button>
            <div className="relative w-full h-96 md:h-[70vh]">
              <Image
                src={selectedImage}
                alt="Zoomed team photo"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 