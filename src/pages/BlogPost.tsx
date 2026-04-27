import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import useSEO from "@/hooks/useSEO";
import { getBlogPost, blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useSEO({
    title: post ? post.metaTitle : "Article Not Found | Quality Plus Renovations",
    description: post ? post.metaDescription : "Article not found.",
    canonical: post ? `https://qualityplusrenovations.com/blog/${post.slug}` : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw] flex flex-col">
      <Header />
      <main className="flex-1">
        <article>
          <header className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[280px] pb-10">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary secondary-color hover:underline mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-secondary secondary-color uppercase tracking-wider text-xs">
                  {post.category}
                </span>
                <span aria-hidden>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-5 leading-relaxed">{post.excerpt}</p>
            </div>
          </header>

          <div className="container mx-auto px-4 lg:px-8 mb-12">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 pb-20">
            <div className="max-w-3xl mx-auto space-y-8">
              {post.content.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {block.heading}
                    </h2>
                  )}
                  <p className="text-lg text-foreground/85 leading-relaxed">{block.body}</p>
                </div>
              ))}

              <div className="mt-12 p-8 rounded-2xl border border-border bg-card">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Ready to start your project?
                </h3>
                <p className="text-muted-foreground mb-5">
                  Get a free, no-pressure quote from Quality Plus Renovations. Family-owned and based in Bradenton, FL.
                </p>
                <Link
                  to="/get-your-discount"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                >
                  Get My 10% Discount
                </Link>
              </div>
            </div>
          </div>
        </article>

        <BlogSection
          showHeader
          eyebrow="Keep Reading"
          heading="More Articles You'll Like"
          subheading="More renovation tips, project stories, and craftsmanship notes from our team."
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;