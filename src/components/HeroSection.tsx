import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import QuoteForm from "./QuoteForm";
import heroBg from "@/assets/qpr/hero-bg.jpg";
import reviewer1 from "@/assets/reviewers/reviewer-1.jpg";
import reviewer2 from "@/assets/reviewers/reviewer-2.jpg";
import reviewer3 from "@/assets/reviewers/reviewer-3.jpg";
import reviewer4 from "@/assets/reviewers/reviewer-4.jpg";

const reviewerImages = [reviewer1, reviewer2, reviewer3, reviewer4];

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
    <section className="relative overflow-hidden max-w-[100vw]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 lg:px-8 pt-[260px] sm:pt-[382px] lg:pt-[320px] lg:mt-8 pb-16 lg:pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-primary-foreground primary-color text-center lg:text-left">
                <span className="relative z-10">Built with</span>
                <br />
                <span id="hero-highlighted" className="hero-highlighted relative z-0 text-primary-foreground primary-color bg-accent px-[5px]">Craftsmanship.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-foreground/70 primary-color max-w-lg leading-relaxed break-words"
            >
              From finish carpentry and custom built-ins to trim, flooring, paint, and drywall — we treat every home like our own. Owner-operated, no subcontracting, and honest work from start to finish.
              <br /><br />
              <strong>Quality Plus Renovations</strong> is a family-owned home improvement specialist proudly serving Bradenton, Sarasota, Lakewood Ranch, and Manatee County, FL.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex -space-x-2">
                {reviewerImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Happy customer ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-primary primary-color object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent secondary-color" />
                  ))}
                </div>
                <span className="text-base text-primary-foreground/70 primary-color">Trusted by dozens of happy customers!</span>
              </div>
            </motion.div>

            {/* Review badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground primary-color">Google</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent secondary-color" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground primary-color">Facebook</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent secondary-color" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
            className="w-full lg:w-[520px] lg:ml-auto"
          >
            <QuoteForm id="hero-quote-form" style={{ backgroundColor: "rgba(26, 26, 26, 0.6)", border: "2px solid hsl(43, 80%, 50%)" }} />
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
