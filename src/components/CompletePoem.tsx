const stanzaPairs: { left: string[]; right: string[] }[] = [
  {
    left: [
      "My flaws my own",
      "I'm carved from Koshul family stone",
      "Roots run deep like ancient trees",
      "I am trying to bank good deeds",
      "Kiraman Katibeen",
    ],
    right: [
      "I am trying to ascend",
      "Seize every second",
      "Reckon with my record",
      "Remembering & beckoning every blessing",
      "Prayer the only weapon",
    ],
  },
  {
    left: [
      "Keeping track of every dip every slip",
      "I fall — get up, begin again",
      "fearing the final accounting",
    ],
    right: [
      "Purposeless pursuits make me nervous",
      "My dhikr verses — like nurses — healing what the hurt is",
      "Courageous as currents — burning like a furnace",
      "Certain in my purpose",
      "Underneath the surface, Huqq is workin",
    ],
  },
  {
    left: [
      "Huqq colossal as the cosmos — quiet as a prayer",
      "Rare as truth in a world of flair",
      "I cut through like a surgical tear —",
      "Precise — slicing through despair",
    ],
    right: [
      "Kiraman Katibeen — catching it all on film",
      "Every whim, every hymn, every sin",
      "But still therein remains a flickering",
      "Dim light I carry within",
      "Ya Allah, shine light on these dreams that dimmed",
    ],
  },
];

function Stanza({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {lines.map((line, i) => (
        <p key={i} className="font-body text-cream-200">
          {line}
        </p>
      ))}
    </div>
  );
}

export default function CompletePoem() {
  return (
    <section aria-labelledby="poem-heading" className="border-t border-night-700/60 bg-night-950">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p
          id="poem-heading"
          className="text-center font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          The Complete Poem
        </p>

        <div className="mt-10 flex flex-col gap-10 sm:mt-14">
          {stanzaPairs.map((pair, i) => (
            <div key={i} className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
              <Stanza lines={pair.left} />
              <Stanza lines={pair.right} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 text-center sm:mt-24">
          <div aria-hidden="true" className="h-px w-14 bg-gold-400/40" />
          <p className="font-display text-2xl italic text-cream-100 sm:text-3xl">
            But still therein remains a flickering
            <br />
            dim light I carry within.
          </p>
          <p className="font-display text-xl text-gold-400 sm:text-2xl">
            Ya Allah — shine light on these dreams that dimmed.
          </p>
        </div>
      </div>
    </section>
  );
}
