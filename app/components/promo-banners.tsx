import Image from "next/image";

import { ButtonLink } from "@/app/components/button-link";
import { MotionSection } from "@/app/components/motion-section";

export function PromoBanners() {
  return (
    <MotionSection id="promo-banners" className="mx-auto grid max-w-[1380px] gap-8 px-3 pb-12 min-[360px]:px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
      <article className="grid min-h-[300px] overflow-hidden rounded-[6px] bg-[#ffbd25] p-6 text-center sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:text-left">
        <div className="relative z-10 mx-auto max-w-xl lg:mx-0">
          <p className="text-xs font-extrabold uppercase text-black/60">Up to 15% Off</p>
          <h2 className="mx-auto mt-2 max-w-[460px] text-[30px] font-black leading-tight text-black sm:text-4xl lg:mx-0">
            Discount 15% On All Electronic
          </h2>
          <ButtonLink className="mt-5">Shop Now</ButtonLink>
        </div>
        <div className="relative mt-6 flex min-h-[180px] items-end justify-center lg:mt-0">
          <Image
            src="https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/49-400x400.jpg"
            alt="4K television deal"
            width={400}
            height={300}
            className="h-52 w-auto object-contain mix-blend-multiply sm:h-60 lg:h-72"
          />
        </div>
      </article>
      <article className="grid min-h-[300px] overflow-hidden rounded-[6px] bg-[#ece8f2] p-6 text-center sm:p-8">
        <div className="relative z-10">
          <span className="rounded-[3px] bg-[#dd2831] px-3 py-1 text-[10px] font-extrabold uppercase text-white">
            Month Deal
          </span>
          <h2 className="mx-auto mt-4 max-w-[260px] text-2xl font-black leading-tight text-black">
            Latest Special Phones
          </h2>
          <p className="mt-2 text-xs font-extrabold uppercase text-black/60">Sale ! 20% Off</p>
        </div>
        <div className="mt-4 flex min-h-[180px] items-end justify-center">
          <Image
            src="https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/17-400x400.jpg"
            alt="Latest special iPhone"
            width={300}
            height={280}
            className="h-56 w-auto object-contain mix-blend-multiply sm:h-64"
          />
        </div>
      </article>
    </MotionSection>
  );
}

export function CameraBanner() {
  return (
    <MotionSection id="camera-banner" className="bg-[#0f0f0f]">
      <div className="mx-auto grid min-h-[420px] max-w-[1380px] items-center gap-10 overflow-hidden px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="relative z-10 max-w-2xl text-white">
          <span className="inline-flex rounded-[4px] bg-[#fcc904] px-4 py-1.5 text-xs font-black uppercase text-black">
            Super deal on
          </span>
          <h2 className="mt-5 max-w-2xl text-[34px] font-black leading-tight sm:text-5xl lg:text-[62px]">
            Get $50 - $100 Off When Buying Online.
          </h2>
          <p className="mt-4 max-w-lg text-sm font-bold uppercase leading-6 text-white/55">
            4K video cameras, lenses, and creator gear with fast delivery.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/shop/camera" className="h-12 px-8">Shop Now</ButtonLink>
            <div className="flex gap-5 text-sm font-black uppercase text-white/70">
              <span>4K Ready</span>
              <span>Free Ship</span>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex h-72 w-full max-w-lg items-center justify-center overflow-hidden rounded-[10px] bg-[radial-gradient(circle_at_50%_45%,#f1f1f1,#9a9a9a_52%,#202020_74%)] shadow-[0_28px_80px_rgba(0,0,0,0.38)] sm:h-96 lg:max-w-xl">
          <div className="absolute inset-6 rounded-[24px] border border-white/25" />
          <div className="absolute -right-20 top-8 h-24 w-80 -rotate-12 rounded-full bg-white/15" />
          <div className="absolute -left-24 bottom-12 h-20 w-80 -rotate-12 rounded-full bg-black/20" />
          <Image
            src="https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/26-400x400.jpg"
            alt="Online camera deal"
            width={520}
            height={420}
            className="relative z-10 h-full w-full object-contain p-8 mix-blend-multiply drop-shadow-[0_22px_22px_rgba(0,0,0,0.42)]"
          />
        </div>
      </div>
    </MotionSection>
  );
}
