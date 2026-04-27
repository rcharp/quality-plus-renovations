import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Tag, Clock, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsSection from "@/components/TestimonialsSection";
import useSEO from "@/hooks/useSEO";
import offersBg from "@/assets/qpr/offers-bg.jpg";

const perks = [
  {
    icon: Tag,
    title: "10% Off Your First Project",
    description: "Save 10% on any service — finish carpentry, built-ins, flooring, paint, or drywall. Applies to your first project with us.",
  },
  {
    icon: ShieldCheck,
    title: "Free In-Home Estimate",
    description: "We come to you, walk the project, and provide a clear, no-obligation written quote.",
  },
  {
    icon: Clock,
    title: "Limited Time",
    description: "Lock in your discount by submitting the form below. We'll honor your rate when you book.",
  },
];

const terms = [
  "Valid for new customers only",
  "Applies to your first project booked with Quality Plus Renovations",
  "Cannot be combined with other promotions",
  "Available across Bradenton, Sarasota, Lakewood Ranch, and Manatee County, FL",
  "Must mention this offer when scheduling your in-home estimate",
];

const GetYourDiscount = () => {
  useSEO({
    title: "Get 10% Off Your First Project | Quality Plus Renovations",
    description: "New customers save 10% on finish carpentry, built-ins, flooring, paint, and drywall projects in Bradenton, Sarasota & Lakewood Ranch, FL.",
    canonical: "https://qualityplusrenovations.com/get-your-discount",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <PageHero
          eyebrow="New Customer Offer"
          title="Get 10% Off"
          highlight="Your First Project."
          tagline="A simple thank-you for choosing Quality Plus Renovations. Submit the form to claim your discount."
          backgroundImage={offersBg}
        />

        <TrustBadges />

        {/* Perks + Form */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                    What You Get
                  </span>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
                    A Simple Thank-You for Trying Us Out
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                    We earn most of our work through referrals — so when a new customer takes a chance on us, we want to make it worth it. Get 10% off your first project, no fine print.
                  </p>
                </div>

                <div className="space-y-5">
                  {perks.map((p) => (
                    <div key={p.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 secondary-color flex items-center justify-center shrink-0">
                        <p.icon className="w-6 h-6 text-secondary secondary-color" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed mt-1">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-muted p-6 border border-border">
                  <h4 className="font-heading text-base font-bold text-foreground uppercase tracking-wider mb-3">
                    Offer Details
                  </h4>
                  <ul className="space-y-2">
                    {terms.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary secondary-color mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="tel:+19414059695"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-4 h-4" /> Or call (941) 405-9695
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-8"
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default GetYourDiscount;