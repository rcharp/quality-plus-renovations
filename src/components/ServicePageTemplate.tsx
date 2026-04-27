import { useEffect } from "react";
import { Check, Phone, ArrowRight } from "lucide-react";
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
import { ServiceData, services } from "@/data/services";
import { useQuoteModal } from "@/components/QuoteModal";
import heroBg from "@/assets/qpr/hero-bg.jpg";

interface ServicePageTemplateProps {
  service: ServiceData;
}

const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `https://qualityplusrenovations.com/services/${service.slug}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <PageHero
          eyebrow="Our Services"
          title={service.shortTitle}
          tagline={service.heroTagline}
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
                  Overview
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                {service.overview.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {p}
                  </p>
                ))}

                <div className="pt-4">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
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

        {/* Process */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
                Our Process
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-3">
                How We Work
              </h2>
              <p className="text-muted-foreground mt-4">
                Honest, organized, and predictable from your first call to final walkthrough.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-card p-6 card-elevated border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/15 secondary-color flex items-center justify-center mb-4">
                    <span className="font-heading font-bold text-secondary secondary-color">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.step}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
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
                {service.shortTitle} Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, i) => (
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

        {/* Related services */}
        <section className="py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Other Services You May Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-card card-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {r.shortTitle}
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

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;