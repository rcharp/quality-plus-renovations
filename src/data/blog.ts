import builtins from "@/assets/qpr/svc-builtins.jpg";
import coffered from "@/assets/qpr/svc-coffered.jpg";
import beams from "@/assets/qpr/svc-beams.jpg";
import barnDoor from "@/assets/qpr/svc-barn-door.jpg";
import lvp from "@/assets/qpr/svc-lvp.jpg";
import finishCarpentry from "@/assets/qpr/svc-finish-carpentry.jpg";
import trim from "@/assets/qpr/svc-trim.jpg";
import intPaint from "@/assets/qpr/svc-int-paint.jpg";
import extPaint from "@/assets/qpr/svc-ext-paint.jpg";
import drywallRepair from "@/assets/qpr/svc-drywall-repair.jpg";
import glueFloor from "@/assets/qpr/svc-glue-floor.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  content: { heading?: string; body: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-built-ins-guide",
    title: "Custom Built-Ins: A Homeowner's Guide to Style and Storage",
    excerpt: "Built-ins add character, function, and resale value. Here's how to plan a custom installation that fits your home and lasts.",
    category: "Carpentry",
    readTime: "6 min read",
    date: "2026-04-10",
    image: builtins,
    metaTitle: "Custom Built-Ins Guide | Quality Plus Renovations Bradenton FL",
    metaDescription: "Learn how custom built-ins add storage, style, and resale value. Material, layout, and design tips from a Bradenton, FL finish carpenter.",
    content: [
      { body: "Custom built-ins are one of the highest-impact upgrades a homeowner can make. Unlike off-the-shelf furniture, a properly designed built-in uses every inch of available space, ties into the architecture of the room, and reads as a permanent part of the home. For Bradenton and Lakewood Ranch homeowners, that means more usable storage in great rooms, offices, and primary bedrooms — without the visual clutter of mismatched cabinets." },
      { heading: "Where built-ins make the biggest impact", body: "The most popular spots are flanking a fireplace, framing a TV in the great room, lining a home office wall, and finishing out an awkward nook under a staircase. Each of these locations has dead space that traditional furniture can't reach. A custom build lets you maximize storage while keeping sightlines clean." },
      { heading: "Materials that hold up in Florida", body: "Humidity matters. We typically recommend a paint-grade poplar face frame with a high-quality plywood carcass, finished with a sprayed enamel. MDF panels work well for shaker doors and back panels because they resist seasonal movement. Solid wood is great for stained pieces but needs to be acclimated before install." },
      { heading: "Design choices that age well", body: "Stick with proportions that match your trim package — if your baseboards are 5 1/4\", your built-in base should feel similar in scale. Shaker doors, simple crown, and a flush-inset look feel timeless. Glass uppers and integrated lighting are nice upgrades when budget allows." },
      { heading: "What to expect from the process", body: "A typical built-in project starts with on-site measurements, a sketch and material spec, and a written quote. Construction usually happens partly off-site (boxes, doors, face frames) and partly in your home (scribing, install, paint). Plan on 1–3 weeks from start to finish for most rooms." },
    ],
  },
  {
    slug: "coffered-ceiling-design-ideas",
    title: "Coffered Ceiling Design Ideas to Elevate Any Room",
    excerpt: "Coffered ceilings add depth, scale, and architectural interest. Explore layouts, profiles, and finishes that work in modern Florida homes.",
    category: "Design",
    readTime: "5 min read",
    date: "2026-04-03",
    image: coffered,
    metaTitle: "Coffered Ceiling Design Ideas | Quality Plus Renovations",
    metaDescription: "Coffered ceiling layouts, materials, and design tips that elevate great rooms, dining rooms, and offices in Bradenton & Lakewood Ranch homes.",
    content: [
      { body: "A coffered ceiling instantly raises the perceived value of a room. The grid of recessed panels adds depth, breaks up flat drywall, and gives the eye something to follow. Done well, it makes a great room feel custom and intentional rather than builder-grade." },
      { heading: "Choosing a grid layout", body: "Most rooms look best with a 3x3 or 4x4 grid, but the right answer depends on ceiling height and room proportions. Square coffers work in symmetrical rooms; rectangular coffers help long rooms feel balanced. Always lay out the grid so the perimeter coffers match in size — mismatched edges are the fastest way to make a coffered ceiling look amateur." },
      { heading: "Profile and trim selection", body: "The beam profile sets the tone. Wider, flatter beams read modern; deeper beams with applied moldings read traditional. We commonly stack a base beam with a small crown on the inside corner to add a shadow line. Inside the coffer, a thin picture-frame molding or a flat panel both work well." },
      { heading: "Finishes that work in Florida homes", body: "A clean white sprayed enamel matches most trim packages. For drama, paint the inside of each coffer a warm neutral or soft sage. Stained beams over white panels are a popular look in coastal contemporary homes." },
      { heading: "Timeline and considerations", body: "Most coffered ceilings take 4–7 days depending on size and complexity. We always check for HVAC vents, smoke detectors, and lighting locations before laying out the grid — moving any of these mid-project adds time and cost." },
    ],
  },
  {
    slug: "faux-wood-beams-101",
    title: "Faux Wood Beams 101: Real Character Without the Weight",
    excerpt: "Faux beams deliver the look of solid timber at a fraction of the weight, cost, and install complexity. Here's what to know before you buy.",
    category: "Design",
    readTime: "5 min read",
    date: "2026-03-27",
    image: beams,
    metaTitle: "Faux Wood Beams Guide | Quality Plus Renovations Bradenton",
    metaDescription: "Faux wood beam options, install tips, and design guidance for Bradenton FL homes. Get the look of solid timber without the weight or cost.",
    content: [
      { body: "Faux wood beams have come a long way. Today's high-density polyurethane and hand-built wood box beams are nearly indistinguishable from solid timber, and they install in a fraction of the time. For most homeowners, the question isn't whether to use real wood — it's which faux option fits the look." },
      { heading: "Polyurethane vs. wood box beams", body: "Polyurethane beams are molded from real reclaimed wood, lightweight, and easy for one person to install. They're ideal for cathedral ceilings and long spans. Wood box beams are built on-site from solid lumber and have crisper edges and deeper grain — better when the beam is at eye level or under bright light." },
      { heading: "Sizing and spacing", body: "Beam scale matters more than beam count. A 12-inch beam in a 9-foot ceiling room will feel oppressive; a 6-inch beam in a 14-foot great room will look like an afterthought. As a rule of thumb, aim for one inch of beam height per foot of ceiling height, and space beams 24–36 inches apart for a tight pattern or 4–6 feet apart for a more open look." },
      { heading: "Finishes that look authentic", body: "The grain pattern is what sells the illusion. Pre-finished factory beams come in dozens of stains, but a hand-applied gel stain over a sealed surface gives the most natural depth. Avoid uniform, glossy finishes — real wood has variation." },
      { heading: "Install considerations", body: "Beams must be anchored to ceiling joists or to a mounting block screwed into framing. Drywall anchors alone aren't strong enough. We always locate joists with a stud finder and confirm with a small pilot hole before committing to a layout." },
    ],
  },
  {
    slug: "custom-barn-doors-bradenton",
    title: "Custom Barn Doors in Bradenton: Styles That Actually Work",
    excerpt: "Barn doors are a smart space-saving solution when planned correctly. Here are the styles, hardware, and install tips that hold up.",
    category: "Carpentry",
    readTime: "5 min read",
    date: "2026-03-20",
    image: barnDoor,
    metaTitle: "Custom Barn Doors Bradenton FL | Quality Plus Renovations",
    metaDescription: "Custom barn door styles, hardware options, and install tips for Bradenton, FL homes. Save space and add character with the right design.",
    content: [
      { body: "Barn doors aren't just a trend — when used in the right spot, they solve real problems. They free up swing space in tight rooms, work as a quiet pantry or laundry door, and add a focal point to plain hallways." },
      { heading: "When a barn door is the right call", body: "Barn doors work best where a swing door wastes space — narrow primary bathrooms, walk-in pantries, home offices off a bedroom. They're not ideal where sound privacy is critical, since they don't seal like a swing door." },
      { heading: "Style options", body: "Modern flat-panel barn doors in white or natural wood blend into contemporary homes. Z-brace and X-brace doors give a more traditional, farmhouse feel. Glass-insert doors work well in offices where you want light to pass through but keep the door closed for privacy." },
      { heading: "Hardware matters more than the door", body: "Cheap hardware will sag, squeak, and pull away from the wall. We use commercial-grade soft-close tracks anchored into a header board lag-bolted to wall studs. The header board distributes the load and lets you mount the track at the right height regardless of where studs land." },
      { heading: "Common mistakes to avoid", body: "Three things go wrong most often: the door is too small to cover the opening (you should overlap by at least 2\" each side), the floor guide is missing (the door will swing and scuff the wall), and the track is mounted to drywall alone (it will fail). All three are easy to get right when planned up front." },
    ],
  },
  {
    slug: "luxury-vinyl-plank-vs-laminate",
    title: "Luxury Vinyl Plank vs. Laminate: Which Wins in Florida Homes",
    excerpt: "Both LVP and laminate look great, but they perform very differently in Florida humidity. Here's how to choose the right one.",
    category: "Flooring",
    readTime: "6 min read",
    date: "2026-03-13",
    image: lvp,
    metaTitle: "LVP vs Laminate Flooring Florida | Quality Plus Renovations",
    metaDescription: "Compare luxury vinyl plank and laminate flooring for Florida homes. Durability, water resistance, install, and cost differences explained.",
    content: [
      { body: "Luxury vinyl plank (LVP) and laminate are the two most popular floor categories for Florida homes, and from across the room they can look almost identical. Up close — and over time — they behave very differently." },
      { heading: "Water resistance", body: "This is the biggest difference. LVP is 100% waterproof; the core is solid PVC or rigid stone-plastic composite, so it can sit in standing water without damage. Laminate is water-resistant at best — the wood-fiber core swells permanently if water gets through the seams. In a Florida home with the occasional dishwasher leak or wet beach towel, LVP is almost always the safer choice." },
      { heading: "Feel and sound underfoot", body: "Laminate generally feels harder and sounds slightly hollow. LVP, especially with an attached underlayment pad, feels softer and quieter. Some homeowners prefer the firm feel of laminate in living areas; others love how forgiving LVP is in kitchens and playrooms." },
      { heading: "Scratch and dent resistance", body: "Laminate's hard wear layer is excellent against scratches but can chip on impact. LVP resists dents better but can scratch under heavy furniture if you skip felt pads. For homes with large dogs, we usually lean toward a high-end LVP with a 20-mil or thicker wear layer." },
      { heading: "Install and cost", body: "Both are click-lock floating installs over a level subfloor. LVP installs slightly faster because it's more forgiving on minor subfloor imperfections. Cost is comparable in the mid-range; premium LVP runs higher than premium laminate, but you're buying waterproof performance." },
      { heading: "Our recommendation", body: "For most Bradenton and Lakewood Ranch homes, a quality LVP with a 12mm+ core, 20-mil wear layer, and attached pad is the best all-around choice. Reserve laminate for upstairs bedrooms or low-moisture areas where the harder feel is preferred." },
    ],
  },
  {
    slug: "finish-carpentry-vs-rough-carpentry",
    title: "Finish Carpentry vs. Rough Carpentry: What's the Difference",
    excerpt: "Knowing which trade you actually need helps you hire the right person and get a result that looks professional.",
    category: "Carpentry",
    readTime: "4 min read",
    date: "2026-03-06",
    image: finishCarpentry,
    metaTitle: "Finish Carpentry vs Rough Carpentry Explained",
    metaDescription: "Understand the difference between finish carpentry and rough carpentry, and learn which you need for your home project.",
    content: [
      { body: "If you've ever called around for quotes and gotten very different answers, the difference between finish and rough carpentry is probably why. They use the same tools but are completely different trades." },
      { heading: "Rough carpentry", body: "Rough carpenters build the structural skeleton of a home — wall framing, floor joists, roof trusses, and subfloors. The work gets covered up by drywall and finishes, so tolerances are measured in eighths of an inch. Speed and structural integrity are what matter." },
      { heading: "Finish carpentry", body: "Finish carpenters install everything you actually see and touch — baseboards, crown, door and window casing, wainscoting, built-ins, mantels, custom doors, stair parts, and more. Tolerances are measured in 32nds and 64ths of an inch. Tight miters, scribed joints, and clean reveals are what set good finish work apart." },
      { heading: "Why it matters when hiring", body: "A great rough carpenter isn't necessarily a great finish carpenter, and vice versa. When you're hiring for trim, built-ins, or any visible woodwork, ask specifically about finish carpentry experience and ask to see close-up photos of past work. Look at the miter joints — that's where skill shows." },
      { heading: "How we approach finish work", body: "We treat every joint as if it's going to be inspected with a flashlight. That means proper acclimation of materials, pre-finished cuts where possible, and caulking only as a finishing touch — never as a way to hide a sloppy joint." },
    ],
  },
  {
    slug: "choose-baseboard-trim",
    title: "How to Choose Baseboards and Trim That Match Your Home",
    excerpt: "Trim sets the architectural tone of every room. Use these proportions and profile tips to get it right.",
    category: "Trim",
    readTime: "5 min read",
    date: "2026-02-27",
    image: trim,
    metaTitle: "How to Choose Baseboards & Trim | Quality Plus Renovations",
    metaDescription: "Pick the right baseboard height, profile, and trim package for your home with these proportion and design guidelines.",
    content: [
      { body: "Trim is one of the smallest line items on a renovation budget but one of the most impactful design choices. The right baseboards and casings make a room feel finished; the wrong ones make even high-end materials look cheap." },
      { heading: "Baseboard height", body: "As ceiling height goes up, baseboard height should go up with it. For 8-foot ceilings, 4 1/4\" to 5 1/4\" is a safe range. For 9-foot ceilings, step up to 5 1/4\" to 7\". For 10-foot or vaulted ceilings, 7\" or taller looks intentional. Going too short makes the room feel out of proportion." },
      { heading: "Profile selection", body: "Modern homes call for cleaner profiles — square-edge or single-step. Traditional and transitional homes look better with stepped or bullnose profiles. Whatever you pick, keep the profile family consistent across baseboard, casing, and crown." },
      { heading: "Casings and reveals", body: "Door and window casings should be slightly thinner than the baseboard, with a small reveal (typically 3/16\") between the casing and the door jamb. This shadow line is what separates custom trim work from a builder-grade install." },
      { heading: "Material matters", body: "Primed MDF is the go-to for paint-grade trim — it's stable, smooth, and takes paint beautifully. For high-moisture areas like bathrooms and laundry rooms, we step up to PVC or moisture-resistant MDF. Solid wood is reserved for stained applications." },
    ],
  },
  {
    slug: "interior-paint-prep-checklist",
    title: "Interior Paint Prep Checklist for a Flawless Finish",
    excerpt: "Great paint jobs are 80% prep. Use this checklist to make sure your next project actually looks like the showroom photo.",
    category: "Painting",
    readTime: "5 min read",
    date: "2026-02-20",
    image: intPaint,
    metaTitle: "Interior Paint Prep Checklist | Quality Plus Renovations",
    metaDescription: "Step-by-step interior paint prep checklist covering cleaning, patching, priming, and masking for a flawless finish.",
    content: [
      { body: "Premium paint applied over poor prep will fail. Cheap paint applied over excellent prep will still look pretty good. The takeaway: prep is where the finish is won." },
      { heading: "1. Clean every surface", body: "Walls collect dust, cooking oils, and hand smudges. Wipe down with a damp microfiber and a degreaser around switches, doorknobs, and kitchen walls. Paint will not bond to a dirty surface." },
      { heading: "2. Patch and sand", body: "Fill nail holes, dings, and stress cracks with lightweight spackle. Let it dry, then sand smooth with 220-grit. For larger holes, use a mesh patch and joint compound, feathered out 6+ inches in every direction." },
      { heading: "3. Caulk every seam", body: "Run a fresh bead of paintable caulk where trim meets the wall, where casings meet door jambs, and along the top of baseboards. This single step makes the finished room look custom." },
      { heading: "4. Spot-prime as needed", body: "Patches, stains, and bare drywall all need primer or they'll flash through the topcoat. A stain-blocking primer takes care of water marks, marker, and grease." },
      { heading: "5. Mask and protect", body: "High-quality painter's tape on trim and ceilings, drop cloths on flooring (canvas, not plastic — plastic is slick and dangerous), and plastic over light fixtures. Spending an extra hour here saves hours of cleanup later." },
      { heading: "6. Cut and roll in the same wet edge", body: "Cut a section, then immediately roll into it before the cut line dries. This avoids the picture-frame effect where cut-in lines show through after the paint dries." },
    ],
  },
  {
    slug: "exterior-paint-florida-climate",
    title: "Exterior Paint in the Florida Climate: What Lasts",
    excerpt: "UV, humidity, and salt air punish exterior paint. These products and techniques hold up against the worst Florida weather.",
    category: "Painting",
    readTime: "5 min read",
    date: "2026-02-13",
    image: extPaint,
    metaTitle: "Exterior Paint Florida Climate | Quality Plus Renovations",
    metaDescription: "Best exterior paint products and prep techniques for Florida's UV, humidity, and salt air. Make your paint job last in Bradenton FL.",
    content: [
      { body: "Florida is one of the toughest climates in the country for exterior paint. UV breaks down the binders, humidity blisters poorly bonded film, and on the coast, salt accelerates everything. The good news: a properly prepped, properly specified exterior paint job can easily last 10 years." },
      { heading: "Surface prep is non-negotiable", body: "Pressure wash every surface and let it dry for 24–48 hours. Scrape any loose paint, sand glossy areas, and treat any mildew with a diluted bleach solution. Caulk every seam with a high-quality elastomeric caulk — not painter's caulk." },
      { heading: "Primer choice", body: "Bare stucco needs a masonry primer with high alkali resistance. Bare wood needs an oil or alkyd primer to lock down tannins. Previously painted surfaces in good shape can usually skip primer except in spot-prime areas." },
      { heading: "Topcoat selection", body: "100% acrylic exterior paint with built-in UV inhibitors is the standard. For stucco walls, an elastomeric coating bridges hairline cracks and resists water intrusion. For trim and doors, a urethane-modified acrylic gives a harder, more washable finish." },
      { heading: "Application timing", body: "Avoid painting in direct sun on hot days — the paint flashes off too fast and won't bond. Aim for early morning or shaded sides of the house. Watch the dew point: paint applied late in the day can blister overnight as moisture forms on the wet film." },
    ],
  },
  {
    slug: "drywall-repair-when-to-call-pro",
    title: "Drywall Repair: When to DIY and When to Call a Pro",
    excerpt: "Some drywall fixes are weekend projects. Others will look terrible no matter how hard you try. Here's where the line is.",
    category: "Drywall",
    readTime: "5 min read",
    date: "2026-02-06",
    image: drywallRepair,
    metaTitle: "Drywall Repair: DIY or Pro? | Quality Plus Renovations",
    metaDescription: "Learn which drywall repairs you can DIY and which need a professional finisher. Tips for clean, invisible patches every time.",
    content: [
      { body: "Drywall repair looks easy in YouTube tutorials. In practice, the difference between a patch you can see from across the room and one you can't is years of experience with mud, knives, and texture." },
      { heading: "DIY-friendly repairs", body: "Small nail holes, dings under the size of a quarter, and minor corner dents are all good DIY territory. Lightweight spackle, a flexible putty knife, fine sandpaper, and a touch-up of wall paint will make them disappear." },
      { heading: "Where it gets tricky", body: "Holes larger than a fist, repairs in textured ceilings, and any patch on a wall with a satin or higher sheen are all hard to nail as a DIYer. The challenge isn't filling the hole — it's blending the texture and feathering the mud so the patch doesn't telegraph through under raking light." },
      { heading: "Texture matching is the hardest part", body: "Knockdown, orange peel, and skip trowel textures take real practice to match. A pro can dial in spray pressure, mud consistency, and timing to make a patch invisible. A first-time DIY texture patch will almost always show as a halo." },
      { heading: "When to call us", body: "If the repair is in a high-visibility spot, on a textured ceiling, or anywhere a satin paint will catch the light, it's worth bringing in a finish pro. The labor cost is modest and the result is genuinely invisible." },
    ],
  },
  {
    slug: "glue-down-vs-floating-floors",
    title: "Glue-Down vs. Floating Floors: Pros, Cons, and Best Use",
    excerpt: "Glue-down and floating installs each have a place. The right choice depends on subfloor, traffic, and which floor you're installing.",
    category: "Flooring",
    readTime: "5 min read",
    date: "2026-01-30",
    image: glueFloor,
    metaTitle: "Glue-Down vs Floating Floors | Quality Plus Renovations",
    metaDescription: "Compare glue-down and floating floor installs. Pros, cons, and when each method makes sense for your home.",
    content: [
      { body: "Most modern flooring can be installed two ways: glued directly to the subfloor or floated over a thin underlayment. Each has real advantages, and the right call depends on your floor type, subfloor, and how the room will be used." },
      { heading: "Floating floors", body: "Floating installs use click-lock joints — planks lock to each other rather than to the subfloor. They're faster to install, more forgiving on minor subfloor imperfections, and easier to repair (you can pull a damaged plank without cutting). The trade-off: they can sound slightly hollow underfoot and aren't ideal in very large rooms without expansion gaps." },
      { heading: "Glue-down floors", body: "Glue-down installs bond every plank directly to the subfloor with a high-strength adhesive. They feel solid and quiet, work in unlimited-size rooms without expansion breaks, and stand up well to heavy commercial traffic. The downsides: install takes longer, the subfloor must be flat and clean, and repairs require more work." },
      { heading: "Best use cases", body: "Floating: most LVP and laminate residential installs, condos with sound restrictions (with the right pad), DIY-friendly rooms. Glue-down: large open-plan kitchens and great rooms, engineered hardwood, anywhere the floor will see heavy carts or rolling chairs." },
      { heading: "Subfloor prep is critical either way", body: "Floating floors need a flat subfloor — typically within 3/16\" over 10 feet. Glue-down needs a clean, dry, flat subfloor and the right primer or moisture barrier on concrete slabs. Skipping prep is the most common cause of floor failure regardless of install method." },
    ],
  },
  {
    slug: "hire-finish-carpenter-bradenton",
    title: "How to Hire the Right Finish Carpenter in Bradenton FL",
    excerpt: "Not every carpenter does great finish work. These questions and red flags will help you find someone you can trust.",
    category: "Hiring",
    readTime: "5 min read",
    date: "2026-01-23",
    image: finishCarpentry,
    metaTitle: "Hire a Finish Carpenter in Bradenton FL | Quality Plus Renovations",
    metaDescription: "Questions to ask, red flags to avoid, and what to expect when hiring a finish carpenter in Bradenton, Lakewood Ranch, or Sarasota.",
    content: [
      { body: "Finding a great finish carpenter is harder than it should be. Most general contractors will tell you they handle finish work, but truly skilled trim and built-in installers are a smaller group. Here's how to find one." },
      { heading: "Ask to see close-up photos", body: "Wide shots of finished rooms hide a lot. Ask for close-ups of miter joints, scribed cuts where trim meets uneven walls, and built-in face frames. Tight, consistent joints with no gaps are the hallmark of a finish carpenter who takes pride in the craft." },
      { heading: "Ask about their process", body: "Good finish carpenters talk about acclimating materials, pre-finishing where possible, scribing to walls, and minimizing caulk. If the answers are vague or the contractor leans heavily on \"caulk and paint will hide it,\" that's a red flag." },
      { heading: "Check reviews carefully", body: "Look for repeat customers and reviews that mention specific projects (built-ins, barn doors, trim packages). Generic five-star reviews without details can be padded. Long, specific reviews are usually real." },
      { heading: "Get the quote in writing", body: "A real quote breaks out materials, labor, finish work, and any subcontracted painting separately. Lump-sum estimates without detail make it hard to compare bids and easy for surprises to show up later." },
      { heading: "Why local matters", body: "A Bradenton-based carpenter knows the area's homes, the typical builder-grade trim packages, and the right materials for the climate. They're also easy to reach for warranty work and follow-up projects." },
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);