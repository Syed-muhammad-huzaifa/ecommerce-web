"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";

import { StoreIconButton, useStore } from "@/app/components/store-provider";

export function HeaderActions() {
  const { cartCount, cartTotal, openCart, wishlistCount } = useStore();

  return (
    <div className="flex min-w-0 items-center justify-center gap-4 text-[12px] font-bold min-[360px]:gap-5 lg:justify-end">
      <Link href="/wishlist" className="relative inline-flex items-center gap-2 hover:text-[#0068c8]">
        <Heart aria-hidden size={24} strokeWidth={1.7} />
        <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#0068c8] text-[10px] text-white">
          {wishlistCount}
        </span>
      </Link>
      <Link href="/account" className="hidden items-center gap-2 hover:text-[#0068c8] sm:inline-flex">
        <User aria-hidden size={24} strokeWidth={1.7} />
        <span>
          My Account
          <span className="block font-semibold text-[#848484]">Login</span>
        </span>
      </Link>
      <div className="relative inline-flex items-center gap-2">
        <StoreIconButton count={cartCount} icon={<ShoppingCart aria-hidden size={26} strokeWidth={1.7} />} label="Open cart" onClick={openCart} />
        <button type="button" className="hidden text-left hover:text-[#0068c8] sm:block" onClick={openCart}>
          My Cart
          <span className="block font-semibold text-[#848484]">{cartTotal}</span>
        </button>
      </div>
    </div>
  );
}
