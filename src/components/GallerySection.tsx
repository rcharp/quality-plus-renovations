import { motion } from "framer-motion";

import imgFinish from "@/assets/qpr/svc-finish-carpentry.jpg";
import imgBuiltins from "@/assets/qpr/svc-builtins.jpg";
import imgTrim from "@/assets/qpr/svc-trim.jpg";
import imgBeams from "@/assets/qpr/svc-beams.jpg";
import imgCoffered from "@/assets/qpr/svc-coffered.jpg";
import imgBarn from "@/assets/qpr/svc-barn-door.jpg";
import imgIntPaint from "@/assets/qpr/svc-int-paint.jpg";
import imgLvp from "@/assets/qpr/svc-lvp.jpg";
import imgDrywall from "@/assets/qpr/svc-drywall.jpg";

const galleryItems = [
  { src: imgFinish, label: "Finish Carpentry" },
  { src: imgBuiltins, label: "Custom Built-ins" },
  { src: imgTrim, label: "Trim & Molding" },
  { src: imgBeams, label: "Faux Beams" },
  { src: imgCoffered, label: "Coffered Ceilings" },
  { src: imgBarn, label: "Custom Barn Doors" },
  { src: imgIntPaint, label: "Interior Painting" },
  { src: imgLvp, label: "LVP Flooring" },
  { src: imgDrywall, label: "Drywall Work" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          See Us In Action
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl overflow-hidden aspect-square relative group border border-border"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
              <span className="text-white font-semibold text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
