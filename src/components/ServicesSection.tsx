import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Junk Removal",
    href: "#",
    features: [
      "Old furniture & appliance hauling",
      "Garage, attic & basement cleanouts",
      "Estate & foreclosure cleanups",
      "Same-day pickup available",
    ],
  },
  {
    title: "Commercial Junk Removal",
    href: "#",
    features: [
      "Office furniture & equipment removal",
      "Retail & warehouse cleanouts",
      "Bulk item disposal",
      "Scheduled recurring pickups",
    ],
  },
  {
    title: "Construction Debris Removal",
    href: "#",
    features: [
      "Lumber, drywall & concrete hauling",
      "Renovation & remodel cleanup",
      "Job site debris removal",
      "Responsible disposal & recycling",
    ],
  },
  {
    title: "Yard Waste Removal",
    href: "#",
    features: [
      "Tree branch & brush removal",
      "Storm debris cleanup",
      "Landscaping waste hauling",
      "Green waste recycling",
    ],
  },
];

const ServicesSection = () => (
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
          Junk Removal Services You Can Count On
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From single-item pickups to full property cleanouts, we handle it all with speed and care.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
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
                href={service.href}
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary secondary-color hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
