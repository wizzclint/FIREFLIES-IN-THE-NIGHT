import type { MemoirChapterContent } from "@/lib/memoirBlocks";

// Transcribed verbatim from leg/chapter_06.html (the package Ahmad approved).
const FOLDER = "buyahka-abrar/chapter-06";
const img = (n: string) => ({ publicId: `${FOLDER}/${n}`, resourceType: "image" as const });
const vid = (n: string) => ({ publicId: `${FOLDER}/${n}`, resourceType: "video" as const });

const chapter06: MemoirChapterContent = {
  number: 6,
  slug: "chapter-6",
  title: "September's Children",
  soundtrack: {
    name: "Chapter 6 — Complexity",
    tracks: [
      { media: vid("04_audio"), title: "George Michael — Careless Whisper" },
      { media: vid("05_audio"), title: "Culture Club — Do You Really Want to Hurt Me" },
    ],
  },
  blocks: [
    {
      type: "hero",
      book: "Buyahka and Abrar",
      chLabel: "Chapter Six",
      title: "September's Children",
      em: "2001 — 2002 — the years that followed",
      subtitle: "A flower shop building bought and a store moved one and a half blocks down Teaneck Road in early September 2001. The towers fell on the eleventh. A franchise agreement signed the following spring. The Muslim community in America had been on a quiet rise before that morning. Then everything changed.",
      meta: "Part II — Building",
    },
    {
      type: "poem",
      title: "A Way of Remembering",
      translit: "In Hina's words · December 7, 2015",
      stanzas: [
        { lines: ["Everyone likes to remember the past", "as they feel it."] },
        { lines: ["I pray to remember the past as it was."] },
      ],
    },
    {
      type: "prose",
      lines: [
        { kind: "opener", text: "This chapter is the chapter where the country we lived in changed, and the life we had been making inside that country had to keep being made anyway. It is also the chapter where two of the people most central to that life — Hina's father and Hina's mother — passed away within three years of each other, in the same stretch when the businesses were multiplying and the children were growing up. Several things were true at once." },
        { kind: "drop-cap", text: "In the late summer of 2001 I bought the building the Teaneck flower shop sat in. The first week of September 2001 we moved the store from 1372 to 1324 Teaneck Road, one and a half blocks down. The new store opened on Teaneck Road days before the towers fell. I was twenty-nine years old. I was a small business owner in the blue-collar end of the world. The flower business. Two flower shops by then — the one on Teaneck Road and a second in Elmwood Park." },
        { kind: "plain", text: "In the spring of 2002, Assad and I drove up to Connecticut to meet with Tariq Farid. Tariq was a florist, a software guy, a small business man, who along with his brother Kamran had started a small company called Edible Arrangements. They had built the first store in East Haven in 1999. By 2002 they were beginning to franchise. I signed the franchise agreement that year. The first Edible Arrangements store would open later in 2002, at 350 Main Street in Hackensack." },
        { kind: "plain", text: "I read the franchise documents at the kitchen table. Hina sat across from me. Moaaz was eleven. Shahbaaz was nine. Zanab was six. The children had been home-schooled by Hina for four or five years by then. That was a thing Hina had decided and that I had supported. She was a mother first in those years, and the mothering was where her time and her care went. The flower shop was a place she had built and still cared about, but the heart of her days was the kids — teaching them, raising them, being with them. The Edible Arrangements project was mine. The build-out, the lease, the operations would be my work, not hers. I sat at the kitchen table that night and told her what the agreement said, and asked her what she thought." },
        { kind: "plain", text: "What Hina said, sitting at that table, was: do it." },
        { kind: "plain", text: "I signed the franchise agreement. The Hackensack location was identified. The build-out finished that year. All of that came after September 11. The 9/11 morning had already happened. The country we were signing papers inside was already a different country." },
      ],
    },
    {
      type: "duaCard",
      label: "A Du'a — Surah al-Anfal 8:62",
      arabic: "وَإِن يُرِيدُوا أَن يَخْدَعُوكَ فَإِنَّ حَسْبَكَ اللَّهُ",
      translit: "Wa in yureedu an yakhda'ooka fa-inna hasbakallah.",
      meaning: "\"And if they intend to deceive you — then sufficient for you is Allah.\"",
      gloss: "A verse for the man who is signing papers in a country whose terms toward him are about to change. I did not yet know in the summer of 2001 that the country was going to change. The verse was already in the world, waiting. Allah was sufficient before September. Allah was sufficient after.",
    },
    { type: "sectionCard", roman: "I", heading: "September Eleven", lede: "Right before that morning, the Muslim community in America had been on a quiet rise. We were assimilating into the parts of America that allowed it. We were holding our own in the parts that mattered most — our prayers, our families, our children, our names. Then the towers fell, and the country changed." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "In the late summer of 2001, the Muslim community in America was on a quiet rise. The masjid at Dar ul Islah, which my father and Khalid Beg and Masoom Jaleel and the other founding families had built out of a garage on Copley Avenue twenty-five years earlier, had grown into a real community. Children of immigrants were in high schools and colleges. Some of us were starting businesses. Some of us were becoming doctors and engineers. The country was making room for us in ways it had not in the 1970s. There was a feeling in those years, in our community, that we belonged here. That we were Americans, and Muslims, and that the two things were not in contradiction." },
        { kind: "plain", text: "September 11 did not end that feeling all at once. But it changed it. It changed the tone of the country toward us. It changed the way our names sounded when other people read them. It changed what it meant to be a Muslim business owner in Bergen County. It changed what it meant to be a Muslim child in a public school. It changed how the country looked at our community, and it changed how our community looked at the country." },
        { kind: "plain", text: "The flower shop had just moved one and a half blocks down Teaneck Road. The new space was open. The franchise agreement with Edible Arrangements was still ahead of us — it would be signed the following spring. All of the work continued in the days and weeks after the eleventh. None of it stopped. But the country it was happening inside had changed. The book will come back to what that change meant. This chapter is laying down the marker." },
      ],
    },
    { type: "sectionCard", roman: "II", heading: "2002 — 350 Main Street", lede: "The first Edible Arrangements store opened in Hackensack, on Main Street, in 2002. The country had changed. The work continued anyway." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "The first Edible Arrangements store opened at 350 Main Street in Hackensack in 2002. I do not have a clean memory of the opening day. I have memories of the build — the refrigeration, the counters, the signage. I have memories of the early customers, who were mostly people from the neighborhood and people who had been sent by other people in the neighborhood. The product was new in Bergen County in 2002. Cut fruit shaped to look like flowers. Strawberries dipped in chocolate. The kind of thing people sent to each other when they were not sure what else to send." },
        { kind: "plain", text: "What I remember more clearly than the opening day is the feeling of working through that year and the years after. The country was at war by then. Afghanistan first, then Iraq. The color-coded threat levels appeared on the news. By 2001 our family was mostly out of Dar ul Islah. Khalid Beg and Masoom Jaleel and others were working on a new community, Nida ul-Islam, which would become the masjid Hina would be washed in eighteen years later. The older men had set the pattern in the 1970s and 1980s — modestly, with their own money, in a way that did not depend on outside funding that could later be questioned. Carried forward into the new community, that pattern turned out to be what let us keep functioning without becoming targets. Quietly was the right way to have built. It was also the right way to keep building." },
        { kind: "plain", text: "Inside our house, the children kept growing. Moaaz finished his home-school years and the boys eventually transitioned into more formal schooling for parts of their teen years. Shahbaaz did the same, two years behind. Zanab, the youngest, grew through the early grades while her brothers moved into their teens. The dinner table got louder. The house felt smaller. The flower shop in its new building on Teaneck Road kept running. The Edible Arrangements store in Hackensack kept running. The new community at Nida ul-Islam kept being built. The country was at war. The marriage was being made." },
      ],
    },
    {
      type: "duaCard",
      label: "A Du'a — Rabbi yassir wa la tuassir",
      arabic: "رَبِّ يَسِّرْ وَلَا تُعَسِّرْ، رَبِّ تَمِّمْ بِالْخَيْرِ",
      translit: "Rabbi yassir wa la tuassir, rabbi tammim bil-khayr.",
      meaning: "\"My Lord, make it easy and do not make it difficult; complete it with goodness.\"",
      gloss: "The du'a I said before every store opening for the next twenty years. Before every lease signing. Before every loan paper. Before every conversation with a contractor or a landlord or a lender. I did not always say it out loud. Sometimes I said it under my breath in the car. Sometimes I said it standing in front of a refrigeration unit at four in the morning. Every store opened with this du'a in my mouth. Allah eased the easy ones. Allah taught me through the difficult ones. The completing in goodness is still being completed.",
    },
    { type: "sectionCard", roman: "III", heading: "The Years That Followed", lede: "More stores. More work. A country slowly recalibrating after September. A marriage still being made." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "The years between 2002 and the middle of the decade were the years of repetition. From the Hackensack store onward, the work was the same work, repeated: find a location, sign a lease, build out, open, run. Find a location, sign a lease, build out, open, run. The stores grew, one at a time. The names of the towns those stores were in are kept for a later chapter, when the closings begin. For now, what matters is that the work was happening the way it always happens for a small business owner — on top of everything else, by the same set of two pairs of hands, every day, for years on end." },
        { kind: "plain", text: "In March 2003, Khalid Beg passed away. Hina's father. The PhD research scientist who had chosen to become a high school teacher in the Bronx. The man who had officiated my nikah to Hina in his own living room in 1989 with a mehr of one thousand dollars. The first imam of Dar ul Islah. The father-figure not just for our family but for two generations of our community. Uncle Beg meant everything to everyone. When he passed, the community had lost the person it had always gone to for the suras and the knowledge it could not get from anywhere else. Hina had lost her father. Our children had lost their nana. I had lost the man who had been my father-in-law since I was eighteen years old, the man who had once written me out of his daughter's life and who, fourteen years before he died, had walked me into it instead." },
        { kind: "plain", text: "Three years later, in 2006, Auntie Beg passed. Nusrat Beg. Hina's mother. The woman whose living room had hosted the nikah. The woman who had carried gallons of milk up four flights of stairs to her daughter when her daughter's young husband could not yet be reached. The woman who had watched our three children on Mondays and on holidays for ten years so that Hina could come to the flower shop. The woman who had locked the door behind us on November 10, 1999, and made it impossible for us to drive back. She had been the daily presence in our marriage. Three years after she lost her husband, she went." },
        { kind: "plain", text: "Those were the years. The stores kept opening. The country kept being at war. The kids kept growing. Hina ran the house and the shop. I ran the build-outs and the leases and the long drives. We were busy with life the way every family with three children and a small business is busy with life. There were moments when I came up short. There were moments when she did. There were also plenty of stretches where we did good work together. We did not measure ourselves against an idea of what a marriage was supposed to look like; we measured ourselves against the day in front of us and the next day after that. The losses were the milestones. The repetition was the rest." },
      ],
    },
    { type: "sectionCard", roman: "IV", heading: "December 7, 2015", lede: "Twenty-five years after Moaaz was born, Hina sat down at her tablet and wrote her husband a letter. This is the one I want to close the chapter with." },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "I have already given you the opening epigraph of this chapter, which is the first sentence of the letter Hina wrote me on December 7, 2015. I want to give you the rest of it now, because it is the way I want this chapter to end. Hina is in her own voice here. The chapter has been mine for too long." },
        { kind: "plain", text: "December 7, 2015 was Moaaz's twenty-fifth birthday. Twenty-five years to the day after he was born at 10:56 a.m. on December 7, 1990, in a hospital in Englewood, with Dr. James Fox attending and Hina lying in the bed and me — nineteen years old and married to her for thirteen months — trying to figure out how to be present for a thing I did not understand. Hina remembered all of this in 2015. She wrote it down. She sent it to me. Here is what she wrote." },
      ],
    },
    {
      type: "essayDrop",
      label: "Artifact · December 7, 2015 · 3:45 PM",
      title: "Hina to Ahmad",
      byline: "on Moaaz's twenty-fifth birthday",
      paragraphs: [
        "As salaam o alaikum:",
        "Everyone likes to remember the past as they feel it. I pray to remember the past as it was.",
        "I found myself reminiscing of 25 years ago on this date.",
        "Over the years I have watched comedians and television shows and their narrative or dramatization of child birthing. But my personal memory is nothing like that.",
        "Before I begin, even though our moods are not in synch since Halloween; in no way, shape or form does this change the realities of yesterday.",
        "Having said that I would like to thank you —",
        "1) for the pleasure associated with and what led to ...",
        "2) for the chance to raise my rank to motherhood",
        "3) for being a wonderful spouse/partner — when it came to helping in cleaning ooltees; rocking him to sleep on the rocking chair; staying up with me when needed; for being patient when needed; and all that my heart appreciates you for, that most (desi) males do not do —",
        "4) for being a caring, loving, concerned father [even though sometimes I may disagree with ... but nonetheless I think I know you]",
        "Before I go ahead, this is not a trick (nor is it advice any form) — I just wanted to reminisce with my husband, and this is the only way I know how.",
        "25 years ago to date — I lay in the hospital and the first thing that came to mind when I was asked if I needed anything was: Abrar",
        "I recalled the anger and sadness to know you were going to go to school, when I wanted you near.",
        "I recalled the helplessness you may have felt, as you tried to ease my pains ... the only way you knew (by offering to order pizza)",
        "I recalled your logging the times of contractions, and handing the task to Amina",
        "I recalled the joy and relief when I saw your face, after you came back from school and stopped in the hospital room (but sensing your unease I let you go and had Amee come)",
        "I recalled you saying: If anything were to happen to me, that is not the last memory you wanted (thus giving me something...)",
        "I recalled being frustrated because they would not allow me to see nor hold my son.",
        "I recalled the thrill of actually meeting Moaaz in the company of his father. By the grace of God, he turned a couple into a family; through his entry our ranks were elevated (so were responsibilities...but that all came with the territory Alhumdolilah).",
        "The problem with reminiscing is they go on and on and on...so... at the end of all the memories: Our son has turned 25 and all the celebrations are towards wishing him a happy birthday. I wanted to take a moment and say thank you.",
        "was salaam",
        "— hina",
      ],
    },
    { type: "pullquote", lines: ["By the grace of God, he turned a couple", "into a family; through his entry", "our ranks were elevated."], src: "Hina · on Moaaz's twenty-fifth birthday" },
    {
      type: "prose",
      lines: [
        { kind: "drop-cap", text: "I read that letter when she sent it. The letter says even though our moods are not in synch since Halloween, which means we had been in one of our quiet stretches for about six weeks by the time she sat down to write it. I should be careful with the word fight. We did not have fights, Hina and I. Not the way other couples have fights. We had disagreements, and then we quieted down. That is what we did. Whatever one of us was going through, or whatever one of us was not understanding about the other — the normal things that little couples go through — we did not raise voices over them. We did not slam doors. We went quiet. We went quiet for a few days, sometimes a few weeks, sometimes longer. And then one of us would do something small — a cup of tea, a question about the kids, a letter — and the quiet would end, and we would start talking again." },
        { kind: "plain", text: "The letter is what ended the Halloween-to-December quiet of 2015. Hina sat down on a Monday afternoon at her tablet and wrote me four numbered thank-yous and a long paragraph of reminiscing, and that was her way of saying the quiet stretch was over for her. I did not respond as well as I should have. I do not remember now what I said back, or whether I said anything at all. I do remember that the letter has stayed with me ever since, and that the fourth thank-you — even though sometimes I may disagree with ... but nonetheless I think I know you — is a line I have read more than a hundred times since she died." },
        { kind: "plain", text: "What she was doing in that letter was the thing this whole book is trying to do. She was practicing the discipline of remembering the past as it was. Not as she felt it. As it was. Both things at once. The quiet from Halloween was real. The hospital room from twenty-five years earlier was also real. The man who had failed her in some way in 2015 was also the boy who had logged her contractions in 1990 and offered to order pizza because he did not know what else to do. Hina held all of it in the same letter. She named it. She thanked me for what was thank-able. She did not pretend the rest of it was not there." },
        { kind: "plain", text: "That is the witness register. I learned it from her. I am still learning it from her, seven years after she died, sitting at this screen, trying to write a chapter about the years between 2001 and 2015 without flattening any of it." },
        { kind: "plain", text: "The chapter that follows this one is going to be the chapter where the quiet stretches got harder. Hina's 2009 letter. Hina's 2014 letter. The years in which the marriage went through its first two formal crises. I do not want to write that chapter. I am going to write it anyway. The book does not work without it." },
        { kind: "plain", text: "But I want to leave this chapter where Hina left her letter. Twenty-five years after Moaaz was born. A couple turned into a family. Ranks elevated. A husband and wife who had gone quiet for six weeks, and then a letter in early December that did the work of remembering the past as it was." },
        { kind: "plain", text: "Alhumdolilah, she wrote. Alhumdolilah for all of it." },
        { kind: "plain", text: "Alhumdolilah from me too." },
      ],
    },
    {
      type: "artifactRow",
      rowLabel: "Her Hand, the Long Witness",
      heading: "Hina across the marriage years",
      intro: "She did not stop writing after the marriage to Abrar. The voice that had been formed before age 16 kept its discipline. Below: a small selection of her writing from inside the long household.",
      items: [
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811236/buyahka-abrar/drive-docs/1ceq97Ek89jsXUvq2_-e_Jw5ncdwQAbyK.jpg", alt: "My Dear Respected Elders, February 24, 1990", caption: "\"My Dear Respected Elders,\" February 24, 1990. Hina at 23, three months married to Abrar, presenting a Mi'raj speech to the Dar-ul-Islah community. Typed, polished, public-speaking voice. Religious confidence restored after what came before." },
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811215/buyahka-abrar/drive-docs/149zuwSO4OO1rKEnbLj9-Bmo2Z0nguS96.jpg", alt: "Realize / Realization, Hina's mature theological sermon-essay", caption: "\"Realize / Realization.\" A complete sermon-essay in Hina's hand. \"In a land where appearance carries weight, not essence... where lies are acceptable... where respect is given to another's success, not the individual.\" Closes on the shahada: \"Realization: of LA ILA HA ILLUL LA — there is none worthy of worship, of obedience except Allah.\"" },
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811234/buyahka-abrar/drive-docs/1brLYeyD9AfGQmPUpWJyTattlth5wCjE0.jpg", alt: "Hina teaching her children Islam, mother-voice draft", caption: "A draft for teaching the children Islam, in her hand. Mother-voice. Uses analogies with their own names: \"Same way I may send Zanab to tell you not to fight.\"" },
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811238/buyahka-abrar/drive-docs/1CmWFVSaI9WYD7nvaCtil2QjDxqbgFBnH.jpg", alt: "October 28, 2000 essay on Muslim community fragmentation", caption: "October 28, 2000. Hina at 33. A theological essay on Sunni-Shia-Ahmadiya fragmentation. \"There is NO compulsion in deen.\" A critique of Muslim \"self-deception\" sickness. The mature theological voice in writing." },
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811231/buyahka-abrar/drive-docs/1bBMfQZJ0GG_9Hzj-Sl6yaMLsC8dGRoEo.jpg", alt: "Ahmad's November 10, 1999 letter to his mother-in-law", caption: "Ahmad's letter to his mother-in-law Nusrat Beg. November 10, 1999. \"First night away in 10 years.\" The tenth-anniversary letter." },
        { imageSrc: "https://res.cloudinary.com/kh0ahdrd/image/upload/v1789811261/buyahka-abrar/drive-docs/1J30rYAExct_jnYw4cZhlhEbmbSR0n-8J.jpg", alt: "Hina's RESPECT poster, colored markers, hand-drawn", caption: "Hina's RESPECT poster. Hand-drawn in colored markers. Rules of adab radiating around a central blank space meant to read RESPECT. From the years she was teaching the children directly." },
      ],
    },
    {
      type: "artifactRow",
      rowLabel: "The House · The Children · The Years",
      heading: "Family continuity, 1991 onward",
      items: [
        { imageSrc: "https://drive.google.com/thumbnail?id=16-ca3_qeZSv7LV9UknfA0Atdmq97fJ9t&sz=w1200", alt: "Our family", caption: "Our family. The core five." },
        { imageSrc: "https://drive.google.com/thumbnail?id=11qSJqad_GrxcqWRRpj1mANL6s2UkA28K&sz=w1200", alt: "Moaaz, Zanab, Shahbaaz", caption: "Moaaz, Zanab, Shahbaaz. The three." },
        { imageSrc: "https://drive.google.com/thumbnail?id=1Ot3vrFMnvF0cWCXsXvVS3_CQgTO1FHas&sz=w1200", alt: "Family at Rockleigh Reception", caption: "A family celebration at Rockleigh." },
        { imageSrc: "https://drive.google.com/thumbnail?id=1hs0-lzhIzMv4EV6Sw02ZnQJlQ46MjpIa&sz=w1200", alt: "Hina and Ahmad in the park", caption: "Hina and Ahmad. In the park." },
        { imageSrc: "https://drive.google.com/thumbnail?id=1GXVNfuhCNQGdIr8WidvkJzIOm8TsQdrS&sz=w1200", alt: "Husband and wife", caption: "Husband and wife." },
        { imageSrc: "https://drive.google.com/thumbnail?id=1dSZSKayYfezdwAiQXRlsQzTZBA3xVfC-&sz=w1200", alt: "Ahmad with three kids", caption: "Ahmad with the three of them." },
      ],
    },
    { type: "chapterEnd", nextTitle: "Chapter Seven — The Pattern" },
    { type: "fpImage", eyebrow: "April 13, 1994 · Nana Abba", image: img("01_image"), alt: "Khalid Beg with his grandson, reading the Real Estate section.", caption: "Khalid Beg with his grandson, reading the Real Estate section. The carrier with the next generation." },
    { type: "fpImage", eyebrow: "October 4, 2003 · Hina and Zanab", image: img("02_image"), alt: "Mother and daughter, in pencil, drawn from a photograph.", caption: "Mother and daughter, in pencil. Drawn from a photograph. The line of the face passes forward." },
    { type: "fpImage", eyebrow: "The three children · Zanab, Moaaz, Shahbaaz", image: img("03_image"), alt: "Three children on the kiddie firetruck ride.", caption: "Three children on the kiddie firetruck ride. The years that built them." },
  ],
};

export default chapter06;
