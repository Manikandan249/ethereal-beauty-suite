import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import bridalImage from "@/assets/bridal-makeup.jpg";

const packages = [
  {
    name: "Pre-Bridal Glow",
    price: "$299",
    features: ["5 facial sessions", "Hair spa (3 sessions)", "Full body polishing", "Waxing package", "Mani-pedi (2 sessions)"],
  },
  {
    name: "Bridal Day Package",
    price: "$499",
    features: ["HD Bridal makeup", "Bridal hairstyling", "Draping assistance", "Touch-up kit", "False lashes"],
    featured: true,
  },
  {
    name: "Complete Bridal Plan",
    price: "$799",
    features: ["Everything in Pre-Bridal", "Everything in Bridal Day", "Engagement makeup", "Reception makeup", "2 makeup trials"],
  },
];

const BridalPackages = () => (
  <>
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={bridalImage} alt="Bridal Packages" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Bridal Packages</h1>
        <p className="section-subtitle mx-auto mt-4">Make your special day truly unforgettable</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`glass-card p-6 elegant-shadow relative ${pkg.featured ? "ring-2 ring-primary" : ""}`}>
            {pkg.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-medium text-center">{pkg.name}</h3>
            <p className="text-3xl font-display font-light text-primary text-center mt-3">{pkg.price}</p>
            <ul className="mt-6 space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-6" variant={pkg.featured ? "default" : "outline"} asChild>
              <Link to="/book">Book Consultation</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default BridalPackages;
