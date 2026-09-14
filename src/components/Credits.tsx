// The "credits/sources" module required on individual work pages per the
// implementation handoff — e.g. photo credits, interview subjects, archival
// sources. Not wired into any page yet since no real credits text exists for
// any piece; drop it in once a piece has sources to disclose:
//
//   <Credits items={["Photograph courtesy of the Koshul family archive"]} />
export default function Credits({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-10 border-t border-night-600/50 pt-6">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Credits &amp; Sources
      </p>
      <ul className="mt-3 flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="font-body text-sm text-cream-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
