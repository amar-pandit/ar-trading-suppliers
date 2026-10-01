"use client";

import {
  CheckCircle2,
  Scissors,
  Shirt,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Fabric Selection",
    description:
      "Fabric requirements are considered according to the garment type, design and customer requirements.",
    image: "/images/manufacturing/fabric-selection/fabric-selection.png",
    icon: Shirt,
  },
  {
    number: "02",
    title: "Cutting & Designing",
    description:
      "The selected fabric is prepared and cut according to the required garment design and measurements.",
    image: "/images/manufacturing/cutting/cutting.png",
    icon: Scissors,
  },
  {
    number: "03",
    title: "Stitching & Production",
    description:
      "Garment pieces move through the production and stitching stage according to the required specifications.",
    image: "/images/manufacturing/stitching/stitching.png",
    icon: Shirt,
  },
  {
    number: "04",
    title: "Quality Checking",
    description:
      "Finished garments are checked to maintain the required quality and presentation before packing.",
    image: "/images/manufacturing/quality/quality.png",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Packaging",
    description:
      "Garments are carefully prepared and packed for wholesale and bulk order dispatch.",
    image: "/images/manufacturing/packaging/packaging.png",
    icon: PackageCheck,
  },
  {
    number: "06",
    title: "Dispatch",
    description:
      "Completed orders are prepared for delivery according to the customer's requirements.",
    image: "/images/manufacturing/dispatch/dispatch.png",
    icon: Truck,
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            Manufacturing Workflow
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06131b] sm:text-4xl lg:text-5xl">
            Six Steps From Order To Dispatch
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Our manufacturing workflow follows a clear sequence from material
            selection through final dispatch.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
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
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden bg-gray-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Step Number */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#ed1c24]
                      text-base
                      font-black
                      text-white
                      shadow-lg
                    "
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-50
                        text-[#ed1c24]
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <h3 className="text-xl font-black text-[#06131b]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}