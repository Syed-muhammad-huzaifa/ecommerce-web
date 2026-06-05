import type { ReactNode } from "react";

import { CategoryNav } from "@/app/components/category-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { StoreProvider } from "@/app/components/store-provider";
import { TopBar } from "@/app/components/top-bar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
      <StoreProvider>
        <TopBar />
        <SiteHeader />
        <CategoryNav />
        {children}
        <SiteFooter />
      </StoreProvider>
    </div>
  );
}
