import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-black text-foreground sm:text-4xl">Contact Us</h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">Seeta, Mukono, Uganda</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Phone</h3>
              <a href="tel:+256705941023" className="block text-sm text-muted-foreground hover:text-accent">
                +256 705 941023
              </a>
              <a href="tel:+256776529485" className="block text-sm text-muted-foreground hover:text-accent">
                +256 776 529485
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href="tel:+256705941023">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href="https://wa.me/256776529485" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.045!2d32.75!3d0.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCcyMScwMC4wIk4gMzLCsDQ1JzAwLjAiRQ!5e0!3m2!1sen!2sug!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sekta Real Constructors location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
