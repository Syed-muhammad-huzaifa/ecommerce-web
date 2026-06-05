import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

import { ButtonLink } from "@/app/components/button-link";
import { MotionSection } from "@/app/components/motion-section";
import { SectionHeading } from "@/app/components/section-heading";
import { deals, type Product } from "@/app/data/home-content";

const countdown = [
  ["630", "Days"],
  ["05", "Hours"],
  ["33", "Mins"],
  ["50", "Secs"],
];

export function DealsSection() {
  return (
    <MotionSection className="mx-auto max-w-[1380px] px-3 pb-12 min-[360px]:px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Deals of the day" />
      <div className="grid items-stretch gap-6 xl:grid-cols-2">
        {deals.map((product, index) => (
          <DealCard key={product.id} product={product} accent={index === 0 ? "blue" : "dark"} />
        ))}
      </div>
    </MotionSection>
  );
}

function DealCard({ product, accent }: { product: Product; accent: "blue" | "dark" }) {
  const soldParts = product.sold?.split("/") ?? ["15", "99"];
  const sold = Number(soldParts[0]);
  const total = Number(soldParts[1]);
  const percent = Number.isFinite(sold) && Number.isFinite(total) ? Math.min(100, (sold / total) * 100) : 35;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[#bcd9ef] bg-white shadow-[0_12px_35px_rgba(0,104,200,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,104,200,0.15)]">
      <div className="grid flex-1 gap-5 p-4 sm:p-5 lg:grid-cols-[210px_1fr] xl:min-h-[360px]">
        <Link
          href={`/product/${product.id}`}
          className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[6px] bg-[#f6f9fc] sm:min-h-[250px] lg:h-full lg:min-h-0"
        >
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
            {product.discount && (
              <span className="rounded-[4px] bg-[#0068c8] px-3 py-1 text-xs font-black text-white">
                {product.discount}
              </span>
            )}
            {product.labels?.map((label) => (
              <span key={label} className="rounded-[4px] bg-[#dd2831] px-3 py-1 text-xs font-black uppercase text-white">
                {label}
              </span>
            ))}
          </div>
          <Image
            src={product.image}
            alt={product.name}
            width={360}
            height={360}
            className="h-52 w-auto object-contain p-4 transition duration-300 hover:scale-105 sm:h-60 lg:h-64"
          />
        </Link>

        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <p className="text-sm font-bold text-[#848484]">{product.category}</p>
            <h3 className="mt-2 max-w-xl text-xl font-black leading-tight text-black sm:min-h-[86px] sm:text-2xl">
              <Link href={`/product/${product.id}`} className="hover:text-[#0068c8]">
                {product.name}
              </Link>
            </h3>
            <div className="mt-3 flex text-[#fdc904]" aria-label={`${product.rating ?? 5} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill={index < (product.rating ?? 5) ? "currentColor" : "none"}
                  className={index < (product.rating ?? 5) ? "" : "text-[#c3c3c3]"}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-black text-[#dd2831]">{product.price}</span>
              {product.oldPrice && <span className="text-sm font-bold text-[#9a9a9a] line-through">{product.oldPrice}</span>}
            </div>
          </div>

          <div>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span className="text-[#848484]">
                  Sold: <span className="text-black">{product.sold}</span>
                </span>
                <span className="text-[#0068c8]">Almost gone</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#e8f3fe]">
                <span className="block h-full rounded-full bg-[#0068c8]" style={{ width: `${percent}%` }} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={`/product/${product.id}`} className="h-11 px-5">
                <ShoppingCart size={16} />
                Shop Deal
              </ButtonLink>
              <p className="text-xs font-bold uppercase text-[#848484]">Free delivery on this item</p>
            </div>
          </div>
        </div>
      </div>

      <div className={accent === "blue" ? "grid grid-cols-4 bg-[#0068c8]" : "grid grid-cols-4 bg-[#111]"}>
        {countdown.map(([value, label]) => (
          <div key={label} className="border-r border-white/15 py-3 text-center text-white last:border-r-0 sm:py-4">
            <span className="block text-2xl font-black leading-none sm:text-3xl">{value}</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase sm:text-xs">{label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
