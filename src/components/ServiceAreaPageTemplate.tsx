import { useEffect } from "react";
import { MapPin, Phone, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useSEO from "@/hooks/useSEO";
import { ServiceAreaData } from "@/data/serviceAreas";
import { services } from "@/data/services";
import heroBg from "@/assets/qpr/hero-bg.jpg";
import { useQuoteModal } from "@/components/QuoteModal";

interface ServiceAreaPageTemplateProps {
  area: ServiceAreaData;
}

const ServiceAreaPageTemplate = ({ area }: ServiceAreaPageTemplateProps) => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: area.metaTitle,
    description: area.metaDescription,
    canonical: `https://qualityplusrenovations.com/service-areas/${area.slug}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area.slug]);

  const featured = services.slice(0, 6);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <PageHero
          eyebrow="Service Area"
          title={`Serving ${area.fullName}`}
          tagline={area.heroTagline}
          backgroundImage={heroBg}
        />

        <TrustBadges />

        {/* Overview + Quote Form */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                  Local Renovations
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  Carpentry & Renovations in {area.city}
                </h2>
                {area.overview.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {p}
                  </p>
                ))}

                <div className="pt-4">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Why {area.city} Homeowners Choose Us
                  </h3>
                  <ul className="space-y-3">
                    {area.whyLocal.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-base text-foreground">
                        <Check className="w-5 h-5 text-secondary secondary-color mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={openQuoteModal}
                    className="px-6 py-3 text-base font-semibold hover:opacity-90 secondary-color transition-opacity"
                    style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href="tel:+19414059695"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    style={{ borderRadius: "10px" }}
                  >
                    <Phone className="w-4 h-4" /> (941) 405-9695
                  </a>
                </div>
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

        {/* Neighborhoods */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                Neighborhoods Served
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-3">
                {area.city} Areas We Cover
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {area.neighborhoods.map((n) => (
                <div
                  key={n}
                  className="rounded-xl bg-card border border-border p-4 flex items-center gap-3 card-elevated"
                >
                  <MapPin className="w-4 h-4 text-secondary secondary-color shrink-0" />
                  <span className="text-base text-foreground font-medium">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services in this area */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                What We Offer
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-3">
                Services Available in {area.city}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-card card-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {s.shortTitle}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-secondary secondary-color font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 450 }}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${area.fullName}`}
              />
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                FAQ
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-3">
                Serving {area.city}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {area.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="font-heading font-semibold text-base lg:text-lg text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPageTemplate;