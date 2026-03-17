import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import garageBefore1 from "@/assets/gallery/garage-before-1.jpg";
import garageAfter1 from "@/assets/gallery/garage-after-1.jpg";
import garageBefore2 from "@/assets/gallery/garage-before-2.jpg";
import garageAfter2 from "@/assets/gallery/garage-after-2.jpg";
import commercialBefore from "@/assets/gallery/commercial-before.jpg";
import commercialAfter from "@/assets/gallery/commercial-after.jpg";

const galleryItems = [
  { src: garageBefore1, label: "Garage Cleanout – Before" },
  { src: garageAfter1, label: "Garage Cleanout – After" },
  { src: garageBefore2, label: "Full Garage Removal – Before" },
  { src: garageAfter2, label: "Full Garage Removal – After" },
  { src: commercialBefore, label: "Commercial Cleanout – Before" },
  { src: commercialAfter, label: "Commercial Cleanout – After" },
];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider">Our Work</span>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/gallery">
          <Button variant="secondary" size="lg" className="group text-lg px-10 py-6 h-auto">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
