import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            A Family Legacy of Craftsmanship.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Quality Plus Renovations is a family-owned business specializing in finish carpentry, with a passion for craftsmanship inherited through generations. We're committed to working our hardest and delivering exceptional results, inspired by a legacy of skilled workmanship and dedication.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our owner, <strong>Yevgeniy Turko</strong>, upholds values of honesty, integrity, and commitment, ensuring every project reflects our high standards. We take pride in creating beautiful, lasting solutions for your home, treating each client with the respect and professionalism they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 primary-color flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary primary-color" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">Bradenton, FL</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 primary-color flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary primary-color" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+19414059695" className="text-base font-semibold text-foreground hover:text-primary primary-color transition-colors">
                  (941) 405-9695
                </a>
              </div>
           </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-secondary secondary-color font-semibold hover:gap-3 transition-all mt-2">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 450 }}>
            <iframe
              src="https://www.google.com/maps?q=14254+59th+Cir+E,+Bradenton,+FL+34211&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quality Plus Renovations location on Google Maps"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
