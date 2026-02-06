import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hairImage from "@/assets/hair-service.jpg";
import skinImage from "@/assets/skincare-service.jpg";
import makeupImage from "@/assets/makeup-service.jpg";
import nailImage from "@/assets/nail-service.jpg";
import bridalImage from "@/assets/bridal-makeup.jpg";

const allServices = [
  { title: "Hair Services", description: "Haircut, styling, coloring, keratin treatments, hair spa, and bridal hairstyles", image: hairImage, to: "/services/hair", price: "$45" },
  { title: "Skin Care", description: "Facials, clean-ups, anti-aging treatments, acne & pigmentation care", image: skinImage, to: "/services/skin", price: "$55" },
  { title: "Makeup Services", description: "Bridal makeup, party looks, engagement makeup, and trials", image: makeupImage, to: "/services/makeup", price: "$75" },
  { title: "Nail Services", description: "Manicure, pedicure, gel & acrylic nails, and creative nail art", image: nailImage, to: "/services/nails", price: "$30" },
  { title: "Bridal Packages", description: "Complete pre-bridal and bridal day packages with custom plans", image: bridalImage, to: "/services/bridal", price: "$299" },
];

const Services = () => {
  return (
    <>
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle mx-auto mt-4">Premium beauty services tailored to enhance your natural beauty</p>
        </div>
      </section>

      <section className="section-padding container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/book">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
