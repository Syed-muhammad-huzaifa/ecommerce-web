import { CreditCard, Headphones, RefreshCcw, Truck } from "lucide-react";

const services = [
  { title: "Free Delivery", text: "Free shipping on all order", icon: Truck },
  { title: "Returns", text: "Back guarantee under 7 days", icon: RefreshCcw },
  { title: "Support 24/7", text: "Support online 24 hours a day", icon: Headphones },
  { title: "Payments", text: "100% payment security", icon: CreditCard },
];

export function ServiceFeatures() {
  return (
    <section className="mx-auto max-w-[1380px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[6px] border-2 border-[#0068c8] bg-[#062963] bg-[radial-gradient(circle_at_center,#164fa7,#062963)] px-4 py-5 text-center text-white shadow-inner">
        <p className="text-sm font-extrabold">
          Free Shipping On Order Over $500 - Using code: Freeship
        </p>
      </div>
      <div className="grid gap-6 border-y border-[#ebebeb] py-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon aria-hidden size={42} strokeWidth={1.7} className="text-[#0068c8]" />
            <div>
              <h3 className="text-sm font-black uppercase text-black">{title}</h3>
              <p className="mt-1 text-xs font-semibold text-[#606060]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
