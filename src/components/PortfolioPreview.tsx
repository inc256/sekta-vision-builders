import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Steel roof truss close-up" },
  { src: portfolio2, alt: "Workers installing roof sheets" },
  { src: portfolio3, alt: "Concrete formwork and reinforcement" },
  { src: portfolio4, alt: "Completed commercial building" },
  { src: portfolio5, alt: "Building under renovation" },
  { src: portfolio6, alt: "Interior roof truss structure" },
];

const PortfolioPreview = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-black text-foreground sm:text-4xl">Our Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of our completed construction and roofing projects.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true }}
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

        <div className="mt-10 text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src }))}
        styles={{ container: { backgroundColor: "rgba(17, 24, 39, 0.95)" } }}
      />
    </section>
  );
};

export default PortfolioPreview;
