import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const galleryItems: { src: string; label: string; span?: string }[] = [
  { src: cofferedFinished, label: "Coffered Ceiling — Great Room", span: "lg:col-span-2 lg:row-span-2" },
  { src: builtinNavyLibrary, label: "Custom Navy Library Built-in" },
  { src: barnDoorsTriple, label: "Triple Custom Barn Doors" },
  { src: stoneFireplaceTv, label: "Stone Fireplace with TV Wall", span: "lg:col-span-2" },
  { src: slatFireplaceFinished, label: "Slat Wall Fireplace Feature" },
  { src: kitchenModernIsland, label: "Modern Kitchen Island" },
  { src: cofferedMaster, label: "Master Bedroom Coffered Ceiling" },
  { src: entertainmentLed, label: "LED Entertainment Center" },
  { src: barnDoorBlue, label: "Blue Custom Barn Door" },
  { src: hallwayShiplapBarn, label: "Shiplap Hallway with Barn Door" },
  { src: stoneFireplaceMantel, label: "Stone Fireplace & Mantel" },
  { src: bedroomWainscoting, label: "Bedroom Wainscoting" },
  { src: builtinBunkBed, label: "Custom Built-in Bunk Bed", span: "lg:col-span-2" },
  { src: kitchenWhitePendants, label: "White Kitchen with Pendants" },
  { src: slatRangeHood, label: "Slat Range Hood" },
  { src: tvNiche, label: "TV Niche with Floating Shelf" },
  { src: mirroredBarnDoor, label: "Mirrored Barn Door" },
  { src: barnDoorChevron, label: "Chevron Pattern Barn Door" },
  { src: stairWainscoting, label: "Stairway Wainscoting" },
  { src: fireplaceMantelTv, label: "Fireplace Mantel & TV" },
  { src: cofferedInProgress, label: "Coffered Ceiling Build" },
  { src: bedroomChandelier, label: "Bedroom Trim & Chandelier" },
  { src: doorwayTrim, label: "Doorway Trim Detail" },
  { src: entertainmentProgress, label: "Entertainment Center Build" },
  { src: pantryShelving, label: "Custom Pantry Shelving" },
  { src: garageFinished, label: "Finished Garage Interior" },
];

interface GallerySectionProps {
  /** When true (default), only show a preview + "see all our work" link. Set false for the full /gallery page. */
  preview?: boolean;
  /** When true, show the section heading. */
  showHeader?: boolean;
}

const GallerySection = ({ preview = true, showHeader = true }: GallerySectionProps) => {
  const items = preview ? galleryItems.slice(0, 6) : galleryItems;

  const beforeAfters = [
    {
      before: cofferedInProgress,
      after: cofferedFinished,
      caption: "Coffered Ceiling — framing to finished great room",
    },
    {
      before: entertainmentProgress,
      after: entertainmentLed,
      caption: "Entertainment Center — rough build to LED-lit reveal",
    },
    {
      before: barnDoorFraming,
      after: barnDoorsTriple,
      caption: "Custom Barn Doors — opening framed to triple-door install",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl overflow-hidden relative group border border-border ${item.span ?? ""}`}
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
          <span className="text-base font-semibold text-primary uppercase tracking-wider primary-color">
            Before &amp; After
          </span>
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Drag to See the Transformation
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default GallerySection;
