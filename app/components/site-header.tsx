import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";

import { categories, logo, slugify } from "@/app/data/home-content";

export function SiteHeader() {
  return (
    <header className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-4 px-3 py-5 min-[360px]:px-4 sm:px-6 lg:grid lg:grid-cols-[190px_1fr_250px] lg:items-center lg:px-8">
        <Link href="/" className="mx-auto block w-fit max-w-full lg:mx-0">
          <Image
            src={logo}
            alt="Ecomall"
            width={160}
            height={36}
            priority
            className="h-auto max-w-[116px] min-[360px]:max-w-[150px] sm:max-w-[160px]"
          />
        </Link>
        <form
          action="/shop"
          className="mx-auto flex h-12 w-full min-w-0 max-w-full overflow-hidden rounded-[4px] border-2 border-[#0068c8] bg-white lg:max-w-3xl"
        >
          <select
            aria-label="Product category"
            name="category"
            className="hidden w-44 border-r border-[#ebebeb] bg-white px-4 text-xs font-bold text-black outline-none md:block"
          >
            <option value="">All Categories</option>
            {categories.slice(0, 8).map((category) => (
              <option value={slugify(category)} key={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            aria-label="Search products"
            name="q"
            placeholder="Search for products"
            className="min-w-0 flex-1 px-3 text-sm outline-none min-[360px]:px-4"
          />
          <button
            type="submit"
            className="hidden w-28 shrink-0 items-center justify-center bg-[#0068c8] text-xs font-extrabold uppercase text-white md:flex"
          >
            Search
          </button>
        </form>
        <div className="flex min-w-0 items-center justify-center gap-4 text-[12px] font-bold min-[360px]:gap-5 lg:justify-end">
          <Link href="/wishlist" className="relative inline-flex items-center gap-2 hover:text-[#0068c8]">
            <Heart aria-hidden size={24} strokeWidth={1.7} />
            <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#0068c8] text-[10px] text-white">
              0
            </span>
          </Link>
          <Link href="/account" className="hidden items-center gap-2 hover:text-[#0068c8] sm:inline-flex">
            <User aria-hidden size={24} strokeWidth={1.7} />
            <span>
              My Account
              <span className="block font-semibold text-[#848484]">Login</span>
            </span>
          </Link>
          <Link href="/cart" className="relative inline-flex items-center gap-2 hover:text-[#0068c8]">
            <ShoppingCart aria-hidden size={26} strokeWidth={1.7} />
            <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#0068c8] text-[10px] text-white">
              0
            </span>
            <span className="hidden sm:block">
              My Cart
              <span className="block font-semibold text-[#848484]">$0.00</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
