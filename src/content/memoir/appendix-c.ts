import type { MemoirChapterContent } from "@/lib/memoirBlocks";

// Transcribed verbatim from leg/appendix_C.html (the package Ahmad approved).
// The chronological "Family Precious" visual archive — 42 photographs, 14 video clips.
const FOLDER = "buyahka-abrar/appendix-c";
const img = (n: string) => ({ publicId: `${FOLDER}/${n}`, resourceType: "image" as const });
const vid = (n: string) => ({ publicId: `${FOLDER}/${n}`, resourceType: "video" as const });

const appendixC: MemoirChapterContent = {
  number: 14,
  slug: "appendix-c",
  title: "Family Precious",
  blocks: [
    {
      type: "hero",
      book: "Buyahka and Abrar",
      chLabel: "Appendix C",
      title: "Family Precious",
      em: "The visual archive · 42 photographs · 14 video clips",
      subtitle: "Every item below is part of the book. Many are also placed in chapters. All live here in this archive, organized chronologically — from the elders of the 1970s to the next generation today.",
      meta: "",
    },

    { type: "sectionCard", roman: "", heading: "1970s · Khan and Beg Elders", lede: "" },
    { type: "fpImage", eyebrow: "1970s", image: img("01_image"), alt: "1970s khalid beg with farooq mirza", caption: "1970s khalid beg with farooq mirza" },

    { type: "sectionCard", roman: "", heading: "1980s · The Beg Parents", lede: "" },
    { type: "fpImage", eyebrow: "1980s", image: img("02_image"), alt: "1980s khalid beg and auntie beg seated", caption: "1980s khalid beg and auntie beg seated" },

    { type: "sectionCard", roman: "", heading: "Late 1980s · Hina, Young", lede: "" },
    { type: "fpImage", eyebrow: "1988", image: img("03_image"), alt: "1988 hina close up portrait", caption: "1988 hina close up portrait" },

    { type: "sectionCard", roman: "", heading: "November 10, 1989 · The Nikah", lede: "" },
    { type: "fpImage", eyebrow: "Nov 10, 1989", image: img("04_image"), alt: "1989 11 10 nikah portrait with both fathers", caption: "1989 11 10 nikah portrait with both fathers" },
    { type: "fpVideo", eyebrow: "Nov 10, 1989", video: vid("05_video"), poster: img("06_image"), caption: "1989 11 10 hina nikah" },
    { type: "fpVideo", eyebrow: "Nov 10, 1989", video: vid("07_video"), poster: img("08_image"), caption: "1989 11 10 hina nikah shy" },
    { type: "fpVideo", eyebrow: "Nov 10, 1989", video: vid("09_video"), poster: img("10_image"), caption: "1989 11 10 nikah clip car" },
    { type: "fpVideo", eyebrow: "Nov 10 or 12, 1989", video: vid("11_video"), poster: img("12_image"), caption: "1989 11 10 or 12 hina closeup indoors" },

    { type: "sectionCard", roman: "", heading: "November 11, 1989 · The Morning After", lede: "" },
    { type: "fpVideo", eyebrow: "Nov 11, 1989", video: vid("13_video"), poster: img("14_image"), caption: "1989 11 11 nikah next day outside closeup" },

    { type: "sectionCard", roman: "", heading: "November 12, 1989 · The Walima", lede: "" },
    { type: "fpImage", eyebrow: "Nov 12, 1989", image: img("15_image"), alt: "1989 11 12 hina with khalid beg alt", caption: "1989 11 12 hina with khalid beg alt" },
    { type: "fpImage", eyebrow: "Nov 12, 1989", image: img("16_image"), alt: "1989 11 12 hina with khalid beg her father", caption: "1989 11 12 hina with khalid beg her father" },
    { type: "fpImage", eyebrow: "Nov 12, 1989", image: img("16_image"), alt: "1989 11 12 valima day ahmad and hina", caption: "1989 11 12 valima day ahmad and hina" },
    { type: "fpVideo", eyebrow: "Nov 12, 1989", video: vid("17_video"), poster: img("18_image"), caption: "1989 11 12 valima day walking outdoors" },
    { type: "fpVideo", eyebrow: "Nov 12, 1989", video: vid("19_video"), poster: img("20_image"), caption: "1989 11 12 walima cake cutting holding hands" },
    { type: "fpVideo", eyebrow: "Nov 12, 1989", video: vid("21_video"), poster: img("22_image"), caption: "1989 11 12 walima hina walking reception" },

    { type: "sectionCard", roman: "", heading: "1989 · The Honeymoon", lede: "" },
    { type: "fpImage", eyebrow: "1989 · Poconos", image: img("23_image"), alt: "1989 poconos honeymoon closeup", caption: "1989 poconos honeymoon closeup" },
    { type: "fpVideo", eyebrow: "1989", video: vid("24_video"), poster: img("25_image"), caption: "1989 hina closeup outdoors" },

    { type: "sectionCard", roman: "", heading: "1990s · The Building Years", lede: "" },
    { type: "fpImage", eyebrow: "1990s", image: img("26_image"), alt: "1990s ahmad and hina inside the flower shop", caption: "1990s ahmad and hina inside the flower shop" },
    { type: "fpImage", eyebrow: "1990s", image: img("27_image"), alt: "1990s hina with young moaaz", caption: "1990s hina with young moaaz" },
    { type: "fpImage", eyebrow: "1990s", image: img("28_image"), alt: "1990s hina with young moaaz vintage", caption: "1990s hina with young moaaz vintage" },
    { type: "fpImage", eyebrow: "1990s", image: img("29_image"), alt: "1990s i would be everything poem", caption: "1990s i would be everything poem" },
    { type: "fpImage", eyebrow: "1990s", image: img("30_image"), alt: "1990s zanab zik childhood portrait", caption: "1990s zanab zik childhood portrait" },

    { type: "sectionCard", roman: "", heading: "1994 · Khalid Beg with the Grandchildren", lede: "" },
    { type: "fpImage", eyebrow: "April 13, 1994", image: img("31_image"), alt: "1994 04 13 khalid beg with grandchild reading paper", caption: "1994 04 13 khalid beg with grandchild reading paper" },

    { type: "sectionCard", roman: "", heading: "2000s · The Growing Years", lede: "" },
    { type: "fpImage", eyebrow: "2000s", image: img("32_image"), alt: "2000s family on beach hina ahmad sons", caption: "2000s family on beach hina ahmad sons" },
    { type: "fpImage", eyebrow: "2000s", image: img("33_image"), alt: "2000s hina and ahmad on beach in sand", caption: "2000s hina and ahmad on beach in sand" },
    { type: "fpImage", eyebrow: "2000s", image: img("34_image"), alt: "2000s moaaz shahbaaz zanab kiddie firetruck ride", caption: "2000s moaaz shahbaaz zanab kiddie firetruck ride" },

    { type: "sectionCard", roman: "", heading: "2003 · The Pencil Sketch", lede: "" },
    { type: "fpImage", eyebrow: "October 4, 2003", image: img("35_image"), alt: "2003 10 04 pencil sketch hina and zanab", caption: "2003 10 04 pencil sketch hina and zanab" },

    { type: "sectionCard", roman: "", heading: "2007 · Family with Khalid Beg", lede: "" },
    { type: "fpImage", eyebrow: "January 2007", image: img("36_image"), alt: "2007 01 family with khalid beg", caption: "2007 01 family with khalid beg" },

    { type: "sectionCard", roman: "", heading: "2010s · The Conference Years", lede: "" },
    { type: "fpImage", eyebrow: "2010s", image: img("37_image"), alt: "2010s family at muhammad conference", caption: "2010s family at muhammad conference" },

    { type: "sectionCard", roman: "", heading: "2017 · Hina's 50th Birthday, Mecca", lede: "" },
    { type: "fpImage", eyebrow: "2017 · Mecca", image: img("38_image"), alt: "2017 mecca hina 50th with ahmad and zanab", caption: "2017 mecca hina 50th with ahmad and zanab" },
    { type: "fpImage", eyebrow: "2017 · Mecca", image: img("39_image"), alt: "2017 mecca kaaba close view", caption: "2017 mecca kaaba close view" },

    { type: "sectionCard", roman: "", heading: "April 2018 · Moaaz and Anna's Engagement", lede: "" },
    { type: "fpImage", eyebrow: "April 20, 2018", image: img("40_image"), alt: "2018 04 20 moaaz anna engagement ring hands", caption: "2018 04 20 moaaz anna engagement ring hands" },

    { type: "sectionCard", roman: "", heading: "November 2018 · The Last Big Event", lede: "" },
    { type: "fpImage", eyebrow: "November 24, 2018", image: img("41_image"), alt: "2018 11 24 family at wedding with hina", caption: "2018 11 24 family at wedding with hina" },

    { type: "sectionCard", roman: "", heading: "2018 · Moaaz's Wedding (the one Mom saw)", lede: "" },
    { type: "fpVideo", eyebrow: "2018", video: vid("42_video"), poster: img("43_image"), caption: "2018 moaaz wedding reception trailer" },

    { type: "sectionCard", roman: "", heading: "May 2019 · The Day. The Burial.", lede: "" },
    { type: "fpImage", eyebrow: "May 26, 2019", image: img("44_image"), alt: "2019 05 26 hina grave burial day", caption: "2019 05 26 hina grave burial day" },

    { type: "sectionCard", roman: "", heading: "August 2019 · The Memorial Keepsakes", lede: "" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("45_image"), alt: "2019 08 09 four gold etched bangles", caption: "2019 08 09 four gold etched bangles" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("46_image"), alt: "2019 08 09 memorial heart pendant with zanab face", caption: "2019 08 09 memorial heart pendant with zanab face" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("47_image"), alt: "2019 08 09 moms nightowls embroidered throw", caption: "2019 08 09 moms nightowls embroidered throw" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("48_image"), alt: "2019 08 09 pearl rhinestone triangle earrings", caption: "2019 08 09 pearl rhinestone triangle earrings" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("49_image"), alt: "2019 08 09 red flower stud earrings", caption: "2019 08 09 red flower stud earrings" },
    { type: "fpImage", eyebrow: "August 9, 2019", image: img("50_image"), alt: "2019 08 09 silver tassel necklace and earrings set", caption: "2019 08 09 silver tassel necklace and earrings set" },

    { type: "sectionCard", roman: "", heading: "In Memoriam · The Memorial Video", lede: "" },
    { type: "fpVideo", eyebrow: "2019", video: vid("51_video"), poster: img("52_image"), caption: "2019 hina memorial 5 minute video" },

    { type: "sectionCard", roman: "", heading: "2021 · The Aftermath", lede: "" },
    { type: "fpImage", eyebrow: "October 26, 2021", image: img("53_image"), alt: "2021 10 26 ahmad by suv in rain", caption: "2021 10 26 ahmad by suv in rain" },
    { type: "fpImage", eyebrow: "November 6, 2021", image: img("54_image"), alt: "2021 11 06 ahmad at fire pit burning papers", caption: "2021 11 06 ahmad at fire pit burning papers" },

    { type: "sectionCard", roman: "", heading: "2022 · Shahbaaz's Wedding (the one Mom missed)", lede: "" },
    { type: "fpVideo", eyebrow: "2022", video: vid("55_video"), poster: img("56_image"), caption: "2022 shahbaaz wedding reception trailer" },

    { type: "sectionCard", roman: "", heading: "The Heart · Across Time", lede: "" },
    { type: "fpImage", eyebrow: "Chapter 1", image: img("57_image"), alt: "ch01 heart origin", caption: "ch01 heart origin" },
    { type: "fpImage", eyebrow: "Chapter 8", image: img("58_image"), alt: "ch08 heart fracture", caption: "ch08 heart fracture" },
    { type: "fpImage", eyebrow: "Chapter 12", image: img("59_image"), alt: "ch12 heart relic", caption: "ch12 heart relic" },
    { type: "fpImage", eyebrow: "Recent", image: img("60_image"), alt: "recent heart pendant photo", caption: "recent heart pendant photo" },

    { type: "sectionCard", roman: "", heading: "The Next Generation", lede: "" },
    { type: "fpImage", eyebrow: "Recent", image: img("61_image"), alt: "recent ahmad with sons white vests", caption: "recent ahmad with sons white vests" },
    { type: "fpImage", eyebrow: "Recent", image: img("62_image"), alt: "recent grandchild in white turban", caption: "recent grandchild in white turban" },
    { type: "fpImage", eyebrow: "Recent", image: img("63_image"), alt: "recent granddaughter six months fabulous", caption: "recent granddaughter six months fabulous" },
    { type: "fpImage", eyebrow: "Recent", image: img("64_image"), alt: "recent moaaz and shahbaaz lifting ahmad", caption: "recent moaaz and shahbaaz lifting ahmad" },
    { type: "fpImage", eyebrow: "Recent", image: img("65_image"), alt: "recent shahbaaz and zuha lantern proposal", caption: "recent shahbaaz and zuha lantern proposal" },

    { type: "sectionCard", roman: "", heading: "Music · Tracks of the Book", lede: "" },
    { type: "fpVideo", eyebrow: "Soundtrack", video: vid("66_video"), poster: img("67_image"), caption: "bette midler the rose" },
    { type: "fpVideo", eyebrow: "Soundtrack", video: vid("68_video"), poster: img("69_image"), caption: "sami yusuf skyscapes" },

    { type: "chapterEnd", nextTitle: "End of Appendix C · Family Precious" },
  ],
};

export default appendixC;
