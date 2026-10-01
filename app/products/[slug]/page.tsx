import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Package,
  Ruler,
  Shirt,
} from "lucide-react";

import ProductGallery from "@/components/ProductGallery";
import { products } from "@/data/products";
import { company } from "@/data/company";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | AR Trading & Suppliers`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  const whatsappMessage =
    encodeURIComponent(
      `Hello AR Trading & Suppliers,

I am interested in:

Product: ${product.name}
Category: ${product.categoryLabel}

Please share wholesale price, availability and customization details.

Thank you.`,
    );

  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="bg-[#06131b] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ed1c24]">
              {product.categoryLabel}
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              {product.name}
            </h1>
          </div>

        </div>
      </section>

      {/* PRODUCT */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-2">

          {/* GALLERY */}
          <ProductGallery
            images={product.images}
            alt={product.name}
          />

          {/* DETAILS */}
          <div>

            <span className="inline-flex rounded-full bg-[#fff0f1] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#ed1c24]">
              {product.categoryLabel}
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#06131b] sm:text-4xl">
              {product.name}
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              {product.description}
            </p>

            {/* DETAILS GRID */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f1] text-[#ed1c24]">
                    <Ruler size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">
                      Sizes
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#111827]">
                      {product.sizes.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f1] text-[#ed1c24]">
                    <Shirt size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">
                      Fabric
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#111827]">
                      {product.fabric}
                    </p>
                  </div>
                </div>
              </div>

              {product.colors?.length ? (
                <div className="rounded-2xl border border-gray-200 p-5 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f1] text-[#ed1c24]">
                      <Package size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase text-gray-500">
                        Available Colors
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#111827]">
                        {product.colors.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

            </div>

            {/* CUSTOMIZATION */}
            {product.customization?.length ? (
              <div className="mt-8">
                <h3 className="text-lg font-black text-[#06131b]">
                  Customization Available
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.customization.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#ed1c24]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href={`https://wa.me/${company.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-black text-white transition hover:brightness-95 hover:shadow-lg"
              >
                <MessageCircle size={19} />
                Get Wholesale Quote
              </a>

              <Link
                href="/bulk-orders"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#ed1c24] px-6 py-4 text-sm font-black text-white transition hover:bg-[#d71920]"
              >
                Bulk Order Enquiry
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}