import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="Contact Us" eyebrow="Need Help?" description="Talk to support, find stores, or send a message about your order." />
        <section className="mx-auto grid max-w-[1380px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
          <aside className="rounded-[6px] border border-[#ebebeb] p-6">
            <h2 className="text-xl font-black">Need Help? Call Us:</h2>
            <p className="mt-3 text-3xl font-black">+08 9229 8228</p>
            <p className="mt-4 text-sm font-semibold text-[#606060]">Support1234@Ecomall.com</p>
          </aside>
          <form className="grid gap-4 rounded-[6px] border border-[#ebebeb] p-6 sm:grid-cols-2">
            {["Name", "Email", "Phone", "Subject"].map((label) => (
              <label key={label} className="text-sm font-bold">
                {label}
                <input className="mt-2 h-12 w-full rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
              </label>
            ))}
            <label className="text-sm font-bold sm:col-span-2">
              Message
              <textarea className="mt-2 min-h-36 w-full rounded-[4px] border border-[#ebebeb] p-4 outline-[#0068c8]" />
            </label>
            <ButtonLink href="/contact" className="sm:w-fit">Send Message</ButtonLink>
          </form>
        </section>
      </main>
    </PageShell>
  );
}
