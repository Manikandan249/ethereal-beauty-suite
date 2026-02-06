import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import hairImage from "@/assets/hair-service.jpg";
import skinImage from "@/assets/skincare-service.jpg";
import makeupImage from "@/assets/makeup-service.jpg";
import nailImage from "@/assets/nail-service.jpg";
import bridalImage from "@/assets/bridal-makeup.jpg";
import heroImage from "@/assets/hero-salon.jpg";

const filters = ["All", "Hair", "Skin", "Makeup", "Nails", "Bridal"];

const images = [
  { src: hairImage, category: "Hair", alt: "Hair transformation" },
  { src: skinImage, category: "Skin", alt: "Skincare treatment" },
  { src: makeupImage, category: "Makeup", alt: "Makeup artistry" },
  { src: nailImage, category: "Nails", alt: "Nail art design" },
  { src: bridalImage, category: "Bridal", alt: "Bridal makeup" },
  { src: heroImage, category: "Hair", alt: "Salon interior" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h1 className="section-title">Our Gallery</h1>
          <p className="section-subtitle mx-auto mt-4">See the stunning transformations by our expert team</p>
        </div>
      </section>

      <section className="section-padding container mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === f
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden elegant-shadow group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
