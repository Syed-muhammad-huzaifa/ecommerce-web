import { MotionSection } from "@/app/components/motion-section";
import { ProductCard } from "@/app/components/product-card";
import { topRated, trending, newProducts } from "@/app/data/home-content";

const columns = [
  { title: "Trending Products", items: trending },
  { title: "New Products", items: newProducts },
  { title: "Top Rated", items: topRated },
];

export function ProductColumns() {
  return (
    <MotionSection className="mx-auto grid max-w-[1380px] gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-3 lg:px-8">
      {columns.map((column) => (
        <section key={column.title}>
          <h2 className="mb-5 border-b border-[#ebebeb] pb-3 text-2xl font-black text-black">
            {column.title}
          </h2>
          <div className="space-y-4">
            {column.items.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </section>
      ))}
    </MotionSection>
  );
}
