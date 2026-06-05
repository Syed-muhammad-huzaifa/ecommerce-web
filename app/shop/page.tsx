import { PageHero } from "@/app/components/page-hero";
import { PageShell } from "@/app/components/page-shell";
import { ProductListing } from "@/app/components/product-listing";
import { categories, products, slugify } from "@/app/data/home-content";

export default function ShopPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Shop Ecomall"
          title="All Electronics"
          description="Browse laptops, phones, gaming gear, audio, cameras, tablets, and smart home essentials."
        />
        <section className="mx-auto grid max-w-[1380px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="h-fit rounded-[6px] border border-[#ebebeb] bg-white p-5">
            <h2 className="text-sm font-black uppercase">Shop Categories</h2>
            <nav className="mt-4 space-y-2 text-sm font-bold text-[#606060]">
              {categories.map((category) => (
                <a key={category} href={`/shop/${slugify(category)}`} className="block hover:text-[#0068c8]">
                  {category}
                </a>
              ))}
            </nav>
          </aside>
          <ProductListing products={products} />
        </section>
      </main>
    </PageShell>
  );
}
