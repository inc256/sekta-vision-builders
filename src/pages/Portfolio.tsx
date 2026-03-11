import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const categories = ["All", "Roof Structures", "Construction", "Form Works", "Completed Projects"];

const allImages = [
  { src: hero1, alt: "Roof structure installation", category: "Roof Structures" },
  { src: portfolio1, alt: "Steel roof truss close-up", category: "Roof Structures" },
  { src: portfolio2, alt: "Workers installing roof sheets", category: "Roof Structures" },
  { src: hero2, alt: "School roof structure", category: "Roof Structures" },
  { src: hero3, alt: "Concrete formwork", category: "Form Works" },
  { src: portfolio3, alt: "Reinforcement bars", category: "Form Works" },
  { src: portfolio4, alt: "Completed commercial building", category: "Completed Projects" },
  { src: portfolio5, alt: "Building renovation", category: "Construction" },
  { src: portfolio6, alt: "Interior roof truss", category: "Construction" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = active === "All" ? allImages : allImages.filter((img) => img.category === active);

  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl font-black text-foreground sm:text-5xl">Our Portfolio</h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Browse our completed construction, roofing, and formwork projects.
              </p>
            </motion.div>

            {/* Category filter */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150 ${
                    active === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry grid */}
            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src + active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="mb-4 break-inside-avoid"
                >
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="group block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={filtered.map((img) => ({ src: img.src }))}
        styles={{ container: { backgroundColor: "rgba(17, 24, 39, 0.95)" } }}
      />
    </>
  );
};

export default Portfolio;
