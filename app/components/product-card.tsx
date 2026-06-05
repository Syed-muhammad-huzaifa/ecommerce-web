import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

import type { Product } from "@/app/data/home-content";
import { cn } from "@/app/lib/cn";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  bordered?: boolean;
};

export function ProductCard({ product, compact = false, bordered = false }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]",
        bordered && "rounded-[6px] border border-[#bcd9ef] p-4",
        !bordered && "p-2",
      )}
    >
      <div className={cn("flex gap-4", compact ? "items-center" : "flex-col")}>
        <div
          className={cn(
            "relative shrink-0 overflow-hidden rounded-[4px] bg-[#f7f7f7]",
            compact ? "size-24 sm:size-28" : "aspect-square w-full",
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={compact ? "(min-width: 640px) 112px, 96px" : "(min-width: 1024px) 190px, 45vw"}
            className="object-contain p-2 transition duration-300 group-hover:scale-105"
          />
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.discount && (
              <span className="rounded-[3px] bg-[#0068c8] px-2 py-0.5 text-[10px] font-extrabold text-white">
                {product.discount}
              </span>
            )}
            {product.labels?.map((label) => (
              <span
                key={label}
                className="rounded-[3px] bg-[#dd2831] px-2 py-0.5 text-[10px] font-extrabold uppercase text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold text-[#848484]">{product.category}</p>
          <h3 className="mt-1 line-clamp-2 text-[13px] font-extrabold leading-snug text-black sm:text-sm">
            <Link href={`/product/${product.id}`} className="hover:text-[#0068c8]">
              {product.name}
            </Link>
          </h3>
          <div className="mt-2 flex text-[#fdc904]" aria-label={`${product.rating ?? 5} star rating`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={12}
                fill={index < (product.rating ?? 5) ? "currentColor" : "none"}
                className={index < (product.rating ?? 5) ? "" : "text-[#c3c3c3]"}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-sm font-black text-[#dd2831]">{product.price}</span>
            {product.oldPrice && (
              <span className="text-xs font-bold text-[#9a9a9a] line-through">{product.oldPrice}</span>
            )}
          </div>
          {bordered && product.sold && (
            <p className="mt-3 text-xs font-semibold text-[#848484]">
              Sold: <span className="font-black text-black">{product.sold}</span>
            </p>
          )}
        </div>
      </div>
      <div className="absolute right-3 top-3 hidden gap-2 opacity-0 transition group-hover:flex group-hover:opacity-100">
        <button aria-label="Add to wishlist" className="grid size-8 place-items-center rounded-full bg-white shadow">
          <Heart size={15} />
        </button>
        <button aria-label="Add to cart" className="grid size-8 place-items-center rounded-full bg-[#0068c8] text-white shadow">
          <ShoppingCart size={15} />
        </button>
      </div>
    </article>
  );
}
