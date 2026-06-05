import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

export default function CheckoutPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Checkout" eyebrow="Secure Payment" description="Enter billing details and review your order." />
        <section className="mx-auto grid max-w-[1380px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <form className="grid gap-4 rounded-[6px] border border-[#ebebeb] p-6 sm:grid-cols-2">
            {["First name", "Last name", "Email", "Phone", "Address", "City"].map((label) => (
              <label key={label} className="text-sm font-bold">
                {label}
                <input className="mt-2 h-12 w-full rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
              </label>
            ))}
          </form>
          <aside className="h-fit rounded-[6px] border border-[#ebebeb] p-6">
            <h2 className="text-xl font-black">Order Summary</h2>
            <p className="mt-4 text-sm font-semibold text-[#606060]">Products, shipping, and taxes are ready for final review.</p>
            <ButtonLink href="/track-order" className="mt-6 w-full">Place Order</ButtonLink>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
