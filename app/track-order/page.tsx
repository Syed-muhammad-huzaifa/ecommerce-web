import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

export default function TrackOrderPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Track Order" eyebrow="Delivery Status" description="Enter your order details to follow shipment progress." />
        <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
          <form className="grid gap-4 rounded-[6px] border border-[#ebebeb] p-6">
            <label className="text-sm font-bold">
              Order ID
              <input className="mt-2 h-12 w-full rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
            </label>
            <label className="text-sm font-bold">
              Billing email
              <input className="mt-2 h-12 w-full rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
            </label>
            <ButtonLink href="/track-order">Track</ButtonLink>
          </form>
        </section>
      </main>
    </PageShell>
  );
}
