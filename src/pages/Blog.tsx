import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import useSEO from "@/hooks/useSEO";
import heroBg from "@/assets/qpr/hero-bg.jpg";

const Blog = () => {
  useSEO({
    title: "Renovation Blog | Quality Plus Renovations Bradenton FL",
    description: "Finish carpentry, flooring, paint, and home renovation guides from Quality Plus Renovations — serving Bradenton, Lakewood Ranch, and Sarasota.",
    canonical: "https://qualityplusrenovations.com/blog",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden max-w-[100vw]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-20 lg:pb-28 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-5">
              <span className="inline-block text-base font-semibold uppercase tracking-[0.25em] secondary-color text-secondary">
                Blog
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                Renovation Insights &amp; Project Stories
              </h1>
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
                Practical guides on finish carpentry, flooring, paint, drywall, and home renovations — written by the Quality Plus Renovations team in Bradenton, FL.
              </p>
            </div>
          </div>
        </section>
        <BlogSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;