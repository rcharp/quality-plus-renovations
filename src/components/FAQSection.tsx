import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can you come pick up my junk?",
    a: "We offer same-day and next-day junk removal service in most areas. Just give us a call or submit a quote request, and we'll schedule a pickup at a time that works for you — often within a few hours.",
  },
  {
    q: "How is pricing determined?",
    a: "We price based on the volume of space your items take up in our truck — not by weight or item count. We'll give you an upfront quote before we start, so there are never any surprises. No hidden fees, no hourly charges.",
  },
  {
    q: "What items do you accept?",
    a: "We haul just about anything — old furniture, appliances, electronics, mattresses, yard waste, construction debris, and general household clutter. The only items we can't take are hazardous materials like paint, chemicals, and certain batteries.",
  },
  {
    q: "Do I need to be home during the pickup?",
    a: "It's helpful if you're there to point out what needs to go, but it's not required. If the items are accessible (e.g., in the driveway or garage), we can handle the pickup while you're away — just let us know ahead of time.",
  },
  {
    q: "Do you recycle or donate items?",
    a: "Absolutely! We're committed to eco-friendly disposal. Whenever possible, we donate usable items to local charities and recycle materials like metal, wood, and electronics. We aim to divert as much as possible from landfills.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, we are fully licensed and insured. You can rest easy knowing your property is protected during every job. Our team is trained, professional, and respectful of your home or business.",
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
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-foreground/70 mt-4">What else would you like to know?</p>
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
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 leading-relaxed pb-5">
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
