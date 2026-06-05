import { ButtonLink } from "@/app/components/button-link";
import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  action?: string;
  actionHref?: string;
};

export function InfoPage({ eyebrow, title, description, points, action = "Shop Now", actionHref = "/shop" }: InfoPageProps) {
  return (
    <PageShell>
      <main>
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        <section className="mx-auto grid max-w-[1380px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          {points.map((point) => (
            <article key={point} className="rounded-[6px] border border-[#ebebeb] bg-white p-6">
              <h2 className="text-lg font-black">{point}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#606060]">
                Built to match the Ecomall store flow with clear ecommerce content, strong spacing, and responsive layouts.
              </p>
            </article>
          ))}
        </section>
        <div className="mx-auto max-w-[1380px] px-4 pb-12 sm:px-6 lg:px-8">
          <ButtonLink href={actionHref}>{action}</ButtonLink>
        </div>
      </main>
    </PageShell>
  );
}
