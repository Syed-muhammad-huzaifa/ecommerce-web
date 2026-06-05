"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import { ButtonLink } from "@/app/components/button-link";
import { useStore } from "@/app/components/store-provider";

export function CartPageContent() {
  const { cartItems, cartTotal, decrementCartItem, incrementCartItem } = useStore();

  if (!cartItems.length) {
    return (
      <section className="mx-auto max-w-[760px] px-4 py-12 text-center sm:px-6">
        <ShoppingCart className="mx-auto text-[#0068c8]" size={58} />
        <h2 className="mt-5 text-3xl font-black">Your cart is empty</h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-6 text-[#606060]">
          Add products from the homepage or shop page and they will appear here instantly.
        </p>
        <ButtonLink href="/shop" className="mt-6">Continue Shopping</ButtonLink>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-[1380px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <div className="overflow-hidden rounded-[6px] border border-[#ebebeb]">
        {cartItems.map((item) => (
          <article key={item.id} className="grid gap-4 border-b border-[#ebebeb] p-5 last:border-b-0 sm:grid-cols-[110px_1fr_auto] sm:items-center">
            <div className="relative aspect-square rounded-[4px] bg-[#f7f7f7]">
              <Image src={item.image} alt={item.name} fill sizes="110px" className="object-contain p-3" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-[#848484]">{item.category}</p>
              <h2 className="mt-1 text-base font-black leading-snug">
                <Link href={`/product/${item.id}`} className="hover:text-[#0068c8]">
                  {item.name}
                </Link>
              </h2>
              <p className="mt-2 text-lg font-black text-[#dd2831]">{item.price}</p>
            </div>
            <div className="flex w-fit items-center overflow-hidden rounded-[4px] border border-[#ebebeb]">
              <button aria-label="Decrease quantity" className="grid size-9 place-items-center" onClick={() => decrementCartItem(item.id)}>
                <Minus size={15} />
              </button>
              <span className="grid size-9 place-items-center text-sm font-black">{item.quantity}</span>
              <button aria-label="Increase quantity" className="grid size-9 place-items-center" onClick={() => incrementCartItem(item.id)}>
                <Plus size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <aside className="h-fit rounded-[6px] border border-[#ebebeb] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
        <h2 className="text-xl font-black">Cart Totals</h2>
        <div className="mt-5 flex justify-between border-b border-[#ebebeb] pb-4 text-sm font-bold">
          <span>Subtotal</span>
          <span>{cartTotal}</span>
        </div>
        <ButtonLink href="/checkout" className="mt-6 w-full">Proceed To Checkout</ButtonLink>
      </aside>
    </section>
  );
}
