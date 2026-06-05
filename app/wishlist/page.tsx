import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { ProductListing } from "@/app/components/product-listing";
import { products } from "@/app/data/home-content";

export default function WishlistPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Wishlist" eyebrow="Saved Items" description="Keep favorite electronics ready for your next shopping session." />
        <section className="mx-auto max-w-[1380px] px-4 py-10 sm:px-6 lg:px-8">
          <ProductListing products={products.slice(0, 5)} />
        </section>
      </main>
    </PageShell>
  );
}
