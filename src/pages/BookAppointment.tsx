import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";

const services = [
  "Haircut & Styling", "Hair Spa", "Hair Coloring", "Keratin Treatment",
  "Classic Facial", "Gold Facial", "Anti-Aging Treatment",
  "Bridal Makeup", "Party Makeup", "Engagement Makeup",
  "Manicure", "Pedicure", "Gel Nails", "Nail Art",
  "Pre-Bridal Package", "Bridal Day Package",
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

const BookAppointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    if (!name?.trim() || !phone?.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitted(true);
    toast.success("Appointment request submitted!");
  };

  if (submitted) {
    return (
      <section className="section-padding container mx-auto text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="section-title text-2xl">Booking Confirmed!</h2>
          <p className="text-muted-foreground mt-4">
            Thank you for your booking! We'll contact you shortly to confirm your appointment.
          </p>
          <Button className="mt-6" onClick={() => setSubmitted(false)}>Book Another</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <h1 className="section-title">Book an Appointment</h1>
          <p className="section-subtitle mx-auto mt-4">Schedule your visit with us</p>
        </div>
      </section>

      <section className="section-padding container mx-auto">
        <div className="max-w-2xl mx-auto glass-card p-8 elegant-shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Your name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" required maxLength={20} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" maxLength={255} />
            </div>

            <div className="space-y-2">
              <Label>Service</Label>
              <Select name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="date" name="date" type="date" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Preferred Time</Label>
                <Select name="time">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Requests</Label>
              <Textarea id="notes" name="notes" placeholder="Any special requests or notes..." rows={3} maxLength={500} />
            </div>

            <Button type="submit" size="lg" className="w-full">Book Appointment</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
