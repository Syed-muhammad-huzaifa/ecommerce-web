import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { WishlistPageContent } from "@/app/components/wishlist-page-content";

export default function WishlistPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Wishlist" eyebrow="Saved Items" description="Keep favorite electronics ready for your next shopping session." />
        <WishlistPageContent />
      </main>
    </PageShell>
  );
}
