import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "@/assets/makeup-service.jpg";

const items = [
  { name: "Bridal Makeup", price: "$200 – $500", desc: "Flawless bridal look for your special day" },
  { name: "Party Makeup", price: "$75 – $150", desc: "Glamorous looks for any celebration" },
  { name: "Engagement & Reception", price: "$150 – $350", desc: "Picture-perfect makeup for pre-wedding events" },
  { name: "Makeup Trial", price: "$50 – $100", desc: "Preview your look before the big day" },
];

const MakeupServices = () => (
  <>
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt="Makeup Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Makeup Services</h1>
        <p className="section-subtitle mx-auto mt-4">Professional makeup artistry for every occasion</p>
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

export default MakeupServices;
