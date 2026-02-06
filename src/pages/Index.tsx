import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Star, Sparkles, Shield, Heart, ArrowRight, Quote } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import hairImage from "@/assets/hair-service.jpg";
import skinImage from "@/assets/skincare-service.jpg";
import makeupImage from "@/assets/makeup-service.jpg";
import nailImage from "@/assets/nail-service.jpg";
import bridalImage from "@/assets/bridal-makeup.jpg";

const services = [
  { title: "Hair Services", description: "From cuts & styling to coloring and keratin treatments", image: hairImage, to: "/services/hair", price: "$45" },
  { title: "Skin Care", description: "Facials, clean-ups, anti-aging and pigmentation care", image: skinImage, to: "/services/skin", price: "$55" },
  { title: "Makeup", description: "Bridal, party, and special occasion makeup artistry", image: makeupImage, to: "/services/makeup", price: "$75" },
  { title: "Nail Services", description: "Manicure, pedicure, gel nails and nail art", image: nailImage, to: "/services/nails", price: "$30" },
  { title: "Bridal Packages", description: "Complete bridal beauty packages for your special day", image: bridalImage, to: "/services/bridal", price: "$299" },
];

const testimonials = [
  { name: "Sarah M.", text: "Absolutely amazing experience! The team made me feel like a queen on my wedding day.", rating: 5 },
  { name: "Priya K.", text: "Best salon in town! Their hair treatments are outstanding and the staff is so professional.", rating: 5 },
  { name: "Emily R.", text: "I've been coming here for 2 years now. Consistently great service and beautiful results.", rating: 5 },
];

const whyUs = [
  { icon: Sparkles, title: "Expert Stylists", desc: "Certified professionals with 10+ years of experience" },
  { icon: Shield, title: "Premium Products", desc: "We use only top-quality, cruelty-free beauty products" },
  { icon: Heart, title: "Personal Touch", desc: "Customized treatments tailored to your unique needs" },
  { icon: Star, title: "Hygiene First", desc: "Strict hygiene protocols and sanitized equipment" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Glow & Grace Salon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-xl animate-fade-up">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">Welcome to Glow & Grace</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight text-balance">
              Where Beauty Meets <span className="italic text-primary">Elegance</span>
            </h1>
            <p className="text-muted-foreground mt-6 text-lg font-light leading-relaxed max-w-md">
              Experience premium beauty services in a luxurious setting. Your journey to radiant beauty begins here.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <Link to="/book">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding container mx-auto">
        <SectionHeading title="Our Services" subtitle="Discover our range of premium beauty services designed to enhance your natural beauty" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/services" className="inline-flex items-center gap-2">View All Services <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading title="Why Choose Us" subtitle="We're committed to delivering the best beauty experience" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 glass-card elegant-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding container mx-auto">
        <SectionHeading title="What Our Clients Say" subtitle="Real stories from our valued customers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 elegant-shadow">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground/80 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm font-medium mt-2">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/testimonials">Read More Reviews</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Ready to Glow?</h2>
          <p className="section-subtitle mx-auto mt-4">Book your appointment today and experience the difference</p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
