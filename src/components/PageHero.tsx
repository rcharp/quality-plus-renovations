import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  tagline?: string;
  backgroundImage: string;
}

const PageHero = ({ eyebrow, title, highlight, tagline, backgroundImage }: PageHeroProps) => (
  <section className="relative overflow-hidden max-w-[100vw]">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-20 lg:pb-28 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {eyebrow && (
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-[0.25em] secondary-color">
            {eyebrow}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-primary-foreground primary-color">
          {title}
          {highlight && (
            <>
              <br />
              <span className="hero-highlighted bg-accent text-primary-foreground primary-color px-[5px]">
                {highlight}
              </span>
            </>
          )}
        </h1>
        {tagline && (
          <p className="text-lg lg:text-xl text-primary-foreground/80 primary-color max-w-2xl mx-auto leading-relaxed">
            {tagline}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;