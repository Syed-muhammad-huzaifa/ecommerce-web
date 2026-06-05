import { InfoPage } from "@/app/components/info-page";

export default function BlogPage() {
  return (
    <InfoPage
      eyebrow="News & Blog"
      title="Latest Tech Buying Guides"
      description="Editorial-style entries for deals, product launches, and shopping advice."
      points={["Best Gaming Deals", "Phone Upgrade Guide", "Home Theater Picks"]}
    />
  );
}
