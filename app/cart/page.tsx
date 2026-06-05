import { CartPageContent } from "@/app/components/cart-page-content";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

export default function CartPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="My Cart" eyebrow="Checkout" description="Review selected products and continue to secure checkout." />
        <CartPageContent />
      </main>
    </PageShell>
  );
}
