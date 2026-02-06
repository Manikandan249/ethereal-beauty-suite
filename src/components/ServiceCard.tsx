import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  to: string;
  price?: string;
}

const ServiceCard = ({ title, description, image, to, price }: ServiceCardProps) => {
  return (
    <Link to={to} className="group block glass-card elegant-shadow overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
        {price && <p className="text-sm font-medium text-primary mt-2">Starting from {price}</p>}
        <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
