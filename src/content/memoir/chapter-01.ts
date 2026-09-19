import type { MemoirChapterContent } from "@/lib/memoirBlocks";

// Transcribed verbatim from leg/chapter_01.html (the package Ahmad approved).
const chapter01: MemoirChapterContent = {
  number: 1,
  slug: "chapter-1",
  title: "Sargodha, 1971",
  soundtrack: {
    name: "Chapter 1 — Origins",
    tracks: [{ media: { publicId: "buyahka-abrar/chapter-07/05_audio", resourceType: "video" }, title: "Kenny G — Songbird (faint)" }],
  },
  blocks: [
    {
      type: "hero",
      book: "Buyahka and Abrar",
      chLabel: "Chapter One",
      title: "Sargodha, 1971",
      em: "The House That Made Him",
      subtitle: "Before Hina. Before the wedding I refused to attend. Before any of what comes next.",
      meta: "Part I — Inheriting",
    },
    {
      type: "fpVideo",
      eyebrow: "THE BOOK OPENS · BETTE MIDLER — THE ROSE",
      video: { publicId: "buyahka-abrar/chapter-01/opening-video", resourceType: "video" },
      poster: { publicId: "buyahka-abrar/chapter-01/opening-video-poster", resourceType: "image" },
      caption: "Press play. Then begin.",
    },
    {
      type: "poem",
      title: "Kiraman Kataybein",
      translit: "The Noble Scribes",
      stanzas: [
        { lines: ["My flaws my own", "I'm carved from family stone", "Roots run deep like ancient trees", "I am trying to bank good deeds", "Kiraman Kataybein"] },
        { lines: ["Keeping track of every dip every slip", "I fall — get up, begin again", "fearing the final accounting"] },
        { lines: ["Huqq colossal as the cosmos — quiet as a prayer", "Rare as truth in a world of flair", "I cut through like a surgical tear —", "Precise — slicing through despair"] },
        { lines: ["I am trying to ascend", "Seize every second", "Reckon with my record", "Remembering & beckoning every blessing", "Prayer my only weapon"] },
        { lines: ["Purposeless pursuits make me nervous", "My dhikr verses — like nurses — healing what the hurt is", "Courageous as currents — burning like a furnace", "Certain in my purpose", "Underneath the surface, Huqq is workin"] },
        { lines: ["Qaram un Kataybein — catching it all on film", "Every whim, every hymn, every sin", "But still therein remains a flickering", "Dim light I carry within", "Yā Allah, shine light on these dreams that dimmed"] },
      ],
    },
    {
      type: "prose",
      lines: [
        { kind: "opener", text: "The angels keep the record. Kiraman Kataybein. One on the right, one on the left, writing it all down. Every dip, every slip. The Quran says they sit with you whether you notice them or not. I have noticed them my whole life. I was born into a house that already knew their names." },
        { kind: "drop-cap", text: "Sargodha, Pakistan. November 8, 1971. The third of four children. Two older brothers — Basit, Assad. A sister coming thirteen months later — Saima. A father who did not yet know he would move us all to America. A mother who did not yet know how much of her would be needed to hold the move together. The third child arrives quiet into a country at war with itself again. I would not remember any of this. But the angels would." },
        { kind: "plain", text: "This chapter is about the house that made me. Before Hina. Before the wedding I refused to attend. Before any of what comes next. Just the house — its two sources of weather, my father and my mother — and what they each handed me without ever sitting me down to explain." },
      ],
    },
    {
      type: "pullquote",
      lines: ["Crept quiet like tsunamis,", "raising the ships of the entire community."],
      src: "A Father's Footprints · on Ikram",
    },
    { type: "sectionCard", roman: "I", heading: "My Mother", lede: "A firecracker. A pioneer. A double-edged sword." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "My mother was overall not an easy person to deal with. Most of my life, my stances were in large part against her, causing friction in many relationships and people's lives." },
        { kind: "plain", text: "On one hand she was extremely hardworking, giving, caring, open hearted, courageous, supportive — had a love for Islam, Allah(swt) and our beloved Prophet, and thereby the Muslim community. So much more should and inshaAllah will be said on these wonderful, positive-energy traits my mother possessed. She adored her family and kids. And she is a humongous factor in who we are and became — and who my father was." },
        { kind: "plain", text: "On the other hand, my mother was controlling, spiteful, and wanted to contain, direct, manipulate, and influence her circles. She was a very strong personality." },
        { kind: "plain", text: "She was far ahead of her contemporaries in terms of thinking and understanding even though she was not formally educated. She was and is a very positive influence in who I am, and I am lucky and blessed to have such a woman for a mother. However, I cannot deny that much of the toxicity in the environment around me was in large part due to her vision and desires for how and what should be." },
        { kind: "plain", text: "Those with strong personalities are usually a double-edged sword." },
        { kind: "plain", text: "My mother was fierce. A protector. A driving force. An engine. She had a fire in her belly unlike any of her contemporaries. Sharp intellect, sharp senses, and a sixth sense about everything. This is at a time, and in a male-dominated world. She did not have a passive bone in her body. If a person is going to swim upstream, and against the grain — this is what it takes. She and we were blessed to have such a force close to us. My own intensity and much of my siblings' intensity can be attributed directly back to her." },
      ],
    },
    {
      type: "pullquote",
      lines: ["She was a pioneer", "in breaking out of the bad cultural norms,", "while holding on to many of the good ones."],
      src: "on his mother",
    },
    {
      type: "duaCard",
      label: "A du'a · for what was inherited",
      arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ",
      translit: "Rabbi awzi'nī an ashkura ni'mataka allatī an'amta 'alayya wa 'alā wālidayya.",
      meaning: "My Lord, enable me to be grateful for Your favor that You have bestowed upon me and upon my parents.",
      gloss: "Surah Al-Naml 27:19. The du'a Sulaiman (as) made when he understood the speech of the ant. The boy who would later read this book began praying it before he could write his own name. He had been bestowed with two parents who, with all their weather, were his first proof that goodness existed.",
    },
    {
      type: "asideCard",
      label: "A Beginning · January 1, 2022",
      heading: "Justified Belief versus Opinion",
      paragraphs: [
        "All the angels are gathered up. Adam is introduced to them. Iblis is amongst the angels. God shares with the gathering some thoughts. Iblis has his own opinion.",
        "All the angels took and processed the thoughts, information shared, and responded, interacted accordingly. Iblis processed and did the same.",
        "You have a beginning — but from there you are eternal. You will never cease to exist. Live like that. Live your life knowing you are eternal. Those that know this live a little differently. Love a little differently. The things they love are a little different.",
      ],
    },
    { type: "sectionCard", roman: "II", heading: "My Father, and the House", lede: "The first man in our family line to attend college. He did not narrate his reasons out loud — he just packed." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "My father was Muhammad Ikram Koshul. Born October 5, 1935, in Jalandhar, before there was a Pakistan. His own father — my grandfather — was Chaudary Daulat Khan, who watched much of his family killed during Partition and walked the survivors across the new border in 1947 when my father was eleven, twelve. The first in our family line to attend college. A veterinarian by training. The kind of man who looked out for his extended family and his community as a default setting, the way other men breathe. He did not spend money on himself." },
        { kind: "plain", text: "He brought us to America in 1976 because his work brought us, and because Allah's plan brought us, and he did not narrate either reason out loud — he just packed." },
        { kind: "plain", text: "My mother was Shagufta. Eight or nine years younger than my father. A firecracker. A seamstress with no formal training who could put a meal on the table for ten people from scratch on a moment's notice while running three other things at the same time. Hospitality was her religion's outward shape — feeding people, hosting people, dressing well, designing the room. The sharp tongue that comes with all of that, used to keep people in line. The big heart underneath that meant the line was drawn around them, not against them." },
        { kind: "plain", text: "The house in New Jersey held both of them. My father's quiet. My mother's weather. And in the quiet between the weather, on a shelf, was a book called Bahishti Zewar — the manual the cultural revisionists used to teach Muslim women of the Indian subcontinent who they were supposed to be. I will not write its full sentence here yet. That belongs to the next chapter. But the book was on the shelf. And at ten or eleven, I looked up." },
      ],
    },
    { type: "pullquote", lines: ["Inshallah, from his progeny", "will come the new Salahudeen.", "We say ameen."], src: "on his father · Ikram-portrait fragment" },
    { type: "pullquote", lines: ["Have you ever rolled with Huqq?", "Have you ever strolled with Huqq?", "If you have, stand up and say so."], src: "on his father" },
    { type: "sectionCard", roman: "III", heading: "A Note on Time", lede: "The same Hijri date for two children, on the day Allah sent down the Qur'an." },
    {
      type: "artifactCard",
      label: "Artifact · From Hina's Hand",
      heading: "A Hijri Ledger, in Hina's Handwriting",
      imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811245/buyahka-abrar/drive-docs/1DUmmXMU9ZFTUety4wpiM3yucLRI85yva.jpg",
      alt: "Hina's handwritten Islamic Birthdays ledger, blue pen on lined notebook paper.",
      caption: "Hina kept this single sheet her whole life. Hina: Sunday, January 1, 1967 — Ramadan 19, 1386. Abrar: Monday, November 8, 1971 — Ramadan 19, 1391. The Islamic lunar calendar depends on moon sighting; throughout this book, the family's shared anchor is given as Ramadan 20.",
    },
    { type: "sectionCard", roman: "IV", heading: "A Gift, in Ramadan of 1981", lede: "A crystal heart pendant on a gold chain. The gift came first." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "In Ramadan of 1402 AH, in the summer of 1981, a nine-year-old kid gives a fourteen-year-old young lady a crystal heart pendant on a gold chain." },
        { kind: "plain", text: "I do not, at nine, understand what I am doing. I understand only that this person is a person, and that there is a gift I have, and that it is hers. The pendant will travel. It will travel to South Carolina with her in 1984 inside a marriage that should never have happened, and it will return to New Jersey at the end of 1986 when that marriage falls apart. She will wear it daily, every day, after she returns. The pendant will break in two pieces in 2018 — one year before she passes. One half remains. I will write about that in its own chapter, much later in this book." },
        { kind: "plain", text: "What I want noted here, on this page, in this chapter: the gift is given. At nine. Before any of it. Before the wedding I refused. Before the marriage we built. Before any of the rest." },
      ],
    },
    {
      type: "fpImage",
      eyebrow: "Ramadan 1402 · Summer 1981",
      image: { publicId: "buyahka-abrar/chapter-01/crystal-heart", resourceType: "image" },
      alt: "The crystal heart pendant, given to Hina in Ramadan 1402 AH (Summer 1981), age 14, by Ahmad, age 9",
      caption: "The crystal heart pendant. Given to her at fourteen by a boy who was nine. The first object of the marriage, given before either of them knew it would be a marriage.",
    },
    {
      type: "prose",
      lines: [
        { kind: "plain", text: "By 1982, the friction between the two mothers had begun — Shagufta and Nusrat, the two women running the two houses. The fathers stayed brothers the way they had been on the soccer field in Jalandhar. The mothers were a different weather. Nobody named the friction then. The gift had already been given." },
      ],
    },
    { type: "ornament" },
    { type: "prose", lines: [{ kind: "center-italic", text: "The gift came first." }] },
    {
      type: "pullquote",
      lines: [
        "Since '71 he has been on the run", "trying to find me, to blind me", "with his demonic army", "he can't harm me", "",
        "I have been studying this science", "it's the non-conformist", "trying to build this alliance", "",
        "Look into my eyes", "try and break these ties", "that which bind me to the Throne", "c'mon let your missile zone in", "this'll just be a test", "till I, my progeny or the sun rises in the West.",
      ],
      src: "on his father",
    },
    {
      type: "pullquote",
      lines: ["He been on the run tryin to find us,", "to blind us with his demonic stuff —", "he can't harm us.", "Like the sun, we got our own back."],
      src: "on his father · final fragment",
    },
    { type: "sectionCard", roman: "V", heading: "A Scrap of Paper", lede: "February 14, 1983. She kept it for thirty-six years." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "Hina kept a scrap of paper her whole life. On it, in handwriting, were three short verses — Surah Al-Asr, the chapter of the Qur'an about time, about loss, about the people who do good and remind one another to be patient. The scrap is signed at the bottom:" },
        { kind: "center-italic", text: "— Abrar Koshul, 2/14/83 —" },
        { kind: "plain", text: "I did not send it. I have learned, much later in life and in this work, that I did not send it. She got it from somewhere. I do not know how, after all these years, the scrap with my name on it ended up in her hands. I know only that she kept it. That it was in her things when she died. That whatever the wiring of that summer was — the gift, the gathering at the picnic, the wedding to follow — somewhere on a shelf in someone's house, my eleven-year-old hand had written her name on a piece of the Qur'an, and signed it Abrar." },
        { kind: "plain", text: "Five months later, on July 17, 1983, the community would gather for an Eid picnic at Ringwood Manor. Hina, age sixteen, would be sitting in a Mustard Yellow Datsun B210 with her younger sister. Her fiancé would drop a cricket bat three hundred yards away and run toward the parking lot. What happens next belongs to the next chapter." },
        { kind: "plain", text: "The scrap of paper sat on a shelf for thirty-six years. The angels kept the record." },
      ],
    },
    {
      type: "artifactCard",
      label: "Artifact · Bridge to Chapter Two",
      heading: "Surah Al-Asr, 2/14/83",
      imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811309/buyahka-abrar/drive-docs/1WcBgT2c9JBmIl2qWiCLLX9sUCtdswY-Z.png",
      alt: "Surah Al-Asr written out in English transliteration and Arabic, signed 'Abrar Koshul 2/14/83'.",
      caption: "Three verses of Surah Al-Asr — the chapter on time, on loss, on those who do good and remind one another to truth and patience. English translation in one hand, Arabic in another, signed at the bottom: Abrar Koshul, 2/14/83. Hina kept it among her things until her death in 2019.",
    },
    { type: "chapterEnd", nextTitle: "Chapter Two — The First Marriage, 1983" },
  ],
};

export default chapter01;
