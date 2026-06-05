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
    <MotionSection id="camera-banner" className="bg-[#111]">
      <div className="mx-auto grid min-h-[330px] max-w-[1380px] items-center gap-8 overflow-hidden px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="relative z-10 max-w-xl text-white">
          <p className="text-xs font-extrabold uppercase text-[#fcc904]">Super deal on</p>
          <h2 className="mt-2 text-[32px] font-black leading-tight sm:text-4xl md:text-5xl">
            Get $50 - $100 Off When Buying Online.
          </h2>
          <ButtonLink className="mt-7">Shop Now</ButtonLink>
        </div>
        <div className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center overflow-hidden rounded-[6px] bg-[radial-gradient(circle_at_50%_45%,#3b3b3b,#111_70%)] sm:h-80 lg:max-w-xl">
          <Image
            src="https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/26-400x400.jpg"
            alt="Online camera deal"
            width={520}
            height={420}
            className="h-full w-full object-contain p-6 opacity-95 mix-blend-luminosity"
          />
        </div>
      </div>
    </MotionSection>
  );
}
