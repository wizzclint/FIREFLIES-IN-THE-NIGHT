export default function PageIntro({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream-100">{title}</h1>
      <p className="mt-4 font-body text-lg italic text-cream-300">{intro}</p>
    </div>
  );
}
