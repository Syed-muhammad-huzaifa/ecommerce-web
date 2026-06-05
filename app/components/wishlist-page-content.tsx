"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { ButtonLink } from "@/app/components/button-link";
import { useStore } from "@/app/components/store-provider";

export function WishlistPageContent() {
  const { addToCart, wishlistItems } = useStore();

  if (!wishlistItems.length) {
    return (
      <section className="mx-auto max-w-[760px] px-4 py-12 text-center sm:px-6">
        <Heart className="mx-auto text-[#0068c8]" size={58} />
        <h2 className="mt-5 text-3xl font-black">Your wishlist is empty</h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-6 text-[#606060]">
          Tap the heart on product cards to save your favorite electronics.
        </p>
        <ButtonLink href="/shop" className="mt-6">Explore Products</ButtonLink>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-[1380px] gap-5 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {wishlistItems.map((item) => (
        <article key={item.id} className="rounded-[6px] border border-[#ebebeb] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
          <Link href={`/product/${item.id}`} className="relative block aspect-square rounded-[4px] bg-[#f7f7f7]">
            <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-4" />
          </Link>
          <p className="mt-4 text-xs font-bold uppercase text-[#848484]">{item.category}</p>
          <h2 className="mt-1 line-clamp-2 text-sm font-black leading-snug">
            <Link href={`/product/${item.id}`} className="hover:text-[#0068c8]">
              {item.name}
            </Link>
          </h2>
          <p className="mt-2 text-lg font-black text-[#dd2831]">{item.price}</p>
          <button
            type="button"
            className="mt-4 h-10 w-full rounded-[4px] bg-[#0068c8] text-xs font-black uppercase text-white transition hover:bg-black"
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        </article>
      ))}
    </section>
  );
}
