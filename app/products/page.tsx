import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Products | AR Trading & Suppliers",
  description:
    "Explore men's wear, women's wear, kids wear, plus-size garments, jackets, hoodies, T-shirts, pants and outerwear from AR Trading & Suppliers.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#06131b] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            AR Trading & Suppliers
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Our Products
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Explore our garment collections for wholesale, bulk orders and
            custom requirements.
          </p>
        </div>
      </section>

      <ProductGrid />
    </main>
  );
}