import { Percent, CreditCard, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import offersBg from "@/assets/service-construction-debris.jpg";

const offers = [
  {
    icon: Percent,
    title: "15% Off First Haul",
    description: "New customers get 15% off their first junk removal job. No minimum load required.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees. We quote based on volume — you only pay for the space your junk takes up in our truck.",
  },
  {
    icon: Search,
    title: "Free On-Site Estimate",
    description: "Not sure how much it'll cost? We'll come to you and give a free, no-obligation quote on the spot.",
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
              className="rounded-2xl p-8 card-elevated border-2 text-center backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-xl"
              style={{ backgroundColor: "hsl(225, 55%, 14%)", borderColor: "hsl(225, 55%, 35%)" }}
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
