import Image from "next/image";
import Link from "next/link";

import { paymentImage, slugify } from "@/app/data/home-content";

const tags = [
  "Accessories",
  "Apple iphone",
  "Camera & Video",
  "Cellphone",
  "Desktop Computers",
  "Electronic",
  "Game",
  "Gaming Headsets",
  "Headphone",
  "Laptop",
  "Mobile & Tablet",
  "Speaker",
  "Television",
];

const socialLinks = ["f", "x", "in", "p"];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-[#1b1b1b] text-white">
      <div className="mx-auto max-w-[1380px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1.8fr]">
          <section>
            <h2 className="text-sm font-black uppercase">Contact Us</h2>
            <p className="mt-5 text-sm text-white/70">Need Help? Call Us:</p>
            <p className="mt-2 text-2xl font-black">+08 9229 8228</p>
            <p className="mt-4 max-w-52 text-sm text-white/70">Find a location nearest you. see Our Stores</p>
            <p className="mt-4 text-sm font-bold">Support1234@Ecomall.com</p>
          </section>
          <FooterLinks title="About Us" links={["About Us", "News & Blog", "Brands", "Press Center", "Advertising", "Investors"]} />
          <FooterLinks title="Order" links={["Check Order", "Delivery & Pickup", "Returns", "Exchanges", "Developers", "Product Recalls"]} />
          <section className="min-w-0">
            <h2 className="text-sm font-black uppercase leading-6">Sign Up For Newsletter & Get 20% Off</h2>
            <form className="mt-5 flex max-w-full overflow-hidden rounded-[4px] bg-white">
              <input
                aria-label="Email address"
                placeholder="Your e-mail address"
                className="h-12 min-w-0 flex-1 px-4 text-sm text-black outline-none"
              />
              <button className="shrink-0 bg-[#0068c8] px-3 text-[10px] font-extrabold uppercase sm:px-5 sm:text-xs" type="submit">
                Subscribe
              </button>
            </form>
            <div className="mt-5 flex gap-4 text-white/70">
              {socialLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={`${item} social link`}
                  className="grid size-7 place-items-center rounded-full border border-white/15 text-[11px] font-black uppercase hover:border-[#0068c8] hover:text-[#0068c8]"
                >
                  {item}
                </a>
              ))}
            </div>
            <Image src={paymentImage} alt="Payment methods" width={286} height={26} className="mt-6 h-auto w-full max-w-[286px]" />
          </section>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="mb-4 text-sm font-black uppercase">Product tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/shop/${slugify(tag)}`}
                className="rounded-[4px] border border-[#2c2c2c] px-4 py-2 text-xs font-semibold text-white/55 hover:border-[#0068c8] hover:text-white"
              >
                {tag}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-white/45">© Ecomall. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <section>
      <h2 className="text-sm font-black uppercase">{title}</h2>
      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {links.map((link) => (
          <li key={link}>
            <Link href={`/${slugify(link)}`} className="hover:text-[#0068c8]">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
