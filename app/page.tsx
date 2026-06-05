import { BestSellers } from "@/app/components/best-sellers";
import { BrandStrip } from "@/app/components/brand-strip";
import { CameraBanner, PromoBanners } from "@/app/components/promo-banners";
import { DealsSection } from "@/app/components/deals-section";
import { HeroPromos } from "@/app/components/hero-promos";
import { PageShell } from "@/app/components/page-shell";
import { ProductColumns } from "@/app/components/product-columns";
import { RecentlyViewed } from "@/app/components/recently-viewed";
import { ServiceFeatures } from "@/app/components/service-features";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroPromos />
        <BrandStrip />
        <DealsSection />
        <BestSellers />
        <PromoBanners />
        <ProductColumns />
        <CameraBanner />
        <RecentlyViewed />
        <ServiceFeatures />
      </main>
    </PageShell>
  );
}
