type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function PageHero({ title, eyebrow, description }: PageHeroProps) {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1380px] px-4 py-10 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-xs font-extrabold uppercase text-[#0068c8]">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-black leading-tight text-black sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#606060]">{description}</p>}
      </div>
    </section>
  );
}
