import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { products } from "@/data/products";

const categories = Array.from(
  new Map(products.map((product) => [product.category, product])).values(),
);

export default function CategoryGrid() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#06131b] sm:text-3xl">
            Shop by{" "}
            <span className="text-red-600">Category</span>
          </h2>

          <Link
            href="/products"
            className="group hidden items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-red-600 sm:flex"
          >
            View All Categories
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile View All */}
        <div className="mb-4 sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-red-600"
          >
            View All Categories
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.category}
              name={category.categoryLabel}
              description={category.description}
              image={category.images[0]}
              href={`/products?category=${encodeURIComponent(category.category)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}