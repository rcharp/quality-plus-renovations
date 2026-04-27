import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

interface BlogSectionProps {
  limit?: number;
  showHeader?: boolean;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

const BlogSection = ({
  limit,
  showHeader = true,
  eyebrow = "From the Blog",
  heading = "Renovation Insights & Project Stories",
  subheading = "Practical guides on finish carpentry, flooring, paint, and home renovations from our Bradenton workshop.",
}: BlogSectionProps) => {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="text-base font-semibold text-secondary uppercase tracking-wider secondary-color">
              {eyebrow}
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{subheading}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.4) }}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-elevated flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-secondary secondary-color uppercase tracking-wider text-xs">
                    {post.category}
                  </span>
                  <span aria-hidden>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground leading-snug mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-secondary transition-colors secondary-color-hover">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-secondary secondary-color hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {limit && limit < blogPosts.length && (
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
            >
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;