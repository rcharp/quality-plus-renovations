import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import useSEO from "@/hooks/useSEO";
import heroBg from "@/assets/qpr/hero-bg.jpg";

const Contact = () => {
  useSEO({
    title: "Contact Quality Plus Renovations | Bradenton FL",
    description: "Get in touch with Quality Plus Renovations for finish carpentry, built-ins, flooring, and renovations in Bradenton, Lakewood Ranch, and Sarasota, FL.",
    canonical: "https://qualityplusrenovations.com/contact",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="container mx-auto px-4 lg:px-8 pt-[320px] sm:pt-[360px] lg:pt-[280px] pb-20 lg:pb-28 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-5">
              <span className="inline-block text-base font-semibold uppercase tracking-[0.25em] secondary-color text-secondary">
                Get In Touch
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                Contact Us
              </h1>
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
                Ready to start your renovation or have a question? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-5">
                  <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">
                    Let's Talk
                  </span>
                  <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                    We'd love to hear from you
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you need <a href="/services/finish-carpentry" className="text-secondary secondary-color font-semibold hover:underline">finish carpentry</a>, a custom <a href="/services/built-ins" className="text-secondary secondary-color font-semibold hover:underline">built-in</a>, new <a href="/services/lvp-flooring" className="text-secondary secondary-color font-semibold hover:underline">flooring</a>, or a full home renovation — reach out and we'll get back to you as quickly as possible.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary secondary-color" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">Phone</h3>
                      <a href="tel:+19414059695" className="text-base text-muted-foreground hover:text-secondary secondary-color transition-colors">
                        (941) 405-9695
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary secondary-color" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:rs4man@gmail.com" className="text-base text-muted-foreground hover:text-secondary secondary-color transition-colors break-all">
                        rs4man@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary secondary-color" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">Service Area</h3>
                      <p className="text-base text-muted-foreground">
                        Bradenton, Lakewood Ranch, Sarasota & Manatee County, FL
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary secondary-color" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">Hours</h3>
                      <p className="text-base text-muted-foreground">
                        Monday – Saturday: 7:00 AM – 7:00 PM<br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Quality+Plus+Renovations+Bradenton+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-secondary secondary-color hover:underline pt-2"
                >
                  Open in Maps <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
