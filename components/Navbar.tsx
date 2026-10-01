"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden border-t border-white/10 bg-[#06131b] lg:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-center gap-1">
          {navigation.map((item) => {
            const hasDropdown =
              "dropdown" in item && item.dropdown?.length;

            const isActive =
              item.href && pathname === item.href;

            return (
              <div
                key={item.label}
                className="group relative h-full"
              >
                {/* TOP NAV ITEM */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`
                      flex
                      h-full
                      items-center
                      gap-1
                      px-4
                      text-sm
                      font-semibold
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "bg-[#ed1c24] text-white"
                          : "text-white hover:bg-[#ed1c24] hover:text-white"
                      }
                    `}
                  >
                    {item.label}

                    {hasDropdown ? (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    ) : null}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="
                      flex
                      h-full
                      items-center
                      gap-1
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      duration-200
                      hover:bg-[#ed1c24]
                    "
                  >
                    {item.label}

                    {hasDropdown ? (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    ) : null}
                  </button>
                )}

                {/* DROPDOWN */}
                {hasDropdown ? (
                  <div
                    className="
                      invisible
                      absolute
                      left-1/2
                      top-full
                      z-50
                      w-64
                      -translate-x-1/2
                      translate-y-2
                      rounded-b-2xl
                      border
                      border-gray-200
                      bg-white
                      p-2
                      opacity-0
                      shadow-2xl
                      transition-all
                      duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {item.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          text-[15px]
                          font-medium
                          text-[#111827]
                          transition-all
                          duration-200
                          hover:bg-[#fff1f1]
                          hover:pl-5
                          hover:text-[#ed1c24]
                        "
                      >
                        <span>{subItem.label}</span>

                        <span
                          className="
                            text-gray-400
                            transition-transform
                            duration-200
                            group-hover:text-[#ed1c24]
                          "
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}