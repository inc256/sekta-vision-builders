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
import Seo from "@/components/Seo";

const Index = () => (
  <>
    <Seo
      title="Sekta Real Contructors | Roofing, Construction & Form Works in Uganda"
      description="Expert roofing structures, construction, form works, and maintenance services in Seeta, Mukono. Trusted by schools and commercial clients."
      url="https://sekta-real-contructors.com/"
      canonical="https://sekta-real-contructors.com/"
      image="https://sekta-real-contructors.com/og-image.jpg"
      keywords="roof construction uganda, roofing contractors mukono, formwork services, sekta real contructors"
    />
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
