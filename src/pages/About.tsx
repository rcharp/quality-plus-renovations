import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ArrowRight, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuoteModal } from "@/components/QuoteModal";
import useSEO from "@/hooks/useSEO";
import heroBg from "@/assets/qpr/hero-bg.jpg";

const About = () => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: "About Quality Plus Renovations | Family-Owned Bradenton FL",
    description: "Family-owned, owner-operated finish carpentry & home renovation company serving Bradenton, Lakewood Ranch, Sarasota & Manatee County, FL.",
    canonical: "https://qualityplusrenovations.com/about",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Family-owned and owner-operated",
    "Years of finish carpentry experience",
    "Fully insured for residential & commercial work",
    "Custom built-ins, trim, and barn doors",
    "Expert LVP, laminate & glue-down flooring installs",
    "Honest pricing and on-time communication",
  ];

  const services = [
    { label: "Finish Carpentry — built-ins, trim, mantels", href: "/services/finish-carpentry" },
    { label: "Custom Barn Doors — space-saving statement pieces", href: "/services/custom-barn-doors" },
    { label: "Coffered Ceilings & Faux Beams — architectural depth", href: "/services/coffered-ceilings" },
    { label: "Interior & Exterior Painting — lasting Florida finishes", href: "/services/interior-painting" },
    { label: "LVP & Laminate Flooring — waterproof, durable installs", href: "/services/lvp-flooring" },
    { label: "Drywall Work & Repair — invisible patches and finishes", href: "/services/drywall-repair" },
  ];

  const areas = [
    { label: "Bradenton, FL", href: "/service-areas/bradenton-fl" },
    { label: "Lakewood Ranch, FL", href: "/service-areas/lakewood-ranch-fl" },
    { label: "Sarasota, FL", href: "/service-areas/sarasota-fl" },
    { label: "Manatee County, FL", href: "/service-areas/manatee-county-fl" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden max-w-[100vw]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-20 lg:pb-28 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-5">
              <span className="inline-block text-base font-semibold uppercase tracking-[0.25em] secondary-color text-secondary">
                Who We Are
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                About Quality Plus Renovations
              </h1>
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
                Family-owned, community-driven finish carpentry & home renovation services you can count on.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Owner */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden"
              >
                <div className="text-center text-muted-foreground">
                  <User className="w-20 h-20 mx-auto mb-3 opacity-40" />
                  <p className="text-sm uppercase tracking-wider">Your Photo Here</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">
                  Meet the Owner
                </span>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Hey, I'm Yevgeniy Turko!
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I grew up around finish carpentry, learning the craft from family at a young age. Over the years I've expanded my expertise across built-ins, trim, custom barn doors, flooring, drywall, and painting — building a reputation for clean, detail-driven work.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Quality Plus Renovations, we're a family-owned and operated business. My commitment is simple: expert workmanship, fair pricing, and making sure you're completely satisfied with every project. When you call us, you're not just getting a contractor — you're getting a neighbor who cares about your home.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 lg:py-28 bg-card/40 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">
                  What We Do
                </span>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Top-Quality Materials &amp; Exceptional Craftsmanship
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We only use industry-leading materials and finishes. Our team is committed to expert, reliable, and affordable service on every project — from a single barn door to a full-home renovation.
                </p>
                <ul className="space-y-3 pt-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 text-secondary secondary-color shrink-0" />
                      <span className="text-base text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl bg-background border border-border flex items-center justify-center"
              >
                <div className="text-center text-muted-foreground">
                  <User className="w-20 h-20 mx-auto mb-3 opacity-40" />
                  <p className="text-sm uppercase tracking-wider">Your Work Photo Here</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-10"
            >
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive finish carpentry and renovation solutions for homes throughout Manatee &amp; Sarasota County.
              </p>
            </motion.div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card hover:border-secondary/50 transition-colors"
                  >
                    <span className="text-base font-medium text-foreground">{s.label}</span>
                    <ArrowRight className="w-4 h-4 text-secondary secondary-color group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-20 lg:py-28 bg-card/40 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-10"
            >
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Areas We Serve
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proudly serving these communities and beyond.{" "}
                <a href="/#contact" className="text-secondary secondary-color font-semibold hover:underline">
                  Contact us
                </a>{" "}
                to see if we cover your area.
              </p>
            </motion.div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    to={a.href}
                    className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-background hover:border-secondary/50 transition-colors"
                  >
                    <span className="text-base font-medium text-foreground">{a.label}</span>
                    <ArrowRight className="w-4 h-4 text-secondary secondary-color group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6 p-10 lg:p-14 rounded-2xl border border-border bg-card"
            >
              <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">
                Get Started
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help you transform your home. Call us or request a free quote today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="tel:+19414059695"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold border border-secondary text-secondary secondary-color hover:bg-secondary/10 transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" /> (941) 405-9695
                </a>
                <button
                  onClick={openQuoteModal}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;