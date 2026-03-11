import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/Images/Hero/hero (1).jpg";
import hero2 from "@/assets/Images/Hero/hero (2).jpg";
import hero3 from "@/assets/Images/Hero/hero (3).jpg";
import hero4 from "@/assets/Images/Hero/hero (4).jpg";
import hero5 from "@/assets/Images/Hero/hero (5).jpg";
import hero6 from "@/assets/Images/Hero/hero (6).jpg";
import hero7 from "@/assets/Images/Hero/hero (7).jpg";
import hero8 from "@/assets/Images/Hero/hero (8).jpg";
import hero9 from "@/assets/Images/Hero/hero (9).jpg";
import hero10 from "@/assets/Images/Hero/hero (10).jpg";
import hero11 from "@/assets/Images/Hero/hero (11).jpg";
import hero12 from "@/assets/Images/Hero/hero (12).jpg";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75svh] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Construction project ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Content */}
      <div className="relative flex min-h-[75svh] items-center">
        <div className="section-container w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black leading-tight text-accent-foreground sm:text-5xl lg:text-6xl">
              Sekta Real{" "}
              <span className="text-accent">Constructors</span>
            </h1>
            <p className="mt-3 text-lg font-medium italic text-accent-foreground/80 sm:text-xl">
              "Only the best is good enough."
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-accent-foreground/70 sm:text-lg">
              Professional construction company with over 10 years of experience in roofing structures,
              construction, form works, and maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl">
                <a href="tel:+256705941023">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/256776529485" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-accent-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
