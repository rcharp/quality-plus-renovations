export interface ServiceAreaData {
  slug: string;
  city: string;
  fullName: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  overview: string[];
  neighborhoods: string[];
  whyLocal: string[];
  mapQuery: string;
  faqs: { q: string; a: string }[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: "bradenton-fl",
    city: "Bradenton",
    fullName: "Bradenton, FL",
    metaTitle: "Carpentry & Renovations in Bradenton, FL | Quality Plus Renovations",
    metaDescription: "Family-owned finish carpentry, flooring, paint & drywall in Bradenton, FL. Owner on every job. Free quotes — call (941) 405-9695.",
    heroTagline: "Bradenton's Trusted Renovation Specialists.",
    overview: [
      "Bradenton is our home base. From historic Cortez bungalows to brand-new builds out near Lakewood Ranch, we've worked on just about every style of home in the area.",
      "Quality Plus Renovations is owned and operated by Yevgeniy Turko, who lives and works locally. When you hire us, the owner is on your job site — not a sub, not a runner.",
    ],
    neighborhoods: [
      "West Bradenton",
      "East Bradenton",
      "Cortez",
      "Palma Sola",
      "Whitfield",
      "Bayshore Gardens",
      "Riverview Boulevard area",
      "Manatee River corridor",
    ],
    whyLocal: [
      "Local owner on every project",
      "Familiar with Bradenton building stock and HOA rules",
      "Quick response on quotes and scheduling",
      "Trusted by Bradenton homeowners since day one",
    ],
    mapQuery: "Bradenton, FL",
    faqs: [
      { q: "Do you serve all of Bradenton?", a: "Yes — from West Bradenton near the river out east toward Lakewood Ranch and everywhere in between." },
      { q: "How fast can you quote a Bradenton project?", a: "We typically have an in-home quote scheduled within 2–4 business days." },
      { q: "Are you familiar with Bradenton HOAs?", a: "Yes — we work with HOA-restricted communities regularly and provide product specs and color samples for approval." },
    ],
  },
  {
    slug: "sarasota-fl",
    city: "Sarasota",
    fullName: "Sarasota, FL",
    metaTitle: "Carpentry & Renovations in Sarasota, FL | Quality Plus Renovations",
    metaDescription: "Finish carpentry, custom built-ins, flooring, paint & drywall in Sarasota, FL. Free quotes from a family-owned shop. Call (941) 405-9695.",
    heroTagline: "Premium Renovations for Sarasota Homeowners.",
    overview: [
      "Sarasota homeowners expect a higher standard — and that's exactly what we deliver. From beachfront condos on Lido and Siesta to historic homes downtown and in West of Trail neighborhoods, we bring the same craftsmanship to every project.",
      "Whether you're updating a guest bath, adding built-ins to a great room, or refreshing the trim throughout the house — Quality Plus Renovations brings the detail-driven approach Sarasota homes deserve.",
    ],
    neighborhoods: [
      "Downtown Sarasota",
      "West of Trail",
      "Siesta Key",
      "Lido Key",
      "Lakewood Ranch (Sarasota County)",
      "Palmer Ranch",
      "Gulf Gate",
      "Bird Key",
    ],
    whyLocal: [
      "Experienced with high-end Sarasota finishes",
      "Condo-association project experience",
      "Beach-area homes — moisture and salt-tolerant material know-how",
      "Owner on every job, no subcontracting",
    ],
    mapQuery: "Sarasota, FL",
    faqs: [
      { q: "Do you work on Siesta Key and Lido Key?", a: "Yes — we work all over Sarasota County including the keys. We're familiar with the special considerations for coastal homes." },
      { q: "Can you handle condo association requirements?", a: "Yes — we provide COIs, work hour compliance, and clean job sites that meet condo board standards." },
      { q: "Do you serve downtown Sarasota?", a: "Absolutely — from condos to historic homes in West of Trail, we cover all of the downtown area." },
    ],
  },
  {
    slug: "lakewood-ranch-fl",
    city: "Lakewood Ranch",
    fullName: "Lakewood Ranch, FL",
    metaTitle: "Carpentry & Renovations in Lakewood Ranch, FL | Quality Plus Renovations",
    metaDescription: "Custom finish carpentry, built-ins & flooring in Lakewood Ranch, FL. Premium craftsmanship from a family-owned shop. Call (941) 405-9695.",
    heroTagline: "Custom Craftsmanship for Lakewood Ranch.",
    overview: [
      "Lakewood Ranch homeowners want their builder-grade homes to feel custom — and that's exactly what finish carpentry, built-ins, and trim upgrades deliver.",
      "We've helped dozens of Lakewood Ranch families transform their homes with custom built-ins, coffered ceilings, faux beams, and elevated trim work that takes a stock home to the next level.",
    ],
    neighborhoods: [
      "Country Club East",
      "Esplanade",
      "Del Webb",
      "Lakewood National",
      "Polo Run",
      "Mallory Park",
      "Sapphire Point",
      "Cresswind",
    ],
    whyLocal: [
      "Familiar with builder-grade homes — and how to elevate them",
      "Experience with master-planned community HOAs",
      "Local references in nearly every Lakewood Ranch village",
      "Owner-operated, no subcontractors",
    ],
    mapQuery: "Lakewood Ranch, FL",
    faqs: [
      { q: "Do you work in all the Lakewood Ranch villages?", a: "Yes — Esplanade, Country Club East, Del Webb, Polo Run, Cresswind, and beyond. We have references in most communities." },
      { q: "Can you upgrade builder-grade trim?", a: "Absolutely — this is one of our most-requested services in Lakewood Ranch. We swap thin builder trim for premium profiles that look custom." },
      { q: "Do you handle Lakewood Ranch HOA approvals?", a: "We provide all necessary product specs and color information for HOA submissions, though the homeowner files the formal request." },
    ],
  },
  {
    slug: "manatee-county-fl",
    city: "Manatee County",
    fullName: "Manatee County, FL",
    metaTitle: "Carpentry & Renovations in Manatee County, FL | Quality Plus Renovations",
    metaDescription: "Family-owned renovations across Manatee County, FL — Bradenton, Palmetto, Parrish, Anna Maria & more. Free quotes. Call (941) 405-9695.",
    heroTagline: "Manatee County's Family-Owned Renovation Team.",
    overview: [
      "From Anna Maria Island to Parrish, Quality Plus Renovations serves homeowners across all of Manatee County. Wherever you are in the county, you get the same owner-operated, no-subcontractor approach.",
      "Carpentry, flooring, painting, drywall — we're a one-stop shop that's small enough to care and skilled enough to handle whatever your home needs.",
    ],
    neighborhoods: [
      "Bradenton",
      "Palmetto",
      "Parrish",
      "Ellenton",
      "Anna Maria Island",
      "Holmes Beach",
      "Bradenton Beach",
      "Myakka City",
    ],
    whyLocal: [
      "Coverage across the entire county",
      "Understands both coastal and inland building needs",
      "Coordinates with Manatee County permitting when required",
      "Owner on every project — no exceptions",
    ],
    mapQuery: "Manatee County, FL",
    faqs: [
      { q: "How far do you travel within the county?", a: "Anywhere from Anna Maria Island east to Parrish and Myakka City. There's no extra fee for in-county travel." },
      { q: "Do you handle island homes?", a: "Yes — we're familiar with the salt-air and moisture considerations of Anna Maria, Holmes Beach, and Bradenton Beach properties." },
      { q: "Can you pull permits if needed?", a: "We coordinate with Manatee County for any permitted work. Most finish carpentry and cosmetic work doesn't require permits." },
    ],
  },
];

export const getServiceAreaBySlug = (slug: string) => serviceAreas.find((a) => a.slug === slug);