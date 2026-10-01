"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { company } from "@/data/company";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello AR Trading & Suppliers,

I am interested in:

Product: ${product.name}
Category: ${product.categoryLabel}

Please share price, sizes, colors and bulk order details.`,
  );

  const whatsappUrl =
    `https://wa.me/${company.whatsapp}?text=${whatsappMessage}`;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* IMAGE */}
      <Link
        href={`/products/${product.slug}`}
        className="block"
      >
        <div className="relative h-[310px] overflow-hidden bg-gray-100">

          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* CATEGORY */}
          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-[#ed1c24]
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              shadow-md
            "
          >
            {product.categoryLabel}
          </div>

        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-5">

        {/* TOP INFO */}
        <div className="mb-2 flex items-center justify-between gap-3">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-400
            "
          >
            AR Trading & Suppliers
          </span>

          <span className="text-xs font-medium text-gray-400">
            Wholesale
          </span>
        </div>

        {/* NAME */}
        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              text-xl
              font-bold
              text-[#111827]
              transition-colors
              group-hover:text-[#ed1c24]
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-6
            text-gray-500
          "
        >
          {product.description}
        </p>

        {/* SIZES */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.slice(0, 5).map((size) => (
            <span
              key={size}
              className="
                rounded-md
                border
                border-gray-200
                bg-gray-50
                px-2
                py-1
                text-xs
                font-medium
                text-gray-600
              "
            >
              {size}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-2">

          <Link
            href={`/products/${product.slug}`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              text-sm
              font-bold
              text-gray-800
              transition
              hover:border-[#ed1c24]
              hover:text-[#ed1c24]
            "
          >
            View Details
            <ArrowRight size={16} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="
              flex
              items-center
              justify-center
              rounded-xl
              bg-[#25D366]
              px-4
              py-3
              text-white
              transition
              hover:brightness-95
            "
          >
            <MessageCircle size={19} />
          </a>

        </div>
      </div>
    </article>
  );
}