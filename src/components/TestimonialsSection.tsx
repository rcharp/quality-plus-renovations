import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

const testimonials = [
  {
    text: "Eugene is extremely talented and meticulous in his work. He built a stone wall with side panels that included a pull out drawer for a DVD player. He mounted a TV, built a beautiful mantle with an electric fireplace below. His craftsmanship is outstanding.",
    name: "Merri Jo Gamble",
    rating: 5,
  },
  {
    text: "I had the pleasure of working with Eugene on two separate projects for different clients, and I can't recommend him highly enough. From start to finish, Eugene demonstrated an incredible work ethic, attention to detail, and talent.",
    name: "Amber Capaccio",
    rating: 5,
  },
  {
    text: "We couldn't be happier with the built-in entertainment center Eugene built for us. He was communicative throughout the entire process and genuinely pleasant to work with. His workmanship is top-notch, and he took extra care to ensure every detail was perfect.",
    name: "Lauren Shallenberger",
    rating: 5,
  },
  {
    text: "Eugene is one of the best around. Our General Contractor hired some inexperienced people to work on our home that did a shotty job. Eugene came in and rescued the project and fixed all their mistakes. His communication made the whole process easier.",
    name: "Alexander Akers",
    rating: 5,
  },
  {
    text: "Eugene made our vision come to life and we couldn't be happier with the work he and his brother-in-law did. We had an oversized opening to our front room we wanted closed off to make into a home office. They finished off with a complete interior paint of our home as well.",
    name: "Chelsi Svac",
    rating: 5,
  },
  {
    text: "Eugene did an outstanding job with our drywall and painting project! His craftsmanship, attention to detail, and professionalism were top notch from start to finish. He worked efficiently, kept the space clean, and delivered results that exceeded our expectations. We highly recommend Eugene to anyone looking for quality work.",
    name: "Matthew Kibort",
    rating: 5,
  },
  {
    text: "Eugene is one of a kind. They are very dedicated and always on time. The quality of the work is truly impressive. Not only do they deliver top grade product, they communicate the timeline and get it done as promised.",
    name: "Kristopher Leonard",
    rating: 5,
  },
  {
    text: "Quality Plus Renovations was the best! Eugene made our vision of built ins for our son's room a beautiful reality. He was honest, meticulous and his communication made it so easy. We are beyond happy! Just call, I promise you won't regret it.",
    name: "Sommer Dushac",
    rating: 5,
  },
  {
    text: "Eugene was excellent! Very kind and easy to work with. Very high quality! He even noticed a few spots I forgot to mention and went ahead and took care of them. He had patched drywall, fixed baseboards, and painted an entire room in one day!",
    name: "Allie Kautzer",
    rating: 5,
  },
  {
    text: "Eugene and Vlad are the best! They just completed several projects in my newer construction home including closing in a flex room and building a custom barn door. I'm hiring them to come back for additional projects asap!",
    name: "Lynn Wight",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">Testimonials</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Customers across the Bradenton Metro trust Quality Plus Renovations
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent secondary-color" />
              ))}
            </div>
            <span className="text-base text-muted-foreground font-medium">5.0 Rating</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-10 card-elevated border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/15 secondary-color absolute top-8 right-8" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent secondary-color" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center font-heading font-bold text-secondary secondary-color text-base">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonials[current].name}</div>
                  <div className="text-sm text-muted-foreground">Verified Customer</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary secondary-color" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ9TFpKko5w4gRF3KmhlNgx_o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-secondary secondary-color hover:underline"
            >
              See All Reviews →
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
