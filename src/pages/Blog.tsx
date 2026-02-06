import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "10 Hair Care Tips for Healthy, Shiny Locks",
    excerpt: "Discover the secrets to maintaining gorgeous, healthy hair with our expert tips and product recommendations.",
    date: "Feb 1, 2026",
    category: "Hair Care",
  },
  {
    title: "The Ultimate Bridal Beauty Timeline",
    excerpt: "Plan your bridal beauty routine with our month-by-month guide for radiant skin on your big day.",
    date: "Jan 25, 2026",
    category: "Bridal",
  },
  {
    title: "5-Step Nighttime Skin Care Routine",
    excerpt: "Build the perfect evening skincare regimen for glowing, youthful skin every morning.",
    date: "Jan 18, 2026",
    category: "Skin Care",
  },
  {
    title: "Nail Art Trends to Try This Season",
    excerpt: "From minimalist designs to bold patterns, explore the hottest nail art trends of the season.",
    date: "Jan 10, 2026",
    category: "Nails",
  },
  {
    title: "How to Choose the Right Foundation",
    excerpt: "A guide to finding the perfect foundation shade and formula for your skin type.",
    date: "Jan 5, 2026",
    category: "Makeup",
  },
];

const Blog = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Beauty Blog</h1>
        <p className="section-subtitle mx-auto mt-4">Tips, guides, and inspiration for your beauty journey</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <article key={i} className="glass-card p-6 elegant-shadow group hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground">{post.category}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>
            <h2 className="font-display text-xl font-medium group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
