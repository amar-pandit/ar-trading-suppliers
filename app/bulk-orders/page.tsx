"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Package,
  Send,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { company } from "@/data/company";

const productOptions = [
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
];

const sizeOptions = [
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "4XL",
  "Custom Size",
];

export default function BulkOrdersPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    sizes: [] as string[],
    colors: "",
    customization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSizeChange = (size: string) => {
    setForm((previous) => {
      const selected = previous.sizes.includes(size);

      return {
        ...previous,
        sizes: selected
          ? previous.sizes.filter((item) => item !== size)
          : [...previous.sizes, size],
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello AR Trading & Suppliers,

I want to make a bulk garment enquiry.

CUSTOMER DETAILS
Name: ${form.name}
Company / Business: ${form.companyName || "Not provided"}
Phone / WhatsApp: ${form.phone}
Email: ${form.email || "Not provided"}

PRODUCT REQUIREMENTS
Product: ${form.product}
Required Quantity: ${form.quantity}

Sizes: ${
      form.sizes.length > 0
        ? form.sizes.join(", ")
        : "Not specified"
    }

Preferred Colors: ${form.colors || "Not specified"}

Customization:
${form.customization || "No customization specified"}

Additional Requirements:
${form.message || "None"}

Please share the wholesale price and further details.

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${company.whatsapp}` +
      `?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    window.location.href = whatsappUrl;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06131b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,28,36,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
            Bulk Garment Orders
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Your
            <span className="block text-[#ed1c24]">
              Bulk Garment Order
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Share your garment requirements with us and
            send your complete enquiry directly through
            WhatsApp.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <Package
                size={22}
                className="text-[#ed1c24]"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Bulk Supply
              </h3>
              <p className="text-sm text-gray-500">
                Wholesale garment requirements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <Sparkles
                size={22}
                className="text-[#ed1c24]"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Customization
              </h3>
              <p className="text-sm text-gray-500">
                Sizes, colors and designs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <ShoppingBag
                size={22}
                className="text-[#ed1c24]"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Direct WhatsApp
              </h3>
              <p className="text-sm text-gray-500">
                No account or database required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            {/* FORM HEADER */}
            <div className="border-b border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
                Wholesale Enquiry Form
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Fill in your requirements below. Required
                fields are marked with an asterisk.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-6 sm:p-8 lg:p-10"
            >
              {/* CUSTOMER DETAILS */}
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Your Details
                </h3>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Company / Business
                    </label>

                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone / WhatsApp *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    />
                  </div>
                </div>
              </div>

              {/* PRODUCT */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  Product Requirements
                </h3>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {/* PRODUCT */}
                  <div>
                    <label
                      htmlFor="product"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Product Category *
                    </label>

                    <select
                      id="product"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    >
                      <option value="">
                        Select product category
                      </option>

                      {productOptions.map((product) => (
                        <option
                          key={product}
                          value={product}
                        >
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* QUANTITY */}
                  <div>
                    <label
                      htmlFor="quantity"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Required Quantity *
                    </label>

                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      required
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 pieces"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                    />
                  </div>
                </div>
              </div>

              {/* SIZES */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  Required Sizes
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Select all applicable sizes.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {sizeOptions.map((size) => {
                    const selected =
                      form.sizes.includes(size);

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() =>
                          handleSizeChange(size)
                        }
                        className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                          selected
                            ? "border-[#ed1c24] bg-[#ed1c24] text-white"
                            : "border-gray-300 bg-white text-gray-700 hover:border-[#ed1c24] hover:text-[#ed1c24]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* COLORS */}
              <div className="border-t border-gray-200 pt-8">
                <label
                  htmlFor="colors"
                  className="mb-2 block text-lg font-bold text-gray-900"
                >
                  Preferred Colors
                </label>

                <input
                  id="colors"
                  name="colors"
                  type="text"
                  value={form.colors}
                  onChange={handleChange}
                  placeholder="Example: Black, Navy, White"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* CUSTOMIZATION */}
              <div className="border-t border-gray-200 pt-8">
                <label
                  htmlFor="customization"
                  className="mb-2 block text-lg font-bold text-gray-900"
                >
                  Customization Requirements
                </label>

                <textarea
                  id="customization"
                  name="customization"
                  rows={4}
                  value={form.customization}
                  onChange={handleChange}
                  placeholder="Describe your design, logo, fabric, printing, embroidery or other customization requirements..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* ADDITIONAL */}
              <div className="border-t border-gray-200 pt-8">
                <label
                  htmlFor="message"
                  className="mb-2 block text-lg font-bold text-gray-900"
                >
                  Additional Requirements
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything else you want us to know?"
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* SUBMIT */}
              <div className="border-t border-gray-200 pt-8">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:brightness-95 hover:shadow-xl sm:w-auto"
                >
                  <MessageCircle size={20} />
                  Send Enquiry on WhatsApp
                </button>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  Your details are not stored in a database.
                  The information is converted into a WhatsApp
                  message and sent to the business WhatsApp
                  number.
                </p>
              </div>

              {/* SUCCESS */}
              {submitted && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      WhatsApp enquiry prepared.
                    </p>

                    <p className="mt-1 text-sm">
                      Your WhatsApp conversation should open
                      with all the enquiry details.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* DIRECT WHATSAPP */}
      <section className="bg-[#06131b] py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <MessageCircle
            size={40}
            className="mx-auto text-[#25D366]"
          />

          <h2 className="mt-4 text-3xl font-black text-white">
            Need help with your order?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Contact AR Trading & Suppliers directly on
            WhatsApp for your garment requirements.
          </p>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-bold text-white transition hover:brightness-95"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}