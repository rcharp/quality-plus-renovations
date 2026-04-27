import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Blog = () => {
  useSEO({
    title: "Blog | Quality Plus Renovations",
    description: "Tips, project stories, and renovation insights from Quality Plus Renovations in Bradenton, FL.",
    canonical: "https://qualityplusrenovations.com/blog",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-20 lg:pb-28">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="inline-block text-base font-semibold text-secondary uppercase tracking-[0.25em] secondary-color">
              Blog
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Project Stories &amp; Craftsmanship Notes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our blog is coming soon. Check back for project walkthroughs, material guides, and behind-the-scenes notes from the Quality Plus Renovations workshop.
            </p>
            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;