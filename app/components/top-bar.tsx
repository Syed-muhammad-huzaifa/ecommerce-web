import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { topLinks } from "@/app/data/home-content";

export function TopBar() {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="mx-auto flex min-h-9 max-w-[1380px] items-center justify-between gap-4 px-4 text-[12px] font-semibold sm:px-6 lg:px-8">
        <div className="hidden items-center gap-5 md:flex">
          <span className="inline-flex items-center gap-1">
            English <ChevronDown aria-hidden size={12} />
          </span>
          <span className="inline-flex items-center gap-1">
            USD <ChevronDown aria-hidden size={12} />
          </span>
        </div>
        <p className="min-w-0 flex-1 text-center text-[10px] font-bold uppercase leading-4 text-white min-[360px]:text-[11px] md:text-[12px]">
          Free Shipping On All Orders Over $100
        </p>
        <nav aria-label="Top links" className="hidden items-center gap-5 md:flex">
          {topLinks.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={item.label === "Flash Sale" ? "text-[#fcc904]" : "hover:text-[#0068c8]"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
