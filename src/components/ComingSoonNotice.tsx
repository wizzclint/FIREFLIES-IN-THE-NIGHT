export default function ComingSoonNotice({ kind = "piece" }: { kind?: string }) {
  return (
    <div className="mt-10 rounded-xl border border-dashed border-gold-400/30 bg-night-800/40 p-6 sm:p-8">
      <p className="font-body italic text-cream-300">
        This {kind} is still being written down. The full text will be published here —
        for now, this page holds its place.
      </p>
    </div>
  );
}
