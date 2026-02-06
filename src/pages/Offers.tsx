import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Gift, Crown, Star } from "lucide-react";

const offers = [
  { title: "Summer Glow Special", desc: "Get 20% off on all facial treatments this season", code: "GLOW20", expiry: "March 31, 2026" },
  { title: "First Visit Offer", desc: "15% off on any service for first-time clients", code: "WELCOME15", expiry: "Ongoing" },
  { title: "Refer a Friend", desc: "Both you and your friend get $25 off your next visit", code: "FRIEND25", expiry: "Ongoing" },
];

const memberships = [
  {
    name: "Silver",
    price: "$49/month",
    icon: Star,
    features: ["10% off all services", "Priority booking", "Birthday special discount", "Monthly newsletter"],
  },
  {
    name: "Gold",
    price: "$89/month",
    icon: Crown,
    features: ["20% off all services", "Free monthly facial", "Priority booking", "Birthday free service", "Exclusive event access"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "$149/month",
    icon: Gift,
    features: ["30% off all services", "Free monthly facial + hair spa", "VIP priority booking", "Birthday month special", "2 free guest passes", "Personal beauty consultant"],
  },
];

const Offers = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Offers & Memberships</h1>
        <p className="section-subtitle mx-auto mt-4">Exclusive deals and loyalty rewards</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <SectionHeading title="Current Offers" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {offers.map((o) => (
          <div key={o.title} className="glass-card p-6 elegant-shadow text-center">
            <Gift className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-medium">{o.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{o.desc}</p>
            <p className="mt-3 text-sm font-mono bg-secondary px-3 py-1.5 rounded inline-block">{o.code}</p>
            <p className="text-xs text-muted-foreground mt-2">Valid until: {o.expiry}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionHeading title="Membership Plans" subtitle="Join our loyalty program and enjoy exclusive benefits" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {memberships.map((m) => (
            <div key={m.name} className={`glass-card p-6 elegant-shadow relative ${m.featured ? "ring-2 ring-primary" : ""}`}>
              {m.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <m.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-xl font-medium text-center">{m.name}</h3>
              <p className="text-2xl font-display font-light text-primary text-center mt-2">{m.price}</p>
              <ul className="mt-5 space-y-2">
                {m.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-5" variant={m.featured ? "default" : "outline"} asChild>
                <Link to="/book">Join Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Offers;
