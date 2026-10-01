"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Factory,
  MessageCircle,
  Package,
  Palette,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

import { company } from "@/data/company";

const heroFeatures = [
  {
    icon: Factory,
    line1: "Manufacturing",
    line2: "& Supply",
  },
  {
    icon: Package,
    line1: "Wholesale",
    line2: "Orders",
  },
  {
    icon: Palette,
    line1: "Custom",
    line2: "Designs",
  },
  {
    icon: Truck,
    line1: "Pan India",
    line2: "& Global Supply",
  },
  {
    icon: Clock3,
    line1: "On-time",
    line2: "Delivery",
  },
];

const sideCards = [
  {
    title: "Premium Fabric",
    description: "Wide range of high quality fabrics",
    image: "/images/fabric.png",
  },
  {
    title: "Bulk Orders",
    description: "1000+ pieces with custom designs & sizes",
    image: "/images/bulk-orders.png",
  },
];

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    `Hello AR Trading & Suppliers,

I am interested in wholesale garments.

I would like to know about your products, wholesale pricing, availability and custom garment options.

Thank you.`
  );

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#06131b] text-white sm:min-h-[600px] lg:min-h-[630px]">

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src="/images/hero.png"
          alt="AR Trading & Suppliers"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031019]/90 via-[#031019]/55 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06131b]/80 to-transparent" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12">

        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1fr)_390px]">

          {/* LEFT CONTENT */}
          <div className="max-w-[920px]">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              {/* Small Heading */}
              <div className="mb-4 flex items-center gap-3">

                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/90 sm:text-xs">
                  High Quality Garments
                </span>

                <span className="h-px w-12 bg-white/80" />

              </div>

              {/* Main Heading */}
              <h1 className="max-w-[900px] text-4xl font-black leading-[0.96] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]">

                <span className="text-[#ed1c24]">
                  AR
                </span>{" "}

                <span className="text-white">
                  Trading & Suppliers
                </span>

              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-[850px] text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
                Men&apos;s, Kids & Plus Size Garment Manufacturer & Wholesaler
              </p>

              {/* Description */}
              <p className="mt-4 max-w-[760px] text-sm leading-6 text-white/95 sm:text-base sm:leading-7">
                We provide Jacket, Hoodie, Trouser, Pant, T-Shirt, Shirt,
                Outer, Windcheater and all types of garments for Men, Kids and
                Big Size. Custom designs, bulk orders and reliable supply for
                your business.
              </p>

              {/* FEATURES */}
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-5">

                {heroFeatures.map((feature, index) => {

                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={`${feature.line1}-${index}`}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + index * 0.08,
                      }}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ed1c24] bg-black/30 text-[#ed1c24] backdrop-blur-sm">

                        <Icon
                          size={21}
                          strokeWidth={2}
                        />

                      </div>

                      <div className="text-xs font-bold leading-4 text-white sm:text-sm">

                        <div>
                          {feature.line1}
                        </div>

                        <div>
                          {feature.line2}
                        </div>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#ed1c24] px-7 py-3.5 text-sm font-black text-white shadow-lg transition-all duration-300 hover:bg-[#d71920] hover:shadow-xl"
                >
                  View Products

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#16b957] px-7 py-3.5 text-sm font-black text-white shadow-lg transition-all duration-300 hover:bg-[#12a84e] hover:shadow-xl"
                >
                  <MessageCircle size={20} />

                  Get Wholesale Quote
                </a>

              </div>

            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden w-full max-w-[390px] space-y-3 xl:block">

            {sideCards.map((card, index) => (

              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + index * 0.12,
                }}
                className="group relative h-[145px] overflow-hidden rounded-xl border border-white/60 bg-black shadow-xl"
              >

                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/30" />

                <div className="relative z-10 flex h-full flex-col justify-center px-6">

                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-white/95 sm:text-sm">
                    {card.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent" />

    </section>
  );
}