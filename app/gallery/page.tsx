"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  MessageCircle,
  Shirt,
  X,
  ZoomIn,
} from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Premium Garment Collection",
    category: "Collection",
    image: "/images/hero.png",
  },
  {
    id: 2,
    title: "Fabric & Material",
    category: "Fabric",
    image: "/images/fabric.png",
  },
  
  {
    id: 4,
    title: "Bulk Order Supply",
    category: "Bulk Orders",
    image: "/images/bulk-orders.png",
  },

  // JACKETS
  {
    id: 5,
    title: "Jacket 01",
    category: "Jackets",
    image: "/images/products/jackets/jacket-01.jpeg",
  },
  {
    id: 6,
    title: "Jacket 02",
    category: "Jackets",
    image: "/images/products/jackets/jacket-02.jpeg",
  },
  
  {
    id: 8,
    title: "Jacket 04",
    category: "Jackets",
    image: "/images/products/jackets/jacket-04.jpeg",
  },
  {
    id: 9,
    title: "Jacket 05",
    category: "Jackets",
    image: "/images/products/jackets/jacket-05.jpeg",
  },
  {
    id: 10,
    title: "Jacket 06",
    category: "Jackets",
    image: "/images/products/jackets/jacket-06.jpeg",
  },

  // EXISTING ROOT JACKET IMAGES
  {
    id: 11,
    title: "Premium Winter Jacket - Front",
    category: "Jackets",
    image: "/images/jacket-front.png",
  },
  {
    id: 12,
    title: "Premium Winter Jacket - Back",
    category: "Jackets",
    image: "/images/jacket-back.png",
  },
 
  {
    id: 14,
    title: "Premium Winter Jacket - Detail",
    category: "Jackets",
    image: "/images/jacket-detail.png",
  },
];

const categories = [
  "All",
  "Collection",
  "Fabric",
  "Custom",
  "Bulk Orders",
  "Jackets",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  const selectedItem =
    selectedIndex !== null
      ? filteredItems[selectedIndex]
      : null;

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredItems.length - 1
        : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredItems.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06131b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,28,36,0.2),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              <Images size={15} />
              Our Gallery
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our
              <span className="block text-[#ed1c24]">
                Garment Collection
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Explore garment visuals, fabrics, custom
              designs, bulk order solutions and product
              views from AR Trading & Suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                Visual Showcase
              </span>

              <h2 className="mt-2 text-3xl font-black text-[#111827] sm:text-4xl">
                Garment Gallery
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Browse our available garment and manufacturing
                visuals.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-[#ed1c24] transition hover:gap-3"
            >
              View Products
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* FILTER */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    active
                      ? "bg-[#ed1c24] text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-700 hover:border-[#ed1c24] hover:text-[#ed1c24]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* RESULT COUNT */}
          <div className="mt-5 text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1
              ? "image"
              : "images"}
          </div>

          {/* GRID */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />

                  {/* CATEGORY */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* ZOOM */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn size={18} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      <Shirt
                        size={19}
                        className="text-[#ed1c24]"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold leading-5 text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        AR Trading & Suppliers
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* EMPTY */}
          {filteredItems.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
              <Images
                size={42}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No images found
              </h3>

              <p className="mt-2 text-gray-500">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CUSTOM ORDER CTA */}
      <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-[#06131b]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/custom-design.png"
                  alt="Custom garment design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                  Custom Garments
                </span>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Have Your Own Design?
                </h2>

                <p className="mt-4 leading-7 text-gray-300">
                  Share your garment requirements, design
                  preferences, sizes, colors and quantities
                  directly with our team.
                </p>

                <Link
                  href="/bulk-orders"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white transition hover:bg-[#d71920]"
                >
                  Start Custom Order
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="bg-[#06131b] py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <MessageCircle
            size={38}
            className="mx-auto text-[#25D366]"
          />

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Looking for a specific garment?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Send your product requirements directly through
            WhatsApp and discuss your wholesale or custom
            order.
          </p>

          <Link
            href="/bulk-orders"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-bold text-white transition hover:brightness-95"
          >
            <MessageCircle size={19} />
            Send WhatsApp Enquiry
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelectedIndex(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>

          {/* PREVIOUS */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={27} />
            </button>
          )}

          {/* IMAGE */}
          <div
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />

            <div className="absolute bottom-0 left-1/2 w-full max-w-2xl -translate-x-1/2 translate-y-16 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                {selectedItem.category}
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {selectedItem.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {selectedIndex! + 1} / {filteredItems.length}
              </p>
            </div>
          </div>

          {/* NEXT */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={27} />
            </button>
          )}
        </div>
      )}
    </main>
  );
}