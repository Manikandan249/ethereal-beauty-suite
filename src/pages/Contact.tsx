import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const whatsappMessage = encodeURIComponent("Hi! I'd like to inquire about your salon services.");

  return (
    <>
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle mx-auto mt-4">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-light mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">123 Beauty Lane, Suite 100, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">+1 234 567 890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">WhatsApp</p>
                  <a
                    href={`https://wa.me/1234567890?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a href="mailto:hello@glowandgrace.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@glowandgrace.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Business Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden elegant-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164898!2d-73.98513458459377!3d40.748817379327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjciTiA3M8KwNTknMDIuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 elegant-shadow h-fit">
            <h2 className="font-display text-2xl font-light mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="c-name">Name *</Label>
                <Input id="c-name" required placeholder="Your name" maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-email">Email *</Label>
                <Input id="c-email" type="email" required placeholder="your@email.com" maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-phone">Phone</Label>
                <Input id="c-phone" type="tel" placeholder="+1 234 567 890" maxLength={20} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">Message *</Label>
                <Textarea id="c-message" required placeholder="How can we help?" rows={4} maxLength={1000} />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
