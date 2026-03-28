import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl space-y-5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
        {copy}
      </p>
    </Reveal>
  );
}
