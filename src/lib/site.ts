export const SITE = {
  name: "Peace by Piece",
  tagline: "Piecing Together the Systemic Education Gap",
  email: "peacebypiece.or@gmail.com",
  socialHandle: "@peacebypiece.or",
  address: "3678 NW 123RD PL, Portland, OR",
  instagram: "https://www.instagram.com/peacebypiece.or",
  tiktok: "https://www.tiktok.com/@peacebypiece.or",
  mission:
    "Peace by Piece is a youth-led nonprofit fighting against stigma and for equity in educational systems by addressing the often-overlooked cultural, economic, and systemic barriers that shape student well-being.",
  levels: "We fight for our cause at three intersecting levels: systemic, educational, and direct impact.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Meet The Team", href: "/team" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

export const TEAM = [
  { name: "Yeda Song", role: "President" },
  { name: "Shriya Raghavendra", role: "Vice President" },
  { name: "Lisa Chien", role: "Vice President" },
  { name: "Iden Park", role: "Treasurer" },
  { name: "Anya Augustine", role: "Outreach Director" },
  { name: "Mihika Sathaye", role: "Volunteer Director" },
  { name: "Saba Attia", role: "Social Media Director" },
  { name: "Justice Singer", role: "Development Team" },
];

export const IMPACT_STATS = [
  { value: "50+", label: "High school volunteers" },
  { value: "8", label: "Executive board members" },
  { value: "$2K", label: "Fundraised from events" },
  { value: "8+", label: "Community events attended" },
  { value: "100+", label: "Bracelets made for children" },
  { value: "100+", label: "Cards for underprivileged youth" },
  { value: "50+", label: "Care packages to OHSU patients" },
  { value: "1000s", label: "People reached & educated" },
];

export const IMPACT_HIGHLIGHTS = [
  "Founded in June 2024 — over a year of youth-led action.",
  "Attended 8+ community events (farmers markets, bake sales), reaching thousands through brochures, flyers, and conversation.",
  "Partnered with Family Promise — raised $600–700 in school supplies and spent 5+ hours organizing the shelter where families collect them.",
  "Donated 50+ mental health care packages to OHSU patients.",
  "Supported by BSD Board Member Van Truong, now an advisor and consultant to our organization.",
  "In progress: an AI Mental Health Tool research paper with a university professor, a children's book on mental well-being, and elementary school projects across the BSD.",
];

export const PROBLEM =
  "Educational curricula are often created at the federal and state levels, resulting in them being both surface-level and not culturally sensitive to many students. In addition, educational support for low-income and at-risk students is often inaccessible because of time, fiscal, and stigmatizing barriers.";

export type EventItem = {
  title: string;
  date: string;
  status: "featured" | "upcoming" | "past";
  description?: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "Youth Lobby Day 2025",
    date: "February 16, 2026",
    status: "featured",
    description:
      "Join us in advocating at the Oregon State Capitol for youth policies! We have limited sign-ups currently — email peacebypiece.or@gmail.com if you are interested.",
  },
  {
    title: "Middle School Buddy System",
    date: "Upcoming",
    status: "upcoming",
    description: "Stay tuned for incoming updates!",
  },
  { title: "School Supply Drive", date: "September 15, 2025", status: "past" },
  { title: "Beaverton Youth Summit", date: "May 22, 2025", status: "past" },
  { title: "THPRD 5K Mental Health Fun Run", date: "May 1, 2025", status: "past" },
  { title: "OHSU Care Packages", date: "April 1, 2025", status: "past" },
  { title: "Bake Sale", date: "December 28, 2024", status: "past" },
  { title: "Beaverton Farmer's Market", date: "November 21, 2024", status: "past" },
];
