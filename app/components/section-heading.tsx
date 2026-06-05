export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center justify-between border-b border-[#ebebeb] pb-3">
      <h2 className="text-2xl font-black leading-none text-black">{title}</h2>
      <div className="hidden gap-2 sm:flex">
        <span className="h-2 w-8 rounded-full bg-[#0068c8]" />
        <span className="size-2 rounded-full bg-[#d9d9d9]" />
        <span className="size-2 rounded-full bg-[#d9d9d9]" />
      </div>
    </div>
  );
}
