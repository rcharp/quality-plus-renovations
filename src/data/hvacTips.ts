export interface HVACTip {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  relatedServices: { label: string; href: string }[];
  relatedAreas?: { label: string; href: string }[];
}

const hvacTips: HVACTip[] = [
  {
    slug: "declutter-before-moving",
    title: "How to Declutter Your Home Before a Big Move",
    excerpt: "Moving is the perfect time to get rid of what you don't need. Here's a room-by-room guide to decluttering efficiently before the movers arrive.",
    category: "Tips",
    readTime: "4 min read",
    content: [
      "Moving to a new home is the perfect opportunity to lighten your load. The less you move, the less you pay — and the faster you settle in. Start the decluttering process at least 2-4 weeks before your move date.",
      "Go room by room and sort items into four categories: keep, donate, sell, and junk. Be honest with yourself — if you haven't used it in a year, you probably don't need it.",
      "Start with the easiest rooms first (guest rooms, storage closets) to build momentum. Save sentimental items for last, as they take the most emotional energy.",
      "For items in good condition, consider donating to local charities or selling on Facebook Marketplace. For everything else — broken furniture, old mattresses, outdated electronics — call a junk removal service to haul it away.",
      "Don't forget the garage, attic, and basement. These are the areas where forgotten junk accumulates the most. A professional cleanout service can clear these spaces in just a few hours.",
    ],
    relatedServices: [
      { label: "Residential Junk Removal", href: "#" },
      { label: "Yard Waste Removal", href: "#" },
    ],
  },
  {
    slug: "what-junk-removal-companies-take",
    title: "What Can a Junk Removal Company Actually Take?",
    excerpt: "Wondering what's fair game for junk hauling? Here's a comprehensive list of items most junk removal services will — and won't — pick up.",
    category: "Guide",
    readTime: "5 min read",
    content: [
      "Most people are surprised by how much a junk removal company can haul away. If you can lift it or it fits in a truck, chances are we can take it.",
      "Common items we accept: furniture (couches, tables, chairs, desks), mattresses and box springs, appliances (refrigerators, washers, dryers, microwaves), electronics (TVs, computers, printers), exercise equipment, hot tubs, yard waste, and construction debris.",
      "We also handle full property cleanouts — estates, foreclosures, rental turnovers, and hoarding situations. No job is too big or too small.",
      "Items we typically cannot take include hazardous materials: paint, chemicals, asbestos, medical waste, and certain batteries. These require specialized disposal through your local waste management authority.",
      "When in doubt, just ask! Send us a photo of what you need removed and we'll let you know if we can take it — along with a free estimate.",
    ],
    relatedServices: [
      { label: "Residential Junk Removal", href: "#" },
      { label: "Commercial Junk Removal", href: "#" },
    ],
  },
  {
    slug: "eco-friendly-junk-disposal",
    title: "5 Eco-Friendly Ways to Get Rid of Unwanted Stuff",
    excerpt: "Throwing everything in a landfill isn't the only option. Learn how to dispose of junk responsibly and reduce your environmental footprint.",
    category: "Sustainability",
    readTime: "4 min read",
    content: [
      "Americans generate over 290 million tons of waste per year. While not all of it can be recycled, a surprising amount of household junk can be diverted from landfills with a little effort.",
      "1. Donate usable items. Furniture, clothing, and working appliances can find new life through organizations like Goodwill, Habitat for Humanity ReStore, or local shelters. Many will even pick up large items for free.",
      "2. Recycle metals and electronics. Scrap metal (old grills, bed frames, appliances) can be taken to recycling centers. Electronics should go to certified e-waste recyclers to recover valuable materials and prevent toxic chemicals from leaching into soil.",
      "3. Compost yard waste. Branches, leaves, and grass clippings can be composted rather than sent to a landfill. Many municipalities also offer free yard waste pickup.",
      "4. Repurpose creatively. Old doors become tables, pallets become garden beds, and dressers become bathroom vanities. A quick search on Pinterest can spark ideas.",
      "5. Hire an eco-conscious junk removal service. We prioritize recycling and donation over landfill disposal. When you hire us, we sort your items and ensure as much as possible gets a second life.",
    ],
    relatedServices: [
      { label: "Yard Waste Removal", href: "#" },
      { label: "Construction Debris Removal", href: "#" },
    ],
  },
];

export default hvacTips;
