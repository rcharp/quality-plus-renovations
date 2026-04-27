import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import useSEO from "@/hooks/useSEO";

const Gallery = () => {
  useSEO({
    title: "Project Gallery | Quality Plus Renovations Bradenton FL",
    description: "Browse real finish carpentry, built-ins, coffered ceilings, barn doors, fireplaces, and renovation projects by Quality Plus Renovations in Bradenton, FL.",
    canonical: "https://qualityplusrenovations.com/gallery",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block text-base font-semibold text-secondary uppercase tracking-[0.25em] secondary-color">
              Gallery
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Our Recent Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A look at finish carpentry, custom built-ins, coffered ceilings, barn doors, fireplaces, and full renovations completed by our team.
            </p>
          </div>
        </div>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;