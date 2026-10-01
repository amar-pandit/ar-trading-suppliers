import Link from "next/link";
import {
  ArrowRight,
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { company } from "@/data/company";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Bulk Orders", href: "/bulk-orders" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  "Men's Wear",
  "Women's Wear",
  "Kids' Wear",
  "Plus Size / Big Size",
  "Jackets",
  "Hoodies",
  "T-Shirts",
];

export default function Footer() {
  return (
    <footer className="bg-[#06131b] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* COMPANY */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed1c24] text-xl font-black">
                AR
              </div>

              <div>
                <p className="text-lg font-black">
                  AR Trading
                </p>

                <p className="text-xs font-medium text-gray-400">
                  & Suppliers
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Garment Manufacturer | Wholesaler | Supplier
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Men's, women's, kids and plus-size garments,
              custom garments and bulk order supply.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {company.social.facebook && (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#ed1c24]"
                >
                  <span className="text-lg font-bold" aria-hidden="true">
                    f
                  </span>
                </a>
              )}

              {company.social.instagram && (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#ed1c24]"
                >
                  <Camera size={18} />
                </a>
              )}

              {!company.social.facebook &&
                !company.social.instagram && (
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] transition hover:brightness-95"
                  >
                    <MessageCircle size={18} />
                  </a>
                )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Products
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Contact
            </h3>

            {/* Address */}
            <div className="mt-5 flex gap-3">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-[#ed1c24]"
              />

              <p className="text-sm leading-6 text-gray-400">
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
            </div>

            {/* Phones */}
            <div className="mt-4 space-y-2">
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
                >
                  <Phone
                    size={17}
                    className="text-[#ed1c24]"
                  />
                  {phone}
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h3 className="text-xl font-black">
              Looking for bulk garments?
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Send your requirements directly through our
              WhatsApp enquiry form.
            </p>
          </div>

          <Link
            href="/bulk-orders"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#ed1c24] px-5 py-3 font-bold text-white transition hover:bg-[#d71920]"
          >
            Start Bulk Order
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()}{" "}
          {company.name}. All rights reserved.
        </p>

        <div className="flex gap-5">
          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/bulk-orders"
            className="transition hover:text-white"
          >
            Bulk Orders
          </Link>
        </div>
      </div>
    </footer>
  );
}