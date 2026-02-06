import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "@/assets/hair-service.jpg";

const items = [
  { name: "Haircut & Styling", price: "$45 – $85", desc: "Precision cuts and styling for all hair types" },
  { name: "Hair Spa Treatment", price: "$65 – $120", desc: "Deep conditioning and rejuvenation therapy" },
  { name: "Hair Coloring", price: "$80 – $200", desc: "Full color, highlights, balayage, and ombré" },
  { name: "Keratin & Smoothening", price: "$150 – $350", desc: "Long-lasting smoothening and frizz control" },
  { name: "Bridal & Party Hairstyles", price: "$100 – $250", desc: "Elegant updos and styled looks for special occasions" },
];

const HairServices = () => (
  <>
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt="Hair Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Hair Services</h1>
        <p className="section-subtitle mx-auto mt-4">Transform your look with our expert hair care services</p>
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

export default HairServices;
