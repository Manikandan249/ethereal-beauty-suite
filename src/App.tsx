import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import HairServices from "./pages/HairServices";
import SkinCare from "./pages/SkinCare";
import MakeupServices from "./pages/MakeupServices";
import NailServices from "./pages/NailServices";
import BridalPackages from "./pages/BridalPackages";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import BookAppointment from "./pages/BookAppointment";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/hair" element={<HairServices />} />
            <Route path="/services/skin" element={<SkinCare />} />
            <Route path="/services/makeup" element={<MakeupServices />} />
            <Route path="/services/nails" element={<NailServices />} />
            <Route path="/services/bridal" element={<BridalPackages />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
