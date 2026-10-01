"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { company } from "@/data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `Hello AR Trading & Suppliers,

I would like to contact you.

Name: ${form.name}
Phone / WhatsApp: ${form.phone}
Subject: ${form.subject}

Message:
${form.message}

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${company.whatsapp}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmitted(true);

    window.location.href = whatsappUrl;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06131b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,28,36,0.2),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              <MessageCircle size={15} />
              Contact Us
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About
              <span className="block text-[#ed1c24]">
                Your Garment Requirement
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Contact AR Trading & Suppliers for wholesale,
              bulk order and custom garment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {/* PHONE */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Phone
                  size={22}
                  className="text-[#ed1c24]"
                />
              </div>

              <h2 className="mt-5 text-lg font-bold text-gray-900">
                Call Us
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Speak directly with us.
              </p>

              <div className="mt-4 space-y-2">
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block font-bold text-gray-800 transition hover:text-[#ed1c24]"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <MessageCircle
                  size={22}
                  className="text-[#25D366]"
                />
              </div>

              <h2 className="mt-5 text-lg font-bold text-gray-900">
                WhatsApp
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Send your enquiry directly.
              </p>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-bold text-[#25D366]"
              >
                Chat on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>

            {/* LOCATION */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <MapPin
                  size={22}
                  className="text-[#ed1c24]"
                />
              </div>

              <h2 className="mt-5 text-lg font-bold text-gray-900">
                Location
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Send An Enquiry
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              Tell Us How We Can Help
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Fill in the form and your message will be
              converted into a WhatsApp enquiry. Nothing is
              stored in a website database.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Wholesale garment enquiries",
                "Bulk order requirements",
                "Custom garment requirements",
                "Product and availability enquiries",
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

            {/* QUICK WHATSAPP */}
            <div className="mt-8 rounded-2xl bg-[#06131b] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                  <MessageCircle
                    size={22}
                    className="text-[#25D366]"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Prefer WhatsApp?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Skip the form and contact us directly.
                  </p>

                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#25D366]"
                  >
                    Start WhatsApp Chat
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
            <h3 className="text-2xl font-black text-gray-900">
              Contact Form
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Your message will be sent directly through
              WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
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

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject *
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                >
                  <option value="">
                    Select enquiry type
                  </option>

                  <option value="Wholesale Enquiry">
                    Wholesale Enquiry
                  </option>

                  <option value="Bulk Order">
                    Bulk Order
                  </option>

                  <option value="Custom Garments">
                    Custom Garments
                  </option>

                  <option value="Product Enquiry">
                    Product Enquiry
                  </option>

                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#ed1c24] focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg transition hover:brightness-95 hover:shadow-xl"
              >
                <Send size={19} />
                Send on WhatsApp
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                No database. Your form details are only used
                to prepare the WhatsApp message.
              </p>

              {/* SUCCESS */}
              {submitted && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      WhatsApp message prepared.
                    </p>

                    <p className="mt-1 text-sm">
                      Your WhatsApp conversation should open
                      automatically.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#06131b]">
            <div className="grid lg:grid-cols-2">
              {/* LOCATION */}
              <div className="flex min-h-[300px] flex-col justify-center p-8 sm:p-10 lg:p-14">
                <MapPin
                  size={35}
                  className="text-[#ed1c24]"
                />

                <h2 className="mt-5 text-3xl font-black text-white">
                  Visit Our Location
                </h2>

                <p className="mt-4 text-lg leading-7 text-gray-300">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Contact Numbers
                  </p>

                  <div className="mt-2 space-y-1">
                    {company.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block font-bold text-white hover:text-[#ed1c24]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex min-h-[300px] flex-col justify-center bg-[#ed1c24] p-8 sm:p-10 lg:p-14">
                <MessageCircle
                  size={35}
                  className="text-white"
                />

                <h2 className="mt-5 text-3xl font-black text-white">
                  Ready To Discuss Your Order?
                </h2>

                <p className="mt-4 leading-7 text-white/85">
                  Send your requirements directly through
                  WhatsApp and start the conversation with
                  AR Trading & Suppliers.
                </p>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#06131b] transition hover:bg-gray-100"
                >
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-gray-200 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Looking for bulk garments?
            </h2>

            <p className="mt-1 text-gray-500">
              Submit your complete requirement through our
              bulk order form.
            </p>
          </div>

          <Link
            href="/bulk-orders"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white transition hover:bg-[#d71920]"
          >
            Bulk Order Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}