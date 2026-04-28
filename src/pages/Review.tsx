import { useState } from "react";
import { Star, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";
import reviewQr from "@/assets/review-qr.png";
import heroBg from "@/assets/qpr/hero-bg.jpg";
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ9TFpKko5w4gRF3KmhlNgx_o";
const REVIEW_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ozMipTj6FwiZJoUxZ2DF/webhook-trigger/ED6blx5rE66aRUYq4Scj";

const ratings = [
  { value: 5, label: "Excellent" },
  { value: 4, label: "Great" },
  { value: 3, label: "Okay" },
  { value: 2, label: "Poor" },
  { value: 1, label: "Terrible" },
];

const feedbackSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }).max(100),
  phone: z.string().trim().nonempty({ message: "Phone is required" }).max(30),
  message: z.string().trim().nonempty({ message: "Message is required" }).max(1000),
});

type Step = "rate" | "feedback" | "thanks";

const Review = () => {
  useSEO({
    title: "Leave a Review | Quality Plus Renovations",
    description: "We'd love to hear about your experience with Quality Plus Renovations finish carpentry and home improvement services.",
    canonical: "https://qualityplusrenovations.com/review",
  });

  const [step, setStep] = useState<Step>("rate");
  const [rating, setRating] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleRate = (value: number) => {
    setRating(value);
    if (value >= 4) {
      window.location.href = GOOGLE_REVIEW_URL;
    } else {
      setStep("feedback");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = feedbackSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    try {
      await fetch(REVIEW_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          rating,
        }),
      });
      setStep("thanks");
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      {/* Navbar background — matches homepage hero */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[180px] lg:h-[300px] z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <Header />
      <main className="flex-1 pt-[240px] lg:pt-[380px] pb-20">
        <section className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {step === "rate" && (
                <motion.div
                  key="rate"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                      How was your experience?
                    </h1>
                    <p className="text-lg text-muted-foreground mt-3">We'd love to hear your feedback</p>
                  </div>
                  <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
                    <div className="space-y-3 max-w-2xl w-full mx-auto lg:mx-0">
                      {ratings.map((r) => (
                        <button
                          key={r.value}
                          onClick={() => handleRate(r.value)}
                          className="w-full flex items-center gap-4 bg-card rounded-2xl px-6 py-5 border border-border card-elevated hover:border-secondary transition-all hover:-translate-y-0.5"
                        >
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-6 h-6 ${
                                  s <= r.value
                                    ? "fill-accent text-accent secondary-color"
                                    : "text-border"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-lg font-semibold text-foreground">{r.label}</span>
                        </button>
                      ))}
                    </div>
                    <aside className="bg-card rounded-2xl p-6 border border-border card-elevated text-center w-full max-w-xs mx-auto lg:mx-0 lg:sticky lg:top-32">
                      <p className="font-heading text-lg font-bold text-foreground mb-3">
                        Or scan to review
                      </p>
                      <img
                        src={reviewQr}
                        alt="Scan QR code to leave a review for Quality Plus Renovations"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                      <p className="text-sm text-muted-foreground mt-3">
                        Point your phone camera at the code
                      </p>
                    </aside>
                  </div>
                </motion.div>
              )}

              {step === "feedback" && (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-8">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Tell us more</h1>
                    <p className="text-lg text-muted-foreground mt-3">
                      We're sorry to hear that. Please let us know how we can improve.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border card-elevated space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                      <input
                        id="name"
                        type="text"
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        maxLength={30}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        maxLength={1000}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto px-8 py-3 text-base font-semibold secondary-color hover:opacity-90 transition-opacity disabled:opacity-60"
                        style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                      >
                        {submitting ? "Sending..." : "Submit Feedback"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep("rate")}
                        className="flex items-center gap-1 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back to ratings
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === "thanks" && (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="text-center"
                >
                  <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Thank You!</h1>
                  <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
                    We appreciate your feedback and will use it to improve our service.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Review;