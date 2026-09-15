export default function ChapterBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-8 flex max-w-prose flex-col gap-5 font-body text-lg leading-loose text-cream-200">
      {paragraphs.map((paragraph, i) =>
        paragraph.trim() === "❦" ? (
          <p key={i} aria-hidden="true" className="my-2 text-center text-2xl text-gold-400/60">
            ❦
          </p>
        ) : (
          <p key={i}>{paragraph}</p>
        )
      )}
    </div>
  );
}
