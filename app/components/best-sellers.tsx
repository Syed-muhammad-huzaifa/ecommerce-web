import Image from "next/image";

import { ButtonLink } from "@/app/components/button-link";
import { MotionSection } from "@/app/components/motion-section";
import { ProductCard } from "@/app/components/product-card";
import { SectionHeading } from "@/app/components/section-heading";
import { bestSellers } from "@/app/data/home-content";

export function BestSellers() {
  return (
    <MotionSection className="mx-auto max-w-[1380px] px-4 pb-12 sm:px-6 lg:px-8">
      <SectionHeading title="Daily Best Sells" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {bestSellers.slice(0, 2).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <article className="relative order-first min-h-[390px] overflow-hidden rounded-[6px] bg-[#b9bd9c] p-7 text-center lg:order-none lg:row-span-2">
          <Image
            src="https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/10/cat-game-310x264.png"
            alt=""
            width={330}
            height={280}
            className="mx-auto h-44 w-auto object-contain"
          />
          <span className="mt-4 inline-block rounded-[3px] bg-[#dd2831] px-3 py-1 text-[10px] font-extrabold uppercase text-white">
            Save Extra
          </span>
          <h3 className="mt-3 text-3xl font-black leading-tight text-black">15% Off Order Above</h3>
          <ButtonLink className="mt-6">Shop Now</ButtonLink>
        </article>
        {bestSellers.slice(2).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </MotionSection>
  );
}
