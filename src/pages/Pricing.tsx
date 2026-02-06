import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const categories = [
  {
    title: "Hair Services",
    items: [
      { name: "Haircut & Styling", price: "$45 – $85" },
      { name: "Hair Spa", price: "$65 – $120" },
      { name: "Hair Coloring", price: "$80 – $200" },
      { name: "Keratin Treatment", price: "$150 – $350" },
    ],
  },
  {
    title: "Skin Care",
    items: [
      { name: "Classic Facial", price: "$55 – $90" },
      { name: "Gold Facial", price: "$85 – $150" },
      { name: "Clean-Up", price: "$35 – $50" },
      { name: "Anti-Aging Treatment", price: "$120 – $250" },
    ],
  },
  {
    title: "Makeup",
    items: [
      { name: "Party Makeup", price: "$75 – $150" },
      { name: "Bridal Makeup", price: "$200 – $500" },
      { name: "Engagement Makeup", price: "$150 – $350" },
      { name: "Makeup Trial", price: "$50 – $100" },
    ],
  },
  {
    title: "Nail Services",
    items: [
      { name: "Manicure", price: "$25 – $40" },
      { name: "Pedicure", price: "$30 – $50" },
      { name: "Gel Nails", price: "$45 – $75" },
      { name: "Nail Art", price: "$10 – $40+" },
    ],
  },
];

const combos = [
  { name: "Glow Package", price: "$99", features: ["Classic Facial", "Manicure", "Pedicure", "Hair Wash & Blow-Dry"] },
  { name: "Party Ready", price: "$149", features: ["Party Makeup", "Hair Styling", "Manicure", "Quick Facial"], featured: true },
  { name: "Pamper Day", price: "$199", features: ["Gold Facial", "Hair Spa", "Gel Manicure", "Pedicure", "Head Massage"] },
];

const Pricing = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Our Pricing</h1>
        <p className="section-subtitle mx-auto mt-4">Transparent pricing with no hidden charges</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <SectionHeading title="Service Prices" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card p-6 elegant-shadow">
            <h3 className="font-display text-xl font-medium mb-4 text-primary">{cat.title}</h3>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionHeading title="Combo Packages" subtitle="Save more with our specially curated packages" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {combos.map((c) => (
            <div key={c.name} className={`glass-card p-6 elegant-shadow ${c.featured ? "ring-2 ring-primary" : ""}`}>
              <h3 className="font-display text-xl font-medium text-center">{c.name}</h3>
              <p className="text-3xl font-display font-light text-primary text-center mt-2">{c.price}</p>
              <ul className="mt-5 space-y-2">
                {c.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-5" variant={c.featured ? "default" : "outline"} asChild>
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
