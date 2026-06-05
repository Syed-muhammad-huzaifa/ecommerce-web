import Image from "next/image";

import { ButtonLink } from "@/app/components/button-link";
import { MotionSection } from "@/app/components/motion-section";
import { heroPromos } from "@/app/data/home-content";
import { cn } from "@/app/lib/cn";

const promoStyles = [
  {
    shell: "bg-[#ffba19]",
    panel: "bg-[#ffd45a]/70",
    strip: "bg-[#f09900]/30",
    image: "max-h-[190px] min-[360px]:max-h-[230px] md:max-h-[280px]",
    chip: "Weekend Deal",
    note: "Console bundles • controllers • games",
  },
  {
    shell: "bg-[#f6c8d1]",
    panel: "bg-[#fde4e9]/70",
    strip: "bg-[#dfa6b3]/30",
    image: "max-h-[205px] min-[360px]:max-h-[245px] md:max-h-[300px]",
    chip: "New Products",
    note: "Wireless audio • premium comfort",
  },
];

export function HeroPromos() {
  return (
    <MotionSection className="mx-auto grid max-w-[1380px] gap-8 px-3 py-8 min-[360px]:px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      {heroPromos.map((promo, index) => {
        const style = promoStyles[index] ?? promoStyles[0];

        return (
        <article
          key={promo.title}
          className={cn(
            "group relative isolate grid min-h-[390px] overflow-hidden rounded-[8px] p-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)] min-[360px]:p-7 sm:min-h-[430px]",
            style.shell,
          )}
        >
          <div className={cn("absolute inset-x-6 bottom-5 top-[46%] -z-10 rounded-[28px] blur-0", style.panel)} />
          <div className={cn("absolute -right-16 top-10 -z-10 h-24 w-72 rotate-[-18deg] rounded-full", style.strip)} />
          <div className={cn("absolute -left-16 bottom-20 -z-10 h-16 w-72 rotate-[-18deg] rounded-full", style.strip)} />

          <div className="relative z-10 mx-auto flex max-w-[520px] flex-col items-center">
            <span className="rounded-[4px] bg-[#dd2831] px-4 py-1.5 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_8px_18px_rgba(221,40,49,0.25)]">
              {style.chip}
            </span>
            <h1 className="mx-auto mt-5 max-w-[260px] text-[25px] font-black leading-[1.05] text-black min-[360px]:max-w-[330px] min-[360px]:text-[30px] sm:max-w-[520px] sm:text-[42px]">
              {promo.title}
            </h1>
            <p className="mt-3 text-[10px] font-black uppercase text-black/60 min-[360px]:text-xs">{promo.subtitle}</p>
            <ButtonLink className="mt-5 h-11 px-6 shadow-[0_12px_22px_rgba(0,104,200,0.22)]">Shop Now</ButtonLink>
            <p className="mt-4 hidden text-xs font-extrabold uppercase text-black/45 sm:block">{style.note}</p>
          </div>

          <div className="relative z-10 mt-5 flex min-h-[170px] items-end justify-center min-[360px]:min-h-[210px] sm:min-h-[230px]">
            <div className="absolute bottom-2 h-5 w-[72%] rounded-full bg-black/10 blur-md" />
            <Image
              src={promo.image}
              alt=""
              width={520}
              height={440}
              className={cn(
                "relative z-10 w-auto object-contain drop-shadow-[0_22px_22px_rgba(0,0,0,0.22)] transition duration-300 group-hover:scale-105",
                style.image,
              )}
            />
          </div>
        </article>
        );
      })}
    </MotionSection>
  );
}
