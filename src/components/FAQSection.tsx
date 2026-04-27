import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Quality Plus Renovations offer?",
    a: "We specialize in finish carpentry — built-ins, trim work, faux beams, coffered ceilings, and custom barn doors — plus interior and exterior painting, LVP/laminate/glue-down flooring, and drywall work and repair.",
  },
  {
    q: "Do you subcontract work out?",
    a: "Never. Quality Plus Renovations is owner-operated, and Yevgeniy is on every job. You get one consistent crew committed to the same high standard from start to finish.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Bradenton, Sarasota, Lakewood Ranch, and the rest of Manatee County, FL. If you're nearby and not sure, give us a call — we'll let you know.",
  },
  {
    q: "How does pricing work?",
    a: "We provide free in-home estimates and detailed, transparent quotes before any work begins. No surprise charges — you know what your project costs up front.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A custom barn door or trim project may take a day or two; full-room paint, flooring, or built-ins typically run several days to a couple weeks. We'll give you a clear timeline with your quote.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Quality Plus Renovations is fully licensed and insured. Your home and project are protected on every job.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28" style={{ backgroundColor: "#1a1a1a" }}>
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground primary-color mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-foreground/70 primary-color mt-4">What else would you like to know?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 primary-color rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground primary-color py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 primary-color leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
