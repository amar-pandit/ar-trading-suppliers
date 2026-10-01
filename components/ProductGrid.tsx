"use client";

import { useEffect, useMemo, useState } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const filters = [
  { id: "all", label: "All Products" },
  { id: "mens", label: "Men's Wear" },
  { id: "womens", label: "Women's Wear" },
  { id: "kids", label: "Kids" },
  { id: "plus-size", label: "Plus Size" },
  { id: "jackets", label: "Jackets" },
  { id: "hoodies", label: "Hoodies" },
  { id: "tshirts", label: "T-Shirts" },
  { id: "shirts", label: "Shirts" },
  { id: "pants", label: "Pants" },
  { id: "windcheater", label: "Outerwear" },
];

export default function ProductGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "all";

  const [activeFilter, setActiveFilter] =
    useState(categoryFromUrl);

  // URL change hone par active filter update karo
  useEffect(() => {
    const validCategory = filters.some(
      (filter) => filter.id === categoryFromUrl,
    );

    if (validCategory) {
      setActiveFilter(categoryFromUrl);
    } else {
      setActiveFilter("all");
    }
  }, [categoryFromUrl]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === activeFilter,
    );
  }, [activeFilter]);

  // Filter click
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);

    const params = new URLSearchParams(
      searchParams.toString(),
    );

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const queryString = params.toString();

    router.push(
      queryString
        ? `${pathname}?${queryString}`
        : pathname,
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* FILTERS */}
      <div className="mb-10 overflow-x-auto pb-3">
        <div className="flex min-w-max gap-3">

          {filters.map((filter) => {
            const isActive =
              activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  handleFilterChange(filter.id)
                }
                className={`
                  rounded-full
                  border
                  px-7
                  py-3
                  text-sm
                  font-bold
                  whitespace-nowrap
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "border-[#ed1c24] bg-[#ed1c24] text-white shadow-lg"
                      : "border-gray-200 bg-white text-gray-900 hover:border-[#ed1c24] hover:text-[#ed1c24]"
                  }
                `}
              >
                {filter.label}
              </button>
            );
          })}

        </div>
      </div>

      {/* RESULT COUNT */}
      <div className="mb-7 flex items-center justify-between">

        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-bold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        <p className="hidden text-sm text-gray-400 sm:block">
          AR Trading & Suppliers
        </p>

      </div>

      {/* PRODUCT GRID */}
      {filteredProducts.length > 0 ? (

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      ) : (

        /* NO PRODUCTS */
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-gray-300
            bg-gray-50
            px-6
            py-20
            text-center
          "
        >
          <h3 className="text-xl font-bold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-gray-500">
            Try another category.
          </p>

          <button
            type="button"
            onClick={() =>
              handleFilterChange("all")
            }
            className="
              mt-6
              rounded-xl
              bg-[#ed1c24]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-red-700
            "
          >
            View All Products
          </button>
        </div>

      )}

    </section>
  );
}