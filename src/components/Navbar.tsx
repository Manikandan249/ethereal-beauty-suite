import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services", to: "/services", children: [
      { label: "Hair Services", to: "/services/hair" },
      { label: "Skin Care", to: "/services/skin" },
      { label: "Makeup", to: "/services/makeup" },
      { label: "Nail Services", to: "/services/nails" },
      { label: "Bridal Packages", to: "/services/bridal" },
    ]
  },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-primary">
          Glow & Grace
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.to}
                className={`px-3 py-2 text-sm font-body font-medium transition-colors hover:text-primary ${isActive(link.to) ? "text-primary" : "text-foreground/70"
                  }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+1 234 567 890</span>
          </a>
          <Button asChild>
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => { if (!link.children) setOpen(false); else setServicesOpen(!servicesOpen); }}
                  className={`block px-3 py-2.5 text-base font-body transition-colors hover:text-primary ${isActive(link.to) ? "text-primary" : "text-foreground/70"
                    }`}
                >
                  {link.label}
                </Link>
                {link.children && servicesOpen && (
                  <div className="pl-6 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="mt-3">
              <Link to="/book" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
