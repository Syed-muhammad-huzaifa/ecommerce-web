import Image from "next/image";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ShieldCheck, Star, Truck } from "lucide-react";

import { PageShell } from "@/app/components/page-shell";
import { ProductPurchaseActions } from "@/app/components/product-purchase-actions";
import { ProductListing } from "@/app/components/product-listing";
import { products } from "@/app/data/home-content";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <main>
        <section className="mx-auto grid max-w-[1380px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative aspect-square overflow-hidden rounded-[6px] border border-[#ebebeb] bg-[#f7f7f7]">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-8" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#848484]">{product.category}</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">{product.name}</h1>
            <div className="mt-4 flex text-[#fdc904]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill={index < (product.rating ?? 5) ? "currentColor" : "none"} />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-3xl font-black text-[#dd2831]">{product.price}</span>
              {product.oldPrice && <span className="text-base font-bold text-[#9a9a9a] line-through">{product.oldPrice}</span>}
            </div>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-[#606060]">
              Premium electronics with fast delivery, secure checkout, warranty support, and the same deal-focused presentation as the reference store.
            </p>
            <ProductPurchaseActions product={product} />
            <div className="mt-8 grid gap-4 border-t border-[#ebebeb] pt-6 sm:grid-cols-2">
              <Feature icon={<Truck size={24} />} title="Fast Delivery" text="Free shipping on eligible orders." />
              <Feature icon={<ShieldCheck size={24} />} title="Secure Payment" text="Protected checkout experience." />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1380px] px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="mb-5 border-b border-[#ebebeb] pb-3 text-2xl font-black">Related Products</h2>
          <ProductListing products={products.filter((item) => item.id !== product.id).slice(0, 5)} />
        </section>
      </main>
    </PageShell>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-[#0068c8]">{icon}</div>
      <div>
        <h2 className="text-sm font-black uppercase">{title}</h2>
        <p className="text-sm font-semibold text-[#606060]">{text}</p>
      </div>
    </div>
  );
}
