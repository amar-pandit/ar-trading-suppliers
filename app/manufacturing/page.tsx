import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Package,
  Scissors,
  Truck,
  Shirt,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Fabric Selection",
    description:
      "Fabric requirements are considered according to the garment type, design and customer requirements.",
    icon: Shirt,
    image:
      "/images/manufacturing/fabric-selection/fabric-selection.png",
  },
  {
    number: "02",
    title: "Cutting & Designing",
    description:
      "The selected fabric is prepared and cut according to the required garment design and measurements.",
    icon: Scissors,
    image: "/images/manufacturing/cutting/cutting.png",
  },
  {
    number: "03",
    title: "Stitching & Production",
    description:
      "Garment pieces move through the production and stitching stage according to the required specifications.",
    icon: Factory,
    image: "/images/manufacturing/stitching/stitching.png",
  },
  {
    number: "04",
    title: "Quality Checking",
    description:
      "Garments are checked before packaging to help maintain consistency with the required specifications.",
    icon: ClipboardCheck,
    image: "/images/manufacturing/quality/quality.png",
  },
  {
    number: "05",
    title: "Packaging",
    description:
      "Finished garments are prepared and packed according to the order requirements.",
    icon: Package,
    image: "/images/manufacturing/packaging/packaging.png",
  },
  {
    number: "06",
    title: "Dispatch",
    description:
      "Completed orders are prepared for dispatch according to the customer's delivery requirements.",
    icon: Truck,
    image: "/images/manufacturing/dispatch/dispatch.png",
  },
];

const capabilities = [
  "Men's Garments",
  "Women's Garments",
  "Kids' Garments",
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

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06131b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,28,36,0.2),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              <Factory size={15} />
              Garment Manufacturing
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              From Fabric Selection
              <span className="block text-[#ed1c24]">
                To Final Dispatch
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              A structured garment production process designed
              around product requirements, customization and
              bulk order needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bulk-orders"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white transition hover:bg-[#d71920]"
              >
                Start Bulk Order
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Our Process
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] sm:text-4xl">
              A clear process for every garment order
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              From the initial fabric stage to final dispatch,
              each stage is organized around the requirements
              of the garment order.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Garment-specific production workflow",
                "Customization based on order requirements",
                "Quality checking before packaging",
                "Bulk order focused process",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#ed1c24]"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-100">
            <img
              src="/images/hero.png"
              alt="Garment manufacturing"
              className="h-[360px] w-full object-cover sm:h-[430px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/70 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-wider text-red-300">
                AR Trading & Suppliers
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Garment Manufacturer | Wholesaler | Supplier
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Manufacturing Workflow
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
              Six Steps From Order To Dispatch
            </h2>

            <p className="mt-4 text-gray-600">
              Our manufacturing workflow follows a clear
              sequence from material selection through final
              dispatch.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">

                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* NUMBER */}
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed1c24] text-sm font-black text-white shadow-lg">
                      {step.number}
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                        <Icon
                          size={20}
                          className="text-[#ed1c24]"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                What We Manufacture
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
                Garments For Different Requirements
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Explore our garment categories and discuss
                your wholesale or custom requirements with
                AR Trading & Suppliers.
              </p>

              <Link
                href="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white transition hover:bg-[#d71920]"
              >
                View Products
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#ed1c24] hover:shadow-md"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#ed1c24]"
                  />

                  <p className="mt-3 text-sm font-bold text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06131b] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            Ready To Order?
          </span>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Tell Us What You Need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Share your product, quantity, sizes, colors and
            customization requirements through our direct
            WhatsApp enquiry form.
          </p>

          <Link
            href="/bulk-orders"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ed1c24] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#d71920] hover:shadow-xl"
          >
            Start Your Bulk Order
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

    </main>
  );
}