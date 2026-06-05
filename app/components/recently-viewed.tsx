import { MotionSection } from "@/app/components/motion-section";
import { ProductCard } from "@/app/components/product-card";
import { SectionHeading } from "@/app/components/section-heading";
import { recentlyViewed } from "@/app/data/home-content";

export function RecentlyViewed() {
  return (
    <MotionSection className="mx-auto max-w-[1380px] px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading title="Recently Viewed Products" />
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {recentlyViewed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </MotionSection>
  );
}
