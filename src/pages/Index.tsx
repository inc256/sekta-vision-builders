import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import ServicesSection from "@/components/ServicesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import ExperienceSection from "@/components/ExperienceSection";
import SchoolsSection from "@/components/SchoolsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSlideshow />
      <ServicesSection />
      <PortfolioPreview />
      <ExperienceSection />
      <SchoolsSection />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
