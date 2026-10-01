import type { Metadata } from "next";

import "./globals.css";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "AR Trading & Suppliers | Garment Manufacturer & Wholesale Supplier",

  description:
    "AR Trading & Suppliers provides garment manufacturing, wholesale supply and custom garment solutions for men's, women's, kids and plus-size clothing.",

  keywords: [
    "garment manufacturer Nepal",
    "garment wholesaler Nepal",
    "garment supplier Kathmandu",
    "bulk garments Nepal",
    "custom garments Nepal",
    "AR Trading & Suppliers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111827] antialiased">
        <TopBar />

        <Header />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}