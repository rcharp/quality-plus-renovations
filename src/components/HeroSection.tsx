import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import QuoteForm from "./QuoteForm";
import heroBg from "@/assets/service-yard-waste.jpg";
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

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-center lg:text-left">
                Your Junk,
                <br />
                <span className="text-secondary-color">Gone Fast.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed break-words"
            >
              Got clutter, old furniture, or construction debris piling up? We handle the heavy lifting so you don't have to. Fast, affordable, and eco-friendly junk removal.
              <br /><br />
              <strong>Nick's Property Services</strong> has been providing reliable junk hauling and removal services for homes and businesses in the Apollo Beach, FL area.
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
                    className="w-9 h-9 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-base text-primary-foreground/70">Trusted by dozens of happy customers!</span>
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
                <span className="text-base font-semibold text-primary-foreground">Google</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground">Facebook</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
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
            <QuoteForm style={{ backgroundColor: "rgba(26, 26, 26, 0.6)" }} />
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
