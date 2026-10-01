import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact AR Trading & Suppliers on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={23} />

      <span className="hidden text-sm font-bold sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}