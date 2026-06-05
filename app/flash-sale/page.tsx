import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { ProductListing } from "@/app/components/product-listing";
import { products } from "@/app/data/home-content";

export default function FlashSalePage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Flash Sale" eyebrow="Today Only" description="Hot electronics deals with limited-time pricing." />
        <section className="mx-auto max-w-[1380px] px-4 py-10 sm:px-6 lg:px-8">
          <ProductListing products={products.filter((product) => product.discount || product.labels?.includes("Hot"))} />
        </section>
      </main>
    </PageShell>
  );
}
