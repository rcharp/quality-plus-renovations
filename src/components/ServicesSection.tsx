import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";

const services = [
  { title: "Finish Carpentry", slug: "finish-carpentry", features: ["Custom interior carpentry", "Cabinetry & millwork", "Hand-crafted detail", "Generations of experience"] },
  { title: "Built-ins", slug: "built-ins", features: ["Custom shelving & cabinets", "Entertainment centers", "Mudrooms & closets", "Fully tailored to your space"] },
  { title: "Trim Work", slug: "trim-work", features: ["Baseboards & crown molding", "Window & door casings", "Wainscoting & chair rails", "Clean, precise installs"] },
  { title: "Faux Beams", slug: "faux-beams", features: ["Custom wood-look beams", "Lightweight & easy to install", "Stained or painted finishes", "Adds warmth & character"] },
  { title: "Coffered Ceilings", slug: "coffered-ceilings", features: ["Custom designs to your taste", "Adds elegance & depth", "Built to spec", "Premium materials"] },
  { title: "Custom Built Barn Doors", slug: "custom-barn-doors", features: ["Hand-built to your dimensions", "Premium hardware included", "Modern & rustic styles", "Smooth, quiet operation"] },
  { title: "Full Interior Painting", slug: "interior-painting", features: ["Walls, ceilings & trim", "Premium low-VOC paints", "Clean prep & cleanup", "Crisp, lasting finish"] },
  { title: "Exterior Painting", slug: "exterior-painting", features: ["Whole-home exteriors", "Weather-resistant coatings", "Surface prep & priming", "Long-lasting protection"] },
  { title: "LVP Flooring", slug: "lvp-flooring", features: ["Waterproof luxury vinyl plank", "Wide style selection", "Professional install", "Durable & easy to maintain"] },
  { title: "Laminate Flooring", slug: "laminate-flooring", features: ["Affordable wood-look floors", "Click-lock installation", "Multiple finishes available", "Great for high-traffic rooms"] },
  { title: "Glue Down Flooring", slug: "glue-down-flooring", features: ["Solid, stable installs", "Vinyl, hardwood & more", "Subfloor prep included", "Minimal expansion gaps"] },
  { title: "Drywall Work", slug: "drywall-work", features: ["New construction & remodels", "Hanging & finishing", "Smooth & textured finishes", "Paint-ready results"] },
  { title: "Drywall Repair", slug: "drywall-repair", features: ["Holes, cracks & water damage", "Texture matching", "Patch & repaint ready", "Fast turnarounds"] },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleServices = expanded ? services : services.slice(0, 6);
  return (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">What We Do</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Renovation Services You Can Count On
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From finish carpentry to flooring, paint, and drywall — we deliver craftsmanship-level work on every project.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 secondary-color group"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground primary-color mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-primary-foreground/80 primary-color">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary secondary-color hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {services.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border border-secondary text-secondary secondary-color hover:bg-secondary/10 transition-colors"
            style={{ borderRadius: "10px" }}
          >
            {expanded ? (
              <>Show Less <ChevronUp className="w-5 h-5" /></>
            ) : (
              <>Show All Services <ChevronDown className="w-5 h-5" /></>
            )}
          </button>
        </div>
      )}
    </div>
  </section>
  );
};

export default ServicesSection;
