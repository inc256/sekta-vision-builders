import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/256776529485"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-all duration-150 hover:scale-105 active:scale-95"
  >
    <MessageCircle className="h-7 w-7 text-accent-foreground" />
  </a>
);

export default WhatsAppFloat;
