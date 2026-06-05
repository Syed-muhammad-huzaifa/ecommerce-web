"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Heart, Minus, Plus, ShoppingCart, X } from "lucide-react";

import type { Product } from "@/app/data/home-content";

type CartItem = Product & { quantity: number };

type StoreContextValue = {
  cartItems: CartItem[];
  wishlistItems: Product[];
  cartCount: number;
  wishlistCount: number;
  cartTotal: string;
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
  openCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

function readStorage<T>(key: string, fallback: T) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function parsePrice(price: string) {
  const value = price.match(/[\d,.]+/)?.[0]?.replace(/,/g, "");
  return value ? Number(value) : 0;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => readStorage("ecomall-cart", []));
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => readStorage("ecomall-wishlist", []));
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("ecomall-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem("ecomall-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const wishlistCount = wishlistItems.length;
  const cartTotalNumber = cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);
  const cartTotal = currencyFormatter.format(cartTotalNumber);

  const value = useMemo<StoreContextValue>(
    () => ({
      cartItems,
      wishlistItems,
      cartCount,
      wishlistCount,
      cartTotal,
      addToCart(product) {
        setCartItems((items) => {
          const existing = items.find((item) => item.id === product.id);

          if (existing) {
            return items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
          }

          return [...items, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
      },
      addToWishlist(product) {
        setWishlistItems((items) => (items.some((item) => item.id === product.id) ? items : [...items, product]));
      },
      incrementCartItem(productId) {
        setCartItems((items) =>
          items.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
        );
      },
      decrementCartItem(productId) {
        setCartItems((items) =>
          items
            .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0),
        );
      },
      openCart() {
        setIsCartOpen(true);
      },
    }),
    [cartCount, cartItems, cartTotal, wishlistCount, wishlistItems],
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }

  return context;
}

function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cartItems, cartTotal, decrementCartItem, incrementCartItem } = useStore();

  return (
    <div className={isOpen ? "fixed inset-0 z-50" : "pointer-events-none fixed inset-0 z-50"}>
      <button
        aria-label="Close cart overlay"
        className={`absolute inset-0 bg-black/45 transition ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[-24px_0_60px_rgba(0,0,0,0.22)] transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#ebebeb] p-5">
          <div>
            <p className="text-xs font-black uppercase text-[#0068c8]">Shopping Cart</p>
            <h2 className="text-2xl font-black text-black">{cartItems.length ? "Your items" : "Cart is empty"}</h2>
          </div>
          <button aria-label="Close cart" className="grid size-10 place-items-center rounded-full bg-[#f4f4f4]" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article key={item.id} className="grid grid-cols-[84px_1fr] gap-4 rounded-[6px] border border-[#ebebeb] p-3">
                  <div className="relative aspect-square rounded-[4px] bg-[#f7f7f7]">
                    <Image src={item.image} alt={item.name} fill sizes="84px" className="object-contain p-2" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-sm font-black leading-snug">{item.name}</h3>
                    <p className="mt-2 text-sm font-black text-[#dd2831]">{item.price}</p>
                    <div className="mt-3 flex w-fit items-center overflow-hidden rounded-[4px] border border-[#ebebeb]">
                      <button aria-label="Decrease quantity" className="grid size-8 place-items-center" onClick={() => decrementCartItem(item.id)}>
                        <Minus size={14} />
                      </button>
                      <span className="grid size-8 place-items-center text-sm font-black">{item.quantity}</span>
                      <button aria-label="Increase quantity" className="grid size-8 place-items-center" onClick={() => incrementCartItem(item.id)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingCart className="mx-auto text-[#0068c8]" size={48} />
                <p className="mt-4 text-sm font-semibold text-[#606060]">Add products to see them here instantly.</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-[#ebebeb] p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-black">
            <span>Total</span>
            <span className="text-[#dd2831]">{cartTotal}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/cart"
              className="grid h-12 place-items-center rounded-[4px] bg-[#0068c8] text-sm font-black uppercase text-white"
              onClick={onClose}
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              className="grid h-12 place-items-center rounded-[4px] bg-black text-sm font-black uppercase text-white"
              onClick={onClose}
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export function StoreIconButton({
  count,
  icon,
  label,
  onClick,
}: {
  count: number;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button type="button" aria-label={label} className="relative inline-flex items-center gap-2 hover:text-[#0068c8]" onClick={onClick}>
      {icon}
      <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#0068c8] text-[10px] text-white">
        {count}
      </span>
    </button>
  );
}

export function WishlistIcon({ product }: { product: Product }) {
  const { addToWishlist } = useStore();

  return (
    <button
      aria-label="Add to wishlist"
      className="grid size-8 place-items-center rounded-full bg-white shadow transition hover:bg-[#e8f3fe]"
      onClick={() => addToWishlist(product)}
      type="button"
    >
      <Heart size={15} />
    </button>
  );
}

export function CartIcon({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <button
      aria-label="Add to cart"
      className="grid size-8 place-items-center rounded-full bg-[#0068c8] text-white shadow transition hover:bg-black"
      onClick={() => addToCart(product)}
      type="button"
    >
      <ShoppingCart size={15} />
    </button>
  );
}
