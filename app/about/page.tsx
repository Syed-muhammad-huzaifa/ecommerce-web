import { InfoPage } from "@/app/components/info-page";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About Ecomall"
      title="Electronics Deals With Storefront Energy"
      description="A responsive ecommerce experience inspired by the Ecomall Home 6 reference."
      points={["Trusted Brands", "Fast Fulfillment", "Daily Tech Deals"]}
    />
  );
}
