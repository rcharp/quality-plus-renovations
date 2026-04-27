import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";

const CTASection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">Get Started</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Ready to Start Your Renovation?
          </h2>
          <p className="text-lg text-muted-foreground">
            Call us or request a free in-home estimate today. Honest craftsmanship, start to finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19414059695"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground secondary-color font-semibold hover:opacity-90 transition-opacity"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-5 h-5" />
              (941) 405-9695
            </a>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold hover:opacity-90 secondary-color transition-opacity"
              style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
