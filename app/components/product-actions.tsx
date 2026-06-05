"use client";

import { CartIcon, WishlistIcon } from "@/app/components/store-provider";
import type { Product } from "@/app/data/home-content";

export function ProductActions({ product }: { product: Product }) {
  return (
    <>
      <WishlistIcon product={product} />
      <CartIcon product={product} />
    </>
  );
}
