import { Cormorant_Garamond, EB_Garamond } from "next/font/google";

// Scoped to the cinematic memoir chapter pages only — the rest of the site
// keeps its own Playfair/Lora pairing from the root layout.
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
