import Image from "next/image";

import { ButtonLink } from "@/app/components/button-link";
import { MotionSection } from "@/app/components/motion-section";
import { heroPromos } from "@/app/data/home-content";

export function HeroPromos() {
  return (
    <MotionSection className="mx-auto grid max-w-[1380px] gap-8 px-3 py-8 min-[360px]:px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      {heroPromos.map((promo) => (
        <article
          key={promo.title}
          className={`relative min-h-[320px] overflow-hidden rounded-[6px] bg-gradient-to-br ${promo.theme} p-4 text-center min-[360px]:min-h-[360px] min-[360px]:p-8`}
        >
          <div className="relative z-10 mx-auto max-w-md">
            <span className="rounded-[3px] bg-[#dd2831] px-3 py-1 text-[10px] font-extrabold uppercase text-white">
              {promo.kicker}
            </span>
            <h1 className="mx-auto mt-4 max-w-[220px] text-[20px] font-black leading-[1.08] text-black min-[360px]:max-w-[315px] min-[360px]:text-[23px] sm:max-w-[430px] sm:text-3xl md:text-[40px]">
              {promo.title}
            </h1>
            <p className="mt-3 text-[10px] font-extrabold uppercase text-black/65 min-[360px]:text-xs">{promo.subtitle}</p>
            <ButtonLink className="mt-5 px-4 min-[360px]:mt-6 min-[360px]:px-6">Shop Now</ButtonLink>
          </div>
          <Image
            src={promo.image}
            alt=""
            width={520}
            height={440}
            className="absolute -bottom-4 left-1/2 max-h-[180px] w-auto -translate-x-1/2 object-contain min-[360px]:max-h-[205px] md:max-h-[230px]"
          />
        </article>
      ))}
    </MotionSection>
  );
}
