import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import cofferedFinished from "@/assets/qpr/gallery/coffered-finished.webp";
import cofferedMaster from "@/assets/qpr/gallery/coffered-master.webp";
import cofferedInProgress from "@/assets/qpr/gallery/coffered-in-progress.webp";
import builtinNavyLibrary from "@/assets/qpr/gallery/builtin-navy-library.webp";
import builtinBunkBed from "@/assets/qpr/gallery/builtin-bunk-bed.webp";
import entertainmentLed from "@/assets/qpr/gallery/entertainment-center-led.webp";
import entertainmentProgress from "@/assets/qpr/gallery/entertainment-center-progress.webp";
import tvNiche from "@/assets/qpr/gallery/tv-niche-floating-shelf.webp";
import barnDoorsTriple from "@/assets/qpr/gallery/barn-doors-triple.webp";
import barnDoorBlue from "@/assets/qpr/gallery/barn-door-blue.webp";
import barnDoorChevron from "@/assets/qpr/gallery/barn-door-chevron.webp";
import barnDoorFraming from "@/assets/qpr/gallery/barn-door-framing.webp";
import mirroredBarnDoor from "@/assets/qpr/gallery/mirrored-barn-door.webp";
import hallwayShiplapBarn from "@/assets/qpr/gallery/hallway-shiplap-barn.webp";
import stoneFireplaceTv from "@/assets/qpr/gallery/stone-fireplace-tv.webp";
import stoneFireplaceMantel from "@/assets/qpr/gallery/stone-fireplace-mantel.webp";
import fireplaceMantelTv from "@/assets/qpr/gallery/fireplace-mantel-tv.webp";
import slatFireplaceFinished from "@/assets/qpr/gallery/slat-fireplace-finished.webp";
import slatRangeHood from "@/assets/qpr/gallery/slat-range-hood.webp";
import kitchenModernIsland from "@/assets/qpr/gallery/kitchen-modern-island.webp";
import kitchenWhitePendants from "@/assets/qpr/gallery/kitchen-white-pendants.webp";
import bedroomWainscoting from "@/assets/qpr/gallery/bedroom-wainscoting.webp";
import stairWainscoting from "@/assets/qpr/gallery/stair-wainscoting.webp";
import bedroomChandelier from "@/assets/qpr/gallery/bedroom-chandelier.webp";
import doorwayTrim from "@/assets/qpr/gallery/doorway-trim.webp";
import pantryShelving from "@/assets/qpr/gallery/pantry-shelving.webp";
import garageFinished from "@/assets/qpr/gallery/garage-finished.webp";
import cofferedLivingroomBefore from "@/assets/qpr/gallery/coffered-livingroom-before.png";
import cofferedLivingroomAfter from "@/assets/qpr/gallery/coffered-livingroom-after.png";

const galleryItems: { src: string; label: string; span?: string }[] = [
  // Coffered Ceilings
  { src: cofferedFinished, label: "Coffered Ceiling — Great Room", span: "lg:col-span-2 lg:row-span-2" },
  { src: cofferedMaster, label: "Master Bedroom Coffered Ceiling" },
  { src: cofferedInProgress, label: "Coffered Ceiling Build" },

  // Built-Ins & Entertainment Centers
  { src: builtinNavyLibrary, label: "Custom Navy Library Built-in" },
  { src: builtinBunkBed, label: "Custom Built-in Bunk Bed", span: "lg:col-span-2" },
  { src: entertainmentLed, label: "LED Entertainment Center" },
  { src: entertainmentProgress, label: "Entertainment Center Build" },
  { src: tvNiche, label: "TV Niche with Floating Shelf" },
  { src: pantryShelving, label: "Custom Pantry Shelving" },

  // Barn Doors
  { src: barnDoorsTriple, label: "Triple Custom Barn Doors" },
  { src: barnDoorBlue, label: "Blue Custom Barn Door" },
  { src: barnDoorChevron, label: "Chevron Pattern Barn Door" },
  { src: mirroredBarnDoor, label: "Mirrored Barn Door" },
  { src: hallwayShiplapBarn, label: "Shiplap Hallway with Barn Door" },

  // Fireplaces
  { src: stoneFireplaceTv, label: "Stone Fireplace with TV Wall", span: "lg:col-span-2" },
  { src: stoneFireplaceMantel, label: "Stone Fireplace & Mantel" },
  { src: fireplaceMantelTv, label: "Fireplace Mantel & TV" },
  { src: slatFireplaceFinished, label: "Slat Wall Fireplace Feature" },

  // Kitchens
  { src: kitchenModernIsland, label: "Modern Kitchen Island" },
  { src: kitchenWhitePendants, label: "White Kitchen with Pendants" },
  { src: slatRangeHood, label: "Slat Range Hood" },

  // Wainscoting & Trim
  { src: bedroomWainscoting, label: "Bedroom Wainscoting" },
  { src: stairWainscoting, label: "Stairway Wainscoting" },
  { src: bedroomChandelier, label: "Bedroom Trim & Chandelier" },
  { src: doorwayTrim, label: "Doorway Trim Detail" },

  // Other
  { src: garageFinished, label: "Finished Garage Interior" },
];

interface GallerySectionProps {
  /** When true (default), only show a preview + "see all our work" link. Set false for the full /gallery page. */
  preview?: boolean;
  /** When true, show the section heading. */
  showHeader?: boolean;
}

const GallerySection = ({ preview = true, showHeader = true }: GallerySectionProps) => {
  const items = preview ? galleryItems.slice(0, 12) : galleryItems;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, items.length]);

  const beforeAfters = [
    {
      before: cofferedLivingroomBefore,
      after: cofferedLivingroomAfter,
      caption: "Living Room Coffered Ceiling — flat tray to custom coffered design",
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {showHeader && (
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
        )}

        <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              className={`rounded-xl overflow-hidden relative group border border-border cursor-pointer ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
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

        {/* Before / After sliders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-10"
        >
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            Before &amp; After
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {beforeAfters.map((ba, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BeforeAfterSlider {...ba} />
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="flex justify-center mt-14">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border border-secondary text-secondary secondary-color hover:bg-secondary/10 transition-colors"
              style={{ borderRadius: "10px" }}
            >
              See All Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].label}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white text-base font-medium text-center">
                {items[lightboxIndex].label}{" "}
                <span className="text-white/50">— {lightboxIndex + 1} / {items.length}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
