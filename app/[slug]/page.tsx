import { InfoPage } from "@/app/components/info-page";

const fallbackPages: Record<string, { title: string; eyebrow: string; points: string[] }> = {
  brands: { title: "Brands", eyebrow: "Top Brands", points: ["Panasonic", "Sony", "Samsung"] },
  "press-center": { title: "Press Center", eyebrow: "Company News", points: ["Announcements", "Media Assets", "Store Updates"] },
  advertising: { title: "Advertising", eyebrow: "Partner With Us", points: ["Campaigns", "Placements", "Brand Support"] },
  investors: { title: "Investors", eyebrow: "Company", points: ["Growth", "Operations", "Marketplace"] },
  "check-order": { title: "Check Order", eyebrow: "Order Help", points: ["Order Lookup", "Payment Status", "Delivery"] },
  "delivery-and-pickup": { title: "Delivery & Pickup", eyebrow: "Shipping", points: ["Free Delivery", "Store Pickup", "Fast Dispatch"] },
  returns: { title: "Returns", eyebrow: "Support", points: ["7 Day Guarantee", "Simple Process", "Refund Updates"] },
  exchanges: { title: "Exchanges", eyebrow: "Support", points: ["Swap Items", "Warranty Help", "Product Advice"] },
  developers: { title: "Developers", eyebrow: "Platform", points: ["API Ready", "Integrations", "Commerce Tools"] },
  "product-recalls": { title: "Product Recalls", eyebrow: "Safety", points: ["Recall Notices", "Product Checks", "Support"] },
  "news-blog": { title: "News & Blog", eyebrow: "Editorial", points: ["Buying Guides", "Launch News", "Daily Deals"] },
};

export function generateStaticParams() {
  return Object.keys(fallbackPages).map((slug) => ({ slug }));
}

export default async function GenericInfoPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = fallbackPages[slug] ?? {
    title: "Ecomall Page",
    eyebrow: "Ecomall",
    points: ["Electronics", "Deals", "Support"],
  };

  return (
    <InfoPage
      eyebrow={page.eyebrow}
      title={page.title}
      description="A responsive supporting page for the Ecomall shopping experience."
      points={page.points}
    />
  );
}
