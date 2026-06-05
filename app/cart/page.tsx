import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { products } from "@/app/data/home-content";

export default function CartPage() {
  const cartItems = products.slice(0, 2);
  const total = "$979.98";

  return (
    <PageShell>
      <main>
        <PageHero title="My Cart" eyebrow="Checkout" description="Review selected products and continue to secure checkout." />
        <section className="mx-auto grid max-w-[1380px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div className="overflow-hidden rounded-[6px] border border-[#ebebeb]">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 border-b border-[#ebebeb] p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-[#dd2831]">{item.price}</p>
                </div>
                <span className="text-sm font-bold text-[#606060]">Qty: 1</span>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-[6px] border border-[#ebebeb] p-6">
            <h2 className="text-xl font-black">Cart Totals</h2>
            <div className="mt-5 flex justify-between border-b border-[#ebebeb] pb-4 text-sm font-bold">
              <span>Subtotal</span>
              <span>{total}</span>
            </div>
            <ButtonLink href="/checkout" className="mt-6 w-full">Proceed To Checkout</ButtonLink>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
