// A single episode's video slot, placed on the essay/piece page it belongs
// to (episodes are numbered entries in the "Through the Storms" series tied
// to a specific piece — e.g. Episode 03 is Movement Was My Oxygen — not a
// generic bundle). Swap `videoUrl: null` for a real embeddable URL once the
// approved final cut is ready.
export default function EpisodeVideo({
  episodeLabel,
  title,
  videoUrl,
}: {
  episodeLabel: string;
  title: string;
  videoUrl: string | null;
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-night-600/50 bg-night-800/40">
      <div className="flex aspect-video items-center justify-center bg-night-950/60">
        {videoUrl ? (
          <video src={videoUrl} controls className="h-full w-full" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-10 w-10 text-cream-300/40"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.5v7l6-3.5-6-3.5Z" />
          </svg>
        )}
      </div>
      <div className="p-4">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          {episodeLabel}
        </p>
        <p className="mt-1 font-display text-lg text-cream-100">{title}</p>
        {!videoUrl && (
          <p className="mt-1 font-body text-sm text-cream-300">Video coming soon.</p>
        )}
      </div>
    </div>
  );
}
