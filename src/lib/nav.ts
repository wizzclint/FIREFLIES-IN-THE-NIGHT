export type NavLink = {
  label: string;
  href: string;
};

// Top-level navigation only. The Buyahka & Abrar memoir intentionally lives
// nested at /sitting-with-buyahka/buyahka-and-abrar and must never be added
// here — it is surfaced instead via featured cards on the homepage and on
// /sitting-with-buyahka.
export const navLinks: NavLink[] = [
  { label: "In Search of Beauty", href: "/in-search-of-beauty" },
  { label: "Sitting with Buyahka", href: "/sitting-with-buyahka" },
  { label: "Community", href: "/community" },
  { label: "Recommended", href: "/recommended" },
  { label: "About", href: "/about" },
];
