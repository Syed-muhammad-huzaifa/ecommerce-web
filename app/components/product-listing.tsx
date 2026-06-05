import { ProductCard } from "@/app/components/product-card";
import type { Product } from "@/app/data/home-content";

type ProductListingProps = {
  products: Product[];
};

export function ProductListing({ products }: ProductListingProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
