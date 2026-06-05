import { ChevronDown, Flame, Menu } from "lucide-react";
import Link from "next/link";

import { categories, navLinks, slugify } from "@/app/data/home-content";

export function CategoryNav() {
  return (
    <div className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col px-3 min-[360px]:px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
        <Link href="/shop" className="flex h-14 w-full min-w-0 items-center gap-2 border-b border-[#ebebeb] text-sm font-extrabold min-[360px]:gap-3 lg:w-52 lg:border-b-0">
          <Menu aria-hidden size={18} />
          Shop Categories
          <ChevronDown aria-hidden size={14} className="ml-auto" />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-8 text-sm font-extrabold lg:flex"
        >
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="inline-flex items-center gap-1 hover:text-[#0068c8]">
              {link.label}
              {link.label !== "Camera" && <ChevronDown aria-hidden size={12} />}
            </Link>
          ))}
        </nav>
        <Link href="/flash-sale" className="hidden items-center gap-2 text-sm font-extrabold lg:flex">
          <span>Today&apos;s Deal</span>
          <span className="rounded-[3px] bg-[#dd2831] px-2 py-0.5 text-[10px] uppercase text-white">
            Hot
          </span>
          <Flame aria-hidden size={16} className="text-[#dd2831]" />
        </Link>
        <div className="scrollbar-hide flex w-full min-w-0 gap-4 overflow-x-auto py-3 text-[11px] font-bold min-[360px]:gap-5 min-[360px]:text-xs lg:hidden">
          {categories.slice(0, 6).map((category) => (
            <Link href={`/shop/${slugify(category)}`} key={category} className="shrink-0 whitespace-nowrap">
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
