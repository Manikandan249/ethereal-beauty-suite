import SectionHeading from "@/components/SectionHeading";
import { Shield, Award, Heart, Sparkles } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const values = [
  { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every service" },
  { icon: Award, title: "Excellence", desc: "Only the best products and techniques for our clients" },
  { icon: Shield, title: "Integrity", desc: "Transparent pricing with no hidden charges" },
  { icon: Sparkles, title: "Innovation", desc: "Staying current with the latest beauty trends" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h1 className="section-title">About Glow & Grace</h1>
          <p className="section-subtitle mx-auto mt-4">Our story of beauty, passion, and excellence</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={teamImage} alt="Our team" className="rounded-lg elegant-shadow w-full" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-light mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, Glow & Grace was born from a simple vision — to create a sanctuary where every person feels beautiful, confident, and pampered.
              </p>
              <p>
                Our founder, with over 15 years of experience in the beauty industry, assembled a team of passionate and certified professionals dedicated to delivering exceptional results.
              </p>
              <p>
                Today, we serve hundreds of happy clients every month with our premium hair, skin, makeup, and bridal services, using only the finest cruelty-free products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 glass-card elegant-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding container mx-auto text-center">
        <SectionHeading title="Certifications & Standards" subtitle="Your safety and satisfaction are our top priority" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {["Licensed & Certified Professionals", "Premium Cruelty-Free Products", "Strict Hygiene Protocols"].map((item) => (
            <div key={item} className="glass-card p-6 elegant-shadow">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
