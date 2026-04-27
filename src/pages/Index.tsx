import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";

import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Quality Plus Renovations | Finish Carpentry & Home Renovations in Bradenton, FL",
    description: "Family-owned finish carpentry & home renovation specialists serving Bradenton, Sarasota, Lakewood Ranch & Manatee County, FL. Built-ins, trim, flooring, paint & more. Call (941) 405-9695.",
    canonical: "https://qualityplusrenovations.com/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <SpecialOffers />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
