import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "@/assets/nail-service.jpg";

const items = [
  { name: "Classic Manicure", price: "$25 – $40", desc: "Nail shaping, cuticle care, and polish" },
  { name: "Classic Pedicure", price: "$30 – $50", desc: "Foot soak, scrub, and nail care" },
  { name: "Gel Nails", price: "$45 – $75", desc: "Long-lasting gel polish with flawless finish" },
  { name: "Acrylic Extensions", price: "$60 – $120", desc: "Custom-shaped acrylic nail extensions" },
  { name: "Nail Art", price: "$10 – $40+", desc: "Creative designs from minimal to intricate" },
];

const NailServices = () => (
  <>
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt="Nail Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Nail Services</h1>
        <p className="section-subtitle mx-auto mt-4">Beautiful nails for every style</p>
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

export default NailServices;
