"use client";

import Link from "next/link";
import {
  Diamond,
  Headphones,
  PackageCheck,
  Settings,
  Truck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: PackageCheck,
    value: "1000+",
    title: "Bulk Orders",
    description: "Supplying to businesses across Nepal & India",
  },
  {
    icon: Settings,
    value: "Custom",
    title: "Manufacturing",
    description: "As per your design, sizes and fabric",
  },
  {
    icon: Diamond,
    value: "Premium",
    title: "Quality",
    description: "Best fabrics and fine stitching",
  },
  {
    icon: Truck,
    value: "Pan India",
    title: "Supply",
    description: "Reliable delivery across India & Nepal",
  },
  {
    icon: Headphones,
    value: "Dedicated",
    title: "Support",
    description: "Quick response and after sales support",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#06131b] text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row">

        {/* Benefits */}
        <div className="grid flex-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="border-b border-white/15 px-5 py-6 md:border-r xl:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={38}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-white"
                  />

                  <div>
                    <div className="text-lg font-black leading-tight">
                      {benefit.value}
                    </div>

                    <div className="text-sm font-bold">
                      {benefit.title}
                    </div>

                    <p className="mt-2 text-[11px] leading-4 text-white/65">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bulk CTA */}
        <div className="relative min-h-[190px] overflow-hidden bg-red-600 px-7 py-7 sm:px-10 lg:w-[390px]">
          
          {/* Background image */}
          <img
            src="/images/bulk-orders.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-red-600/85" />

          <div className="relative z-10">
            <h2 className="text-2xl font-black">
              Need Bulk Orders?
            </h2>

            <p className="mt-1 max-w-[300px] text-sm font-medium leading-5">
              Get the best wholesale price and custom designs for your
              business.
            </p>

            <Link
              href="/bulk-orders"
              className="group mt-5 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-black hover:text-white"
            >
              Request a Quote
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}