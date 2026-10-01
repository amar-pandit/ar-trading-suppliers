"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProductGallery({
  images,
  alt,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] =
    useState(0);

  const [lightbox, setLightbox] =
    useState(false);

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-gray-200 bg-gray-100 text-gray-500">
        No product image available
      </div>
    );
  }

  return (
    <>
      <div className="w-full">

        {/* MAIN IMAGE */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">

          <div className="aspect-[4/3]">
            <img
              src={images[activeImage]}
              alt={`${alt} - photo ${
                activeImage + 1
              }`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous product image"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition hover:bg-[#ed1c24]"
          >
            <ChevronLeft size={22} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next product image"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition hover:bg-[#ed1c24]"
          >
            <ChevronRight size={22} />
          </button>

          {/* PHOTO NUMBER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
            {activeImage + 1} / {images.length}
          </div>

          {/* FULLSCREEN */}
          <button
            type="button"
            onClick={() => setLightbox(true)}
            aria-label="Open image fullscreen"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-md transition hover:bg-[#ed1c24] hover:text-white"
          >
            <Maximize2 size={18} />
          </button>

        </div>

        {/* THUMBNAILS */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">

          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() =>
                setActiveImage(index)
              }
              aria-label={`View ${alt} photo ${
                index + 1
              }`}
              className={[
                "relative aspect-square overflow-hidden rounded-xl border-2 bg-gray-100 transition-all",
                activeImage === index
                  ? "border-[#ed1c24] ring-2 ring-[#ed1c24]/20"
                  : "border-gray-200 hover:border-gray-400",
              ].join(" ")}
            >
              <img
                src={image}
                alt={`${alt} thumbnail ${
                  index + 1
                }`}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-1 right-1 rounded-md bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-white">
                {index + 1}
              </span>
            </button>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">

          {/* CLOSE */}
          <button
            type="button"
            onClick={() =>
              setLightbox(false)
            }
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#ed1c24] hover:text-white"
          >
            <X size={22} />
          </button>

          {/* IMAGE */}
          <div className="relative flex h-full w-full items-center justify-center">

            <img
              src={images[activeImage]}
              alt={`${alt} fullscreen`}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            />

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-[#ed1c24] sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-[#ed1c24] sm:right-6"
            >
              <ChevronRight size={26} />
            </button>

          </div>

          {/* COUNTER */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-md">
            Photo {activeImage + 1} of{" "}
            {images.length}
          </div>

        </div>
      )}
    </>
  );
}