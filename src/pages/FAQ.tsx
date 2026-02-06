import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book an appointment?", a: "You can book online through our Book Appointment page, call us, or send a WhatsApp message. Walk-ins are welcome based on availability." },
  { q: "What is your cancellation policy?", a: "We request at least 24 hours' notice for cancellations. Late cancellations may be subject to a 50% service charge." },
  { q: "Do you use cruelty-free products?", a: "Yes! We exclusively use premium, cruelty-free beauty products from trusted brands." },
  { q: "How long do services typically take?", a: "Service duration varies: haircuts (30-60 min), facials (45-90 min), bridal makeup (2-3 hours). Specific timings are discussed during booking." },
  { q: "Do you offer home services?", a: "Yes, we offer home services for bridal packages and special occasions. Please contact us for availability and pricing." },
  { q: "What payment methods do you accept?", a: "We accept cash, credit/debit cards, and digital payments. Packages may require a deposit at the time of booking." },
  { q: "Do I need to prepare anything before my appointment?", a: "For most services, just arrive with clean skin/hair. For specific treatments, our team will provide pre-visit instructions." },
  { q: "Can I customize my bridal package?", a: "Absolutely! We offer fully customizable bridal packages. Schedule a consultation and we'll design a plan just for you." },
];

const FAQ = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p className="section-subtitle mx-auto mt-4">Find answers to common questions</p>
      </div>
    </section>

    <section className="section-padding container mx-auto">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card elegant-shadow px-5 border-none">
              <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;
