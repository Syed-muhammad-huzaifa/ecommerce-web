import { MotionSection } from "@/app/components/motion-section";
import { ProductCard } from "@/app/components/product-card";
import { SectionHeading } from "@/app/components/section-heading";
import { deals } from "@/app/data/home-content";

export function DealsSection() {
  return (
    <MotionSection className="mx-auto max-w-[1380px] px-4 pb-12 sm:px-6 lg:px-8">
      <SectionHeading title="Deals of the day" />
      <div className="grid gap-6 lg:grid-cols-2">
        {deals.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} compact bordered />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[
                ["630", "Days"],
                ["05", "Hours"],
                ["33", "Mins"],
                ["50", "Secs"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[4px] bg-[#0068c8] py-2 text-center text-white">
                  <span className="block text-lg font-black leading-none sm:text-2xl">{value}</span>
                  <span className="text-[9px] font-bold uppercase sm:text-[10px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
