import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/bush-boys-logo.png";

const WEBHOOK_URL = "https://example.com/webhook-placeholder";

const GetYourDiscount = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    workSummary: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.workSummary.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consent) {
      toast.error("Please accept the terms & conditions.");
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
          work_summary: formData.workSummary.trim(),
          consent: formData.consent,
          source: "get-your-discount",
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
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-background">
      <div className="w-full max-w-xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Bush Boys Hauling Logo" className="h-20 w-auto" />
        </div>

        {isSubmitted ? (
          <div
            className="rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]"
            style={{ backgroundColor: "hsl(225, 55%, 14%)" }}
          >
            <h1 className="font-heading font-bold text-white text-3xl mb-4">THANK YOU!</h1>
            <p className="text-white/80 text-lg">We got your request and will be in touch with your discount shortly!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-6 shadow-2xl"
            style={{ backgroundColor: "hsl(225, 55%, 14%)" }}
          >
            <div className="text-center space-y-2 pb-2">
              <h1 className="font-heading font-bold text-white text-4xl">Bush Boys Hauling</h1>
              <p className="font-heading font-bold text-secondary-foreground/90 text-2xl" style={{ color: "hsl(225, 55%, 65%)" }}>
                Get Your Discount!
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white font-semibold">
                Full Name <span style={{ color: "hsl(225, 55%, 65%)" }}>*</span>
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
                Phone <span style={{ color: "hsl(225, 55%, 65%)" }}>*</span>
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
              <Label htmlFor="workSummary" className="text-white font-semibold">
                Short summary of the work you need! <span style={{ color: "hsl(225, 55%, 65%)" }}>*</span>
              </Label>
              <Textarea
                id="workSummary"
                placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                required
                maxLength={1000}
                rows={4}
                value={formData.workSummary}
                onChange={(e) => setFormData({ ...formData, workSummary: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                className="mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <Label htmlFor="consent" className="text-white/80 text-sm leading-relaxed font-normal cursor-pointer">
                I agree to the terms &amp; conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-bold text-lg py-6 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              style={{ backgroundColor: "hsl(225, 55%, 35%)", color: "#fff", borderRadius: "10px" }}
            >
              <Ticket className="w-5 h-5" />
              {isSubmitting ? "SENDING..." : "GET MY DISCOUNT"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};

export default GetYourDiscount;