import barnDoor from "@/assets/qpr/svc-barn-door.jpg";
import beams from "@/assets/qpr/svc-beams.jpg";
import builtins from "@/assets/qpr/svc-builtins.jpg";
import coffered from "@/assets/qpr/svc-coffered.jpg";
import drywallRepair from "@/assets/qpr/svc-drywall-repair.jpg";
import drywall from "@/assets/qpr/svc-drywall.jpg";
import extPaint from "@/assets/qpr/svc-ext-paint.jpg";
import finishCarpentry from "@/assets/qpr/svc-finish-carpentry.jpg";
import glueFloor from "@/assets/qpr/svc-glue-floor.jpg";
import intPaint from "@/assets/qpr/svc-int-paint.jpg";
import laminate from "@/assets/qpr/svc-laminate.jpg";
import lvp from "@/assets/qpr/svc-lvp.jpg";
import trim from "@/assets/qpr/svc-trim.jpg";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  overview: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: ServiceFAQ[];
}

export const services: ServiceData[] = [
  {
    slug: "finish-carpentry",
    title: "Finish Carpentry in Bradenton, FL",
    shortTitle: "Finish Carpentry",
    image: finishCarpentry,
    metaTitle: "Finish Carpentry Bradenton FL | Quality Plus Renovations",
    metaDescription: "Expert finish carpentry in Bradenton, Sarasota & Lakewood Ranch. Custom millwork, cabinetry, and detail-driven craftsmanship. Call (941) 405-9695.",
    heroTagline: "Hand-Crafted Detail. Honest Workmanship.",
    overview: [
      "Finish carpentry is what separates a good remodel from a great one. It's the woodwork your eye lands on every day — door casings, baseboards, built-ins, mantels, and trim that pull a room together.",
      "At Quality Plus Renovations, finish carpentry is our specialty. Owner Yevgeniy Turko brings generations of craftsmanship to every cut, miter, and joint, treating your home with the care and precision it deserves.",
    ],
    benefits: [
      "Owner on every job — no subcontractors",
      "Tight, gap-free joinery and miters",
      "Premium materials matched to your home",
      "Clean job sites and respectful crews",
      "Free, detailed in-home estimates",
    ],
    process: [
      { step: "Free Consultation", description: "We come to your home, walk the project with you, and listen to your vision." },
      { step: "Detailed Quote", description: "You receive a clear, line-item quote — no surprises, no fine print." },
      { step: "Skilled Installation", description: "Yevgeniy and his team execute the work with care, precision, and daily cleanup." },
      { step: "Walkthrough & Approval", description: "We finish only when you're 100% satisfied with every detail." },
    ],
    faqs: [
      { q: "What does finish carpentry include?", a: "Trim, baseboards, casings, crown molding, wainscoting, built-ins, mantels, beams, custom doors, and any wood detail work that finishes a room." },
      { q: "How long does a typical project take?", a: "Most rooms take 2–5 days depending on scope. Whole-home trim packages run 1–3 weeks. We give you a firm timeline in your quote." },
      { q: "Do you provide the materials?", a: "Yes — we source premium-grade lumber, MDF, and hardware. You can also supply your own materials if you prefer." },
    ],
  },
  {
    slug: "built-ins",
    title: "Custom Built-Ins in Bradenton, FL",
    shortTitle: "Built-Ins",
    image: builtins,
    metaTitle: "Custom Built-Ins Bradenton FL | Quality Plus Renovations",
    metaDescription: "Custom built-in shelving, entertainment centers, mudrooms, and closets in Bradenton, Sarasota & Lakewood Ranch. Free quotes. Call (941) 405-9695.",
    heroTagline: "Built to Fit. Designed to Last.",
    overview: [
      "Custom built-ins make your home work harder and look sharper. Whether it's a wall of shelving, a mudroom drop zone, or an entertainment center — we build it to fit your exact space.",
      "Every built-in is fabricated and installed by Quality Plus Renovations directly, so you get clean lines, level shelves, and a finish that looks like it was always part of the home.",
    ],
    benefits: [
      "Tailored to your exact dimensions",
      "Solid wood and premium plywood construction",
      "Painted, stained, or natural finishes",
      "Soft-close hardware standard",
      "Designed around how you actually use the space",
    ],
    process: [
      { step: "Design Consultation", description: "We measure, sketch, and discuss style, storage needs, and finish options." },
      { step: "Custom Quote", description: "A clear scope and price — including materials, hardware, and installation." },
      { step: "Fabrication", description: "We build to spec using premium materials and proven joinery." },
      { step: "Install & Finish", description: "Installed level, scribed to your walls, and finished on-site for a seamless look." },
    ],
    faqs: [
      { q: "Can built-ins match my existing trim?", a: "Absolutely. We match profiles, paint colors, and stains so your built-in looks original to the home." },
      { q: "Do you handle electrical for media built-ins?", a: "We coordinate with a licensed electrician when outlets, lighting, or AV cabling need to be relocated." },
      { q: "How long from quote to finished install?", a: "Typically 2–4 weeks from approval, depending on materials and project size." },
    ],
  },
  {
    slug: "trim-work",
    title: "Trim Work in Bradenton, FL",
    shortTitle: "Trim Work",
    image: trim,
    metaTitle: "Trim Carpentry Bradenton FL | Baseboards, Crown & Casings",
    metaDescription: "Professional trim carpentry in Bradenton, Sarasota & Lakewood Ranch. Baseboards, crown molding, casings & wainscoting. Call (941) 405-9695.",
    heroTagline: "Crisp Lines. Tight Joints. Every Time.",
    overview: [
      "Trim is the punctuation of a well-built room. Done right, it disappears into the architecture. Done poorly, it's the first thing your eye catches — gappy miters, uneven returns, sloppy caulk lines.",
      "Quality Plus Renovations installs baseboards, crown molding, door and window casings, chair rails, and wainscoting with the precision your home deserves.",
    ],
    benefits: [
      "Tight miters and coped inside corners",
      "Hand-selected straight stock — no warps",
      "Caulked, filled, and paint-ready",
      "Whole-home or single-room packages",
      "Clean cuts around outlets, vents, and quirks",
    ],
    process: [
      { step: "Measure & Profile Selection", description: "We help you choose profiles that complement your home's style." },
      { step: "Material Sourcing", description: "Premium MDF, primed pine, or hardwood — your choice." },
      { step: "Precision Install", description: "Coped joints, tight miters, set with finish nails and adhesive." },
      { step: "Caulk & Fill", description: "We leave it paint-ready with every gap, nail hole, and seam handled." },
    ],
    faqs: [
      { q: "Should baseboards be coped or mitered?", a: "Inside corners get coped joints — they hold up to seasonal movement far better than miters. Outside corners are mitered and glued." },
      { q: "Can you remove and replace existing trim?", a: "Yes — we carefully demo old trim, prep the walls, and install your new profile cleanly." },
      { q: "Do you paint the trim too?", a: "We can. Many clients bundle trim install with a paint package for a one-stop finish." },
    ],
  },
  {
    slug: "faux-beams",
    title: "Faux Wood Beams in Bradenton, FL",
    shortTitle: "Faux Beams",
    image: beams,
    metaTitle: "Faux Wood Beams Bradenton FL | Quality Plus Renovations",
    metaDescription: "Custom faux wood ceiling beams in Bradenton, Sarasota & Lakewood Ranch. Adds warmth and architectural character. Call (941) 405-9695.",
    heroTagline: "Architectural Warmth. Without the Weight.",
    overview: [
      "Faux wood beams transform a flat ceiling into a focal point. They add warmth, character, and architectural depth — without the structural complexity or weight of solid timber.",
      "We custom-build each beam on-site to fit your ceiling, then stain or paint to your specification. The result looks and feels like authentic reclaimed timber.",
    ],
    benefits: [
      "Lightweight — no ceiling reinforcement needed",
      "Custom dimensions, lengths, and profiles",
      "Stained, glazed, or painted finishes",
      "Hand-distressed for an aged-wood look (optional)",
      "Installs over existing drywall ceilings",
    ],
    process: [
      { step: "Design & Layout", description: "We map out beam placement, sizing, and spacing to suit the room." },
      { step: "Build to Spec", description: "Beams are constructed from premium lumber to your exact dimensions." },
      { step: "Finish Selection", description: "Choose your stain, glaze, or paint — we sample on-site." },
      { step: "Install", description: "Mounted securely with concealed cleats for a clean, seamless look." },
    ],
    faqs: [
      { q: "Are faux beams really hollow?", a: "Yes — three-sided box construction makes them lightweight while looking like solid timber from below." },
      { q: "Can you match an existing wood tone in the room?", a: "We sample stain colors on-site to match floors, cabinets, or existing trim." },
      { q: "Will it work with my ceiling height?", a: "Faux beams work in 8-foot ceilings and up. We size proportionally to keep the room feeling open." },
    ],
  },
  {
    slug: "coffered-ceilings",
    title: "Coffered Ceilings in Bradenton, FL",
    shortTitle: "Coffered Ceilings",
    image: coffered,
    metaTitle: "Coffered Ceilings Bradenton FL | Quality Plus Renovations",
    metaDescription: "Custom coffered ceiling design and installation in Bradenton, Sarasota & Lakewood Ranch. Adds elegance and depth. Call (941) 405-9695.",
    heroTagline: "Elegance Built Overhead.",
    overview: [
      "A coffered ceiling instantly elevates a room — adding depth, shadow, and a sense of architecture that flat ceilings simply can't deliver.",
      "We design and build coffered ceilings to your taste: traditional grids, modern minimalist patterns, or shadow-box styles. Every joint is tight, every line straight.",
    ],
    benefits: [
      "Custom grid layouts to suit your room",
      "Premium MDF or hardwood construction",
      "Painted or stained finishes",
      "Adds perceived ceiling height and luxury",
      "Compatible with recessed lighting integration",
    ],
    process: [
      { step: "Layout Design", description: "We chalk out the grid on your ceiling so you can see the pattern before we build." },
      { step: "Material Prep", description: "Beams and panels are pre-built and pre-finished where possible." },
      { step: "Install", description: "Hung level, squared, and secured for a perfectly aligned grid." },
      { step: "Finish & Detail", description: "Caulked, filled, and paint-ready (or pre-finished if stained)." },
    ],
    faqs: [
      { q: "How much ceiling height do I need?", a: "9 feet or more is ideal. We can do shallower coffers in 8-foot rooms to keep things proportional." },
      { q: "Can you add lighting in the coffers?", a: "Yes — recessed lighting integrates beautifully. We coordinate with a licensed electrician." },
      { q: "How long does install take?", a: "Most coffered ceilings are completed in 4–7 working days, depending on grid complexity." },
    ],
  },
  {
    slug: "custom-barn-doors",
    title: "Custom Barn Doors in Bradenton, FL",
    shortTitle: "Custom Barn Doors",
    image: barnDoor,
    metaTitle: "Custom Barn Doors Bradenton FL | Quality Plus Renovations",
    metaDescription: "Hand-built custom barn doors in Bradenton, Sarasota & Lakewood Ranch. Modern and rustic styles with premium hardware. Call (941) 405-9695.",
    heroTagline: "One-of-a-Kind Doors, Built for Your Home.",
    overview: [
      "A custom barn door is more than a space-saver — it's a statement piece. We hand-build every door to your exact opening, in the style you want, with the hardware that fits your home.",
      "From rustic plank doors to modern panel designs, every barn door we build is solid, true, and ready for years of smooth daily use.",
    ],
    benefits: [
      "Built to your exact opening dimensions",
      "Solid wood construction — not hollow-core",
      "Premium soft-close hardware included",
      "Modern, farmhouse, or industrial styles",
      "Stained or painted to match your interior",
    ],
    process: [
      { step: "Style & Sizing Consult", description: "We measure your opening and walk through style options together." },
      { step: "Door Build", description: "Each door is hand-assembled in the shop or on-site to your spec." },
      { step: "Hardware Selection", description: "Choose your track, handle, and finish — we install all of it." },
      { step: "Mount & Adjust", description: "Hung level, glides smoothly, soft-close engaged — ready to use." },
    ],
    faqs: [
      { q: "Will the door cover the opening completely?", a: "Yes — we size the door 2–4 inches wider and taller than the opening for full privacy." },
      { q: "Do I need extra wall space?", a: "You need clear wall space equal to the door width on the side it slides toward. We confirm this during the consult." },
      { q: "Can a barn door go on a bathroom?", a: "Yes — but understand they're not as soundproof as a standard hinged door. We can recommend gap-reducing hardware." },
    ],
  },
  {
    slug: "interior-painting",
    title: "Interior Painting in Bradenton, FL",
    shortTitle: "Interior Painting",
    image: intPaint,
    metaTitle: "Interior Painting Bradenton FL | Quality Plus Renovations",
    metaDescription: "Professional interior painting in Bradenton, Sarasota & Lakewood Ranch. Walls, ceilings, and trim with premium low-VOC paints. Call (941) 405-9695.",
    heroTagline: "A Crisp, Lasting Finish.",
    overview: [
      "A great paint job is 80% prep. We patch, sand, mask, and prime properly before a drop of color goes on the wall — which is why our finishes hold up for years, not months.",
      "From a single accent wall to a whole-home repaint, Quality Plus Renovations delivers clean lines, even coverage, and zero overspray on your floors or furniture.",
    ],
    benefits: [
      "Premium low-VOC paints (Sherwin-Williams, Benjamin Moore)",
      "Drywall patching and prep included",
      "Furniture and floors fully protected",
      "Clean cut lines on trim and ceilings",
      "Daily cleanup — your home stays livable",
    ],
    process: [
      { step: "Color Consultation", description: "We help with sheen, color, and brand selection if you want a hand." },
      { step: "Prep & Protection", description: "Walls patched, sanded, primed; floors and furniture covered and taped." },
      { step: "Paint Application", description: "Cut-in by hand, rolled for even coverage — typically two finish coats." },
      { step: "Detail & Walkthrough", description: "We touch up, remove tape, and walk every room with you before we leave." },
    ],
    faqs: [
      { q: "How many coats of paint do you apply?", a: "Standard is one primer coat (when needed) and two finish coats. Dramatic color changes may require three." },
      { q: "Do you move furniture?", a: "We move and replace lighter furniture. For pianos, large armoires, or fragile items we ask the homeowner to coordinate." },
      { q: "How long until I can use the room?", a: "Walls are dry to the touch in 1–2 hours and fully cured in 2–4 weeks. You can move back in the same day." },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting in Bradenton, FL",
    shortTitle: "Exterior Painting",
    image: extPaint,
    metaTitle: "Exterior Painting Bradenton FL | Quality Plus Renovations",
    metaDescription: "Whole-home exterior painting in Bradenton, Sarasota & Lakewood Ranch. Weather-resistant coatings built for the Florida sun. Call (941) 405-9695.",
    heroTagline: "Built to Beat the Florida Sun.",
    overview: [
      "Florida is brutal on exterior paint. UV, humidity, and rain wear down weak coatings in a couple of seasons. We use premium, UV-stable, mildew-resistant exterior paints engineered for Gulf Coast homes.",
      "Our process starts with proper prep — pressure washing, scraping, caulking, and priming — so the new coat actually bonds and lasts.",
    ],
    benefits: [
      "Pressure wash and full surface prep",
      "Caulking around windows, doors, and trim",
      "Premium 100% acrylic exterior paint",
      "Stucco, hardie, wood, and trim experience",
      "Color matching for HOA-restricted communities",
    ],
    process: [
      { step: "Inspection & Prep Plan", description: "We walk the home, flag problem areas, and quote the full prep scope." },
      { step: "Wash & Repair", description: "Pressure wash, scrape loose paint, replace rotted wood, caulk joints." },
      { step: "Prime & Paint", description: "Spot prime as needed, then two coats of premium exterior paint." },
      { step: "Final Walkthrough", description: "We inspect every elevation with you and touch up anything you flag." },
    ],
    faqs: [
      { q: "How long does exterior paint last in Florida?", a: "With premium product and proper prep, 7–10 years on stucco and hardie. Wood may need touch-ups sooner depending on sun exposure." },
      { q: "Do you handle HOA color approval?", a: "We provide color samples and product specs to make HOA approval straightforward — but the final submission is the homeowner's." },
      { q: "Will weather delay the project?", a: "Yes — we don't paint in rain or high humidity. We schedule with weather buffers and communicate any shifts." },
    ],
  },
  {
    slug: "lvp-flooring",
    title: "LVP Flooring Installation in Bradenton, FL",
    shortTitle: "LVP Flooring",
    image: lvp,
    metaTitle: "LVP Flooring Installation Bradenton FL | Quality Plus Renovations",
    metaDescription: "Waterproof luxury vinyl plank flooring installation in Bradenton, Sarasota & Lakewood Ranch. Free quotes. Call (941) 405-9695.",
    heroTagline: "Waterproof. Beautiful. Built for Florida.",
    overview: [
      "Luxury vinyl plank (LVP) is the perfect flooring for Florida homes — 100% waterproof, scratch-resistant, and looks like real hardwood. Perfect for kitchens, baths, and pet-heavy households.",
      "Quality Plus Renovations installs LVP with proper subfloor prep, tight seams, clean transitions, and trim work that actually finishes the job.",
    ],
    benefits: [
      "100% waterproof core",
      "Scratch and dent resistant",
      "Realistic wood-look textures and finishes",
      "Comfortable underfoot — quieter than tile",
      "Compatible with radiant heat (some products)",
    ],
    process: [
      { step: "Subfloor Inspection", description: "We check for level, moisture, and prep needs before quoting." },
      { step: "Material Selection", description: "We help you choose the right plank thickness, wear layer, and style." },
      { step: "Install", description: "Click-lock or glue-down install with tight seams and proper expansion gaps." },
      { step: "Trim & Transitions", description: "Quarter round, transitions to tile/carpet, and baseboard touch-ups handled." },
    ],
    faqs: [
      { q: "Can LVP go over tile?", a: "Yes — if the tile is sound, level, and grout lines aren't too deep. We assess during the quote." },
      { q: "How long does installation take?", a: "Most homes (1,500–2,500 sq ft) take 3–5 days including prep and trim work." },
      { q: "Do I need to move furniture?", a: "We can include furniture moving for an added fee, or you can clear rooms ahead of our arrival." },
    ],
  },
  {
    slug: "laminate-flooring",
    title: "Laminate Flooring Installation in Bradenton, FL",
    shortTitle: "Laminate Flooring",
    image: laminate,
    metaTitle: "Laminate Flooring Installation Bradenton FL | Quality Plus Renovations",
    metaDescription: "Affordable laminate flooring installation in Bradenton, Sarasota & Lakewood Ranch. Wood-look durability. Call (941) 405-9695.",
    heroTagline: "Wood-Look Floors. Smart Budget.",
    overview: [
      "Modern laminate flooring delivers the look of real hardwood at a fraction of the price — and today's products are tougher and more realistic than ever.",
      "Great for bedrooms, living areas, and home offices, laminate is a smart choice when you want a refresh without the cost of solid wood or LVP.",
    ],
    benefits: [
      "Wide range of wood-look styles",
      "Click-lock floating install",
      "Excellent dent and fade resistance",
      "Cost-effective whole-home upgrade",
      "Quick install with minimal disruption",
    ],
    process: [
      { step: "Subfloor Prep", description: "We level and clean the subfloor and lay an appropriate underlayment." },
      { step: "Plank Layout", description: "We dry-lay the room to plan cuts and balance the visual." },
      { step: "Install", description: "Click-lock floating install with proper expansion gaps at all walls." },
      { step: "Trim & Finish", description: "Quarter round, transitions, and threshold pieces installed cleanly." },
    ],
    faqs: [
      { q: "Is laminate water-resistant?", a: "Modern laminates are water-resistant for spills, but not waterproof like LVP. For bathrooms or kitchens we recommend LVP instead." },
      { q: "How long does laminate last?", a: "Quality laminate with a strong wear layer lasts 15–25 years in residential use." },
      { q: "Can it go over existing flooring?", a: "Over hardwood or tile, often yes. Over carpet, no — carpet must be removed first." },
    ],
  },
  {
    slug: "glue-down-flooring",
    title: "Glue Down Flooring in Bradenton, FL",
    shortTitle: "Glue Down Flooring",
    image: glueFloor,
    metaTitle: "Glue Down Flooring Installation Bradenton FL | Quality Plus Renovations",
    metaDescription: "Glue down vinyl and hardwood flooring installation in Bradenton, Sarasota & Lakewood Ranch. Solid, stable installs. Call (941) 405-9695.",
    heroTagline: "Rock-Solid. Quiet. Built to Stay.",
    overview: [
      "Glue down flooring delivers the most solid, stable underfoot feel — no floating, no hollow sound. It's the right call for large open floor plans, commercial-grade durability, and slab subfloors.",
      "We install glue down vinyl plank, engineered hardwood, and luxury vinyl tile with proper subfloor prep and adhesive selection.",
    ],
    benefits: [
      "Solid, hollow-free feel underfoot",
      "No expansion gaps in large rooms",
      "Excellent for slab subfloors",
      "Quieter than floating installs",
      "Works with wide-plank and large-format products",
    ],
    process: [
      { step: "Subfloor Inspection", description: "Moisture testing, leveling, and full prep before any adhesive goes down." },
      { step: "Adhesive Selection", description: "We match the adhesive to your product and subfloor for a permanent bond." },
      { step: "Glue Down Install", description: "Planks set into adhesive with proper roll-out and seam alignment." },
      { step: "Cure & Finish", description: "We respect cure times, then finish trim and transitions cleanly." },
    ],
    faqs: [
      { q: "When should I choose glue down over floating?", a: "Large open floor plans (>40 ft runs), commercial spaces, or wherever you want the most solid underfoot feel." },
      { q: "Is the adhesive low-odor?", a: "Yes — we use modern low-VOC adhesives that are safe for occupied homes." },
      { q: "Can glue down floors be removed later?", a: "They can, but it's more labor than floating floors. Plan for glue down to be a long-term install." },
    ],
  },
  {
    slug: "drywall-work",
    title: "Drywall Installation in Bradenton, FL",
    shortTitle: "Drywall Work",
    image: drywall,
    metaTitle: "Drywall Installation Bradenton FL | Quality Plus Renovations",
    metaDescription: "Drywall hanging and finishing for new construction and remodels in Bradenton, Sarasota & Lakewood Ranch. Call (941) 405-9695.",
    heroTagline: "Smooth Walls. Paint-Ready Finish.",
    overview: [
      "Drywall is the canvas every paint job and trim install starts on. Bad drywall shows through everything — wavy seams, visible screws, lumpy mud — no matter how good the paint.",
      "We hang and finish drywall to a true level 4 (or level 5 on request), with smooth or textured finishes that arrive at the painter ready to go.",
    ],
    benefits: [
      "New construction and remodel work",
      "Smooth (level 4 or 5) and textured finishes",
      "Knockdown, orange peel, and hand-textured options",
      "Sound-dampening and moisture-resistant board options",
      "Clean cuts around outlets, vents, and fixtures",
    ],
    process: [
      { step: "Hang", description: "Sheets cut, fit, and screwed flush — minimal seams, none on door corners." },
      { step: "Tape & Mud", description: "Three coats minimum — tape coat, fill coat, finish coat — sanded between." },
      { step: "Texture", description: "Smooth-trowel level 4/5, knockdown, or orange peel — your choice." },
      { step: "Prime-Ready Handoff", description: "Cleaned up, vacuumed, and ready for primer and paint." },
    ],
    faqs: [
      { q: "What's the difference between level 4 and level 5?", a: "Level 4 is standard smooth — fine for most paints and matte finishes. Level 5 adds a skim coat and is required under glossy paint or in raking light." },
      { q: "Can you match my existing texture?", a: "Yes — we sample on-site to match knockdown, orange peel, or hand textures so repairs disappear." },
      { q: "How long does drywall take to finish?", a: "A typical room takes 3–5 days including hang, three mud coats with dry time, sanding, and texture." },
    ],
  },
  {
    slug: "drywall-repair",
    title: "Drywall Repair in Bradenton, FL",
    shortTitle: "Drywall Repair",
    image: drywallRepair,
    metaTitle: "Drywall Repair Bradenton FL | Quality Plus Renovations",
    metaDescription: "Fast, invisible drywall repair in Bradenton, Sarasota & Lakewood Ranch. Holes, cracks, water damage, texture matching. Call (941) 405-9695.",
    heroTagline: "Holes. Cracks. Water Damage. Gone.",
    overview: [
      "Holes from doorknobs, hairline cracks above doors, water damage from a leaky pipe — most drywall problems can be made invisible by someone who knows what they're doing.",
      "We patch, mud, sand, and texture-match repairs so the wall looks like nothing ever happened. Fast turnarounds and clean job sites.",
    ],
    benefits: [
      "Invisible patches with proper texture matching",
      "Water damage repairs (after leak is fixed)",
      "Settlement crack repair that actually holds",
      "Drywall removed and replaced when needed",
      "Same-week scheduling on most jobs",
    ],
    process: [
      { step: "Assessment", description: "We diagnose the cause — old leak, settlement, impact — and quote the fix." },
      { step: "Patch", description: "Clean cut, backed, screwed in, and taped properly — not just mudded over." },
      { step: "Mud & Sand", description: "Multiple thin coats, sanded smooth, blended into surrounding wall." },
      { step: "Texture Match & Paint-Ready", description: "Texture sampled and matched. We can also touch-up paint if you have a match." },
    ],
    faqs: [
      { q: "How long does a typical patch take?", a: "Small patches (under 12\") usually take two visits over 2–3 days due to mud dry times. Large repairs may take longer." },
      { q: "Can you fix water-damaged drywall?", a: "Yes — but the source of the leak must be repaired first. We'll cut out compromised drywall and rebuild the section." },
      { q: "Will the repair be visible after painting?", a: "Done properly with texture matched and paint feathered, no — repairs disappear into the wall." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);