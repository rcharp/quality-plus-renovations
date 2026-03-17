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
          <span className="text-base font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Family Owned. Locally Operated.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We've proudly served our local community for years, providing fast, affordable, and reliable junk removal services. As a locally owned and operated family business, we treat every property with respect. No corporate runaround — just honest, hardworking people who show up on time and get the job done.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's a single piece of furniture or a full estate cleanout, our crew handles the heavy lifting so you don't have to. We recycle and donate whenever possible because we care about our community and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">123 Main Street, Anytown, FL 34000</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+19413132326" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                  (941) 313-2326
                </a>
              </div>
           </div>
          </div>
          <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center" style={{ height: 450 }}>
            <div className="text-center text-muted-foreground p-8">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">Your Google Map Here</p>
              <p className="text-sm mt-2">Replace with your business location embed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
