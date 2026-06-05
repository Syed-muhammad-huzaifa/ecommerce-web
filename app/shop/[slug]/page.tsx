import { notFound } from "next/navigation";

import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { ProductListing } from "@/app/components/product-listing";
import { categoryPages, products } from "@/app/data/home-content";

export function generateStaticParams() {
  return categoryPages.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const category = categoryPages.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = category.products.length ? category.products : products.slice(0, 10);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Product Category"
          title={category.name}
          description={`Explore ${category.name.toLowerCase()} deals, best sellers, and recommended electronics.`}
        />
        <section className="mx-auto max-w-[1380px] px-4 py-10 sm:px-6 lg:px-8">
          <ProductListing products={categoryProducts} />
        </section>
      </main>
    </PageShell>
  );
}
