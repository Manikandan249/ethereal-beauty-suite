import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "@/assets/skincare-service.jpg";

const items = [
  { name: "Classic Facial", price: "$55 – $90", desc: "Deep cleansing and hydration for glowing skin" },
  { name: "Gold / Diamond Facial", price: "$85 – $150", desc: "Premium facial with luxury ingredients" },
  { name: "Clean-Up", price: "$35 – $50", desc: "Quick refresh for everyday radiance" },
  { name: "Anti-Aging Treatment", price: "$120 – $250", desc: "Advanced treatments to reduce fine lines and wrinkles" },
  { name: "Acne & Pigmentation Care", price: "$75 – $180", desc: "Targeted solutions for clear, even-toned skin" },
];

const SkinCare = () => (
  <>
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt="Skin Care" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Skin Care Services</h1>
        <p className="section-subtitle mx-auto mt-4">Reveal your skin's natural radiance</p>
      </div>
    </section>
    <section className="section-padding container mx-auto">
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item) => (
          <div key={item.name} className="glass-card p-5 elegant-shadow flex justify-between items-start gap-4">
            <div>
              <h3 className="font-display text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
            <span className="text-primary font-medium text-sm whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button size="lg" asChild><Link to="/book">Book Now</Link></Button>
      </div>
    </section>
  </>
);

export default SkinCare;
