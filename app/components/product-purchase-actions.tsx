"use client";

import { Heart, ShoppingCart } from "lucide-react";

import { useStore } from "@/app/components/store-provider";
import type { Product } from "@/app/data/home-content";

export function ProductPurchaseActions({ product }: { product: Product }) {
  const { addToCart, addToWishlist } = useStore();

  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#0068c8] px-8 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-black"
        onClick={() => addToCart(product)}
      >
        <ShoppingCart size={16} />
        Add To Cart
      </button>
      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-black px-8 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0068c8]"
        onClick={() => addToWishlist(product)}
      >
        <Heart size={16} />
        Wishlist
      </button>
    </div>
  );
}
