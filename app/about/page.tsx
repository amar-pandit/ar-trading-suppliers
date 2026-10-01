import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MapPin,
  MessageCircle,
  Package,
  Shirt,
  Users,
} from "lucide-react";

const productCategories = [
  "Men's Wear",
  "Women's Wear",
  "Kids' Wear",
  "Plus Size / Big Size",
  "Jackets",
  "Hoodies",
  "T-Shirts",
  "Shirts",
  "Trouser / Pants",
  "Outer / Windcheater",
  "Custom Garments",
  "Bulk Orders",
];

const businessFocus = [
  {
    icon: Factory,
    title: "Garment Manufacturing",
    description:
      "Garment production and custom requirements based on the customer's order specifications.",
  },
  {
    icon: Package,
    title: "Wholesale Supply",
    description:
      "Garment supply for customers looking for wholesale and bulk order requirements.",
  },
  {
    icon: Shirt,
    title: "Custom Garments",
    description:
      "Custom garment requirements including designs, sizes, colors and other order specifications.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description:
      "Direct communication for product requirements, wholesale enquiries and custom orders.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06131b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,28,36,0.2),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              About AR Trading & Suppliers
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Garment Manufacturing,
              <span className="block text-[#ed1c24]">
                Wholesale & Supply
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              AR Trading & Suppliers is a garment manufacturer,
              wholesaler and supplier based in Kathmandu, Nepal,
              serving garment requirements across a range of
              clothing categories.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src="/images/hero.png"
              alt="AR Trading & Suppliers garment collection"
              width={1200}
              height={900}
              className="h-[360px] w-full object-cover sm:h-[460px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/70 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                AR Trading & Suppliers
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Garment Manufacturer | Wholesaler | Supplier
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] sm:text-4xl">
              Your Garment Supply Partner
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              AR Trading & Suppliers works with garment
              requirements across men's, women's, kids and
              plus-size categories, along with jackets,
              hoodies, T-shirts, shirts, trousers and outerwear.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The business also supports custom garment and
              bulk order requirements where customers can
              communicate their product, quantity, size, color
              and customization needs.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Garment manufacturing",
                "Wholesale garment supply",
                "Custom garment requirements",
                "Bulk order enquiries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#ed1c24]"
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS FOCUS */}
      <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
              Our Business Focus
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From wholesale supply to custom garment
              requirements, our services are structured around
              clothing and bulk order needs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessFocus.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                    <Icon
                      size={23}
                      className="text-[#ed1c24]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                Product Range
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
                Garment Categories
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Explore the range of garment categories available
                through AR Trading & Suppliers.
              </p>

              <Link
                href="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white transition hover:bg-[#d71920]"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {productCategories.map((category) => (
                <div
                  key={category}
                  className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-[#ed1c24] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#ed1c24]"
                    />

                    <span className="text-sm font-bold text-gray-800 transition-colors group-hover:text-[#ed1c24]">
                      {category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* LOCATION CARD */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <MapPin
                  size={23}
                  className="text-[#ed1c24]"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Our Location
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Bhotebahal-12
                <br />
                Kathmandu, Nepal
              </p>
            </div>

            {/* CONTACT CARD */}
            <div className="rounded-2xl bg-[#06131b] p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10">
                <MessageCircle
                  size={23}
                  className="text-[#25D366]"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                Contact Us
              </h3>

              <p className="mt-3 text-gray-300">
                For wholesale, bulk order and custom garment
                enquiries, contact us directly.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "9845312188",
                  "9817626857",
                ].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block font-bold text-white transition hover:text-[#ed1c24]"
                  >
                    {phone}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/9845312188"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-bold text-white transition hover:brightness-95"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#06131b] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            AR Trading & Suppliers
          </span>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Have a Garment Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Share your product, quantity, sizes, colors and
            customization requirements directly with us.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/bulk-orders"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ed1c24] px-7 py-4 font-bold text-white transition hover:bg-[#d71920]"
            >
              Start Bulk Order
              <ArrowRight size={19} />
            </Link>

            <a
              href="https://wa.me/9845312188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white transition hover:brightness-95"
            >
              <MessageCircle size={19} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}