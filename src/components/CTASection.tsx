import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => (
  <section
    className="parallax-section relative py-20 sm:py-28"
    style={{ backgroundImage: `url(${ctaBg})` }}
  >
    <div className="absolute inset-0" style={{ backgroundColor: "var(--parallax-overlay)" }} />
    <div className="section-container relative text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black text-accent-foreground sm:text-4xl">
          Need Professional Roofing or Construction Services?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-foreground/70">
          Contact Sekta Real Constructors today for reliable and professional construction services.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="accent" size="xl">
            <a href="tel:+256705941023">
              <Phone className="mr-2 h-5 w-5" />
              Call +256 705 941023
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href="https://wa.me/256776529485" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp +256 776 529485
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
