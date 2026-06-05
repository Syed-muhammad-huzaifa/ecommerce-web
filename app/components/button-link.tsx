import { cn } from "@/app/lib/cn";

type ButtonLinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function ButtonLink({ children, className, href = "/shop" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-10 max-w-full items-center justify-center gap-2 rounded-[4px] bg-[#0068c8] px-6 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0068c8] hover:ring-1 hover:ring-[#0068c8]",
        className,
      )}
    >
      {children}
    </a>
  );
}
