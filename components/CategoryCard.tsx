import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  name,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[125px] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-[14px] font-extrabold text-gray-900 transition-colors group-hover:text-red-600">
              {name}
            </h3>

            <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500">
              {description}
            </p>
          </div>

          {/* Arrow */}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}