import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import logo from "@/assets/qpr-logo.jpeg";

const testimonials = [
  {
    text: "Yevgeniy and his team built custom built-ins for our living room and the craftsmanship is incredible. Every detail was perfect — clean lines, smooth finish, and they left the space spotless. Highly recommend!",
    name: "Jessica T.",
    rating: 5,
  },
  {
    text: "We hired Quality Plus to install LVP flooring throughout our home and add new baseboards. The work is flawless and they finished ahead of schedule. Honest, professional, and truly skilled.",
    name: "Michael B.",
    rating: 5,
  },
  {
    text: "Coffered ceiling and faux beams in our great room — absolutely stunning. The attention to detail is on another level. You can tell this is a family business that takes real pride in their work.",
    name: "Amanda K.",
    rating: 5,
  },
  {
    text: "Custom barn door for our master bedroom turned out beautifully. Yevgeniy was easy to work with, transparent on pricing, and the install was quick and clean. Will definitely hire again for our next project.",
    name: "David R.",
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

        {/* Carousel with logo */}
        <div className="max-w-4xl mx-auto relative flex items-start gap-8">
          {/* Logo */}
          <div className="hidden lg:flex shrink-0 items-center justify-center">
            <img src={logo} alt="Quality Plus Renovations Logo" className="w-auto rounded-xl" style={{ height: '240px' }} />
          </div>

          <div className="flex-1 relative">
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
