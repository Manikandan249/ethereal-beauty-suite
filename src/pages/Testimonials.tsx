import SectionHeading from "@/components/SectionHeading";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Absolutely amazing experience! The team made me feel like a queen on my wedding day. Every detail was perfect.", rating: 5, service: "Bridal" },
  { name: "Priya K.", text: "Best salon in town! Their hair treatments are outstanding and the staff is so professional and friendly.", rating: 5, service: "Hair" },
  { name: "Emily R.", text: "I've been coming here for 2 years. Consistently great service and beautiful results every single time.", rating: 5, service: "Skin Care" },
  { name: "Jessica L.", text: "The bridal package was worth every penny. My skin was glowing and my makeup lasted all night!", rating: 5, service: "Bridal" },
  { name: "Anita D.", text: "Love the nail art here! Creative designs and the gel polish lasts for weeks without chipping.", rating: 5, service: "Nails" },
  { name: "Rachel T.", text: "The facial treatment was so relaxing. My skin has never looked better. Highly recommend!", rating: 5, service: "Skin Care" },
];

const Testimonials = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Client Testimonials</h1>
        <p className="section-subtitle mx-auto mt-4">Hear what our happy clients have to say</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card p-6 elegant-shadow">
            <Quote className="w-8 h-8 text-primary/30 mb-3" />
            <p className="text-foreground/80 text-sm leading-relaxed italic">"{r.text}"</p>
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm font-medium">{r.name}</p>
              <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">{r.service}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Testimonials;
