import { Truck, Users } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#06131b] text-white">
      <div className="mx-auto flex min-h-[32px] max-w-[1500px] items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Truck size={14} strokeWidth={2.2} />
            <span className="font-semibold">
              Welcome to AR Trading & Suppliers
            </span>
          </div>

          <span className="hidden text-white/60 md:block">
            Manufacturer | Wholesale | Custom Orders
          </span>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2">
            <Truck size={14} />
            <span>Supplying Across Nepal & India</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={14} />
            <span>1000+ Bulk Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
}