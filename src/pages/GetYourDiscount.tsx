import { useEffect, useState } from "react";
import { Ticket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useSEO from "@/hooks/useSEO";

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ozMipTj6FwiZJoUxZ2DF/webhook-trigger/MWKDpYUHkV9PO9bdy3ag";

const GetYourDiscount = () => {
  useSEO({
    title: "Get Your Discount | Quality Plus Renovations",
    description: "Claim your discount on finish carpentry, built-ins, flooring, paint & drywall in Bradenton, Sarasota & Lakewood Ranch, FL.",
    canonical: "https://qualityplusrenovations.com/get-your-discount",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    summary: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.summary.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consent) {
      toast.error("Please accept the terms to continue.");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          help_with: formData.summary.trim(),
          source: "get-your-discount",
          consent_marketing: formData.consent,
          consent_non_marketing: formData.consent,
        }),
      });
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-20 lg:pb-28">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div
                className="rounded-2xl p-10 sm:p-14 shadow-2xl text-center min-h-[400px] flex flex-col items-center justify-center"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">THANK YOU!</h2>
                <p className="text-white/80 text-lg">
                  We got your request and will be in touch shortly to lock in your discount!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl space-y-6"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <div className="text-center space-y-2 pb-2">
                  <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl">
                    Quality Plus Renovations
                  </h1>
                  <p className="font-heading font-semibold text-secondary secondary-color text-xl sm:text-2xl">
                    Get Your Discount!
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white font-semibold">
                    Full Name <span className="text-secondary">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    required
                    maxLength={100}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-semibold">
                    Phone <span className="text-secondary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="(888) 123-4567"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: digits });
                    }}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary" className="text-white font-semibold">
                    Short summary of the work you need! <span className="text-secondary">*</span>
                  </Label>
                  <Textarea
                    id="summary"
                    placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked === true })
                    }
                    className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-white/70 text-sm leading-relaxed font-normal cursor-pointer"
                  >
                    I agree to the terms &amp; conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold text-lg py-6 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                >
                  <Ticket className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "GET MY DISCOUNT"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetYourDiscount;