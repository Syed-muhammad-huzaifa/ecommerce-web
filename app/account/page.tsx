import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

export default function AccountPage() {
  return (
    <PageShell>
      <main>
        <PageHero title="My Account" eyebrow="Login" description="Access orders, wishlist, checkout details, and account settings." />
        <section className="mx-auto grid max-w-[920px] gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
          <form className="grid gap-4 rounded-[6px] border border-[#ebebeb] p-6">
            <h2 className="text-xl font-black">Login</h2>
            <input placeholder="Username or email" className="h-12 rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
            <input placeholder="Password" type="password" className="h-12 rounded-[4px] border border-[#ebebeb] px-4 outline-[#0068c8]" />
            <ButtonLink href="/account">Login</ButtonLink>
          </form>
          <div className="rounded-[6px] border border-[#ebebeb] p-6">
            <h2 className="text-xl font-black">New Customer</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#606060]">Create an account to save wishlist items and speed through checkout.</p>
            <ButtonLink href="/account" className="mt-6">Create Account</ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
