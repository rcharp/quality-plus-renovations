import { Hammer, CreditCard, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import offersBg from "@/assets/qpr/offers-bg.webp";

const offers = [
  {
    icon: Hammer,
    title: "Owner On Every Job",
    description: "Yevgeniy is on-site for every project. No subcontractors — just hands-on craftsmanship from start to finish.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Detailed, no-surprise quotes. You'll know exactly what your project costs before we pick up a single tool.",
  },
  {
    icon: Search,
    title: "Free In-Home Estimate",
    description: "We come out, walk the project with you, and provide a free, no-obligation quote tailored to your home.",
  },
];

const SpecialOffers = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${offersBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">Limited Time</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground primary-color mt-3">
            Special Offers & Benefits
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              onClick={openQuoteModal}
              className="rounded-2xl p-8 card-elevated border border-secondary/30 secondary-color text-center backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-xl"
              style={{ backgroundColor: "rgba(26, 26, 26, 0.6)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 secondary-color flex items-center justify-center mx-auto mb-6">
                <offer.icon className="w-7 h-7 text-secondary secondary-color" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground primary-color mb-3">{offer.title}</h3>
              <p className="text-base text-primary-foreground/70 primary-color leading-relaxed">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
