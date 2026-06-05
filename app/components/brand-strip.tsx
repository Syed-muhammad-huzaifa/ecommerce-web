import Image from "next/image";

import { MotionSection } from "@/app/components/motion-section";
import { brandLogos } from "@/app/data/home-content";

export function BrandStrip() {
  return (
    <MotionSection className="mx-auto max-w-[1380px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 border border-[#ebebeb] bg-[#fafafa] sm:grid-cols-3 lg:grid-cols-6">
        {brandLogos.map((brand) => (
          <div
            key={brand.name}
            className="grid h-[72px] place-items-center border-b border-r border-[#ebebeb] px-8 last:border-r-0"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={160}
              height={48}
              className="max-h-10 w-auto opacity-35 grayscale"
            />
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
