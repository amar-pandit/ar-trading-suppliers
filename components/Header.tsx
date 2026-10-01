"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  X,
} from "lucide-react";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${company.whatsapp}`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[78px] items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed1c24] text-xl font-black text-white shadow-md">
                AR
              </div>

              <div className="hidden sm:block">
                <p className="text-lg font-black leading-tight text-[#06131b]">
                  AR Trading
                </p>
                <p className="text-xs font-semibold tracking-wide text-gray-500">
                  & Suppliers
                </p>
              </div>
            </Link>

            {/* Desktop Search */}
            <div className="hidden max-w-md flex-1 lg:block">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  placeholder="Search products, garments..."
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-[#ed1c24]/10"
                />
              </div>
            </div>

            {/* Desktop Contact */}
            <div className="hidden items-center gap-5 xl:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#ed1c24]">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
                    Call Us
                  </p>

                  <div className="flex gap-2">
                    {company.phones.map((phone, index) => (
                      <span key={phone}>
                        {index > 0 && (
                          <span className="mr-2 text-gray-300">|</span>
                        )}

                        <a
                          href={`tel:${phone}`}
                          className="text-sm font-bold text-[#111827] transition hover:text-[#ed1c24]"
                        >
                          {phone}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#ed1c24]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
                    Location
                  </p>

                  <p className="text-sm font-bold text-[#111827]">
                    {company.address.line1}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-[1.02] hover:brightness-95 lg:flex"
            >
              <MessageCircle size={19} />
              WhatsApp
            </a>

            {/* Mobile Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#111827] transition hover:border-[#ed1c24] hover:text-[#ed1c24] lg:hidden"
            >
              <Search size={19} />
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#111827] transition hover:border-[#ed1c24] hover:text-[#ed1c24] lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="border-t border-gray-100 py-3 lg:hidden">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  autoFocus
                  type="search"
                  placeholder="Search products, garments..."
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-[#ed1c24]/10"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-[#111827] transition hover:bg-red-50 hover:text-[#ed1c24]"
                    >
                      <span>{item.label}</span>

                      {item.dropdown && item.dropdown.length > 0 && (
                        <ChevronDown size={17} className="text-gray-400" />
                      )}
                    </Link>

                    {item.dropdown && item.dropdown.length > 0 && (
                      <div className="ml-4 border-l border-gray-200 pl-3">
                        {item.dropdown.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#ed1c24]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4">
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <Phone
                      size={19}
                      className="mt-0.5 shrink-0 text-[#ed1c24]"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Call Us
                      </p>

                      <div className="mt-1 flex flex-col gap-1">
                        {company.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="text-sm font-bold text-[#111827]"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white"
                >
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}