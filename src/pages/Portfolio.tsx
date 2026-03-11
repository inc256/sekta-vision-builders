import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Roof Structures - 62 images
import roof_1 from "@/assets/Images/Roof Projects/roof (1).jpg";
import roof_2 from "@/assets/Images/Roof Projects/roof (2).jpg";
import roof_3 from "@/assets/Images/Roof Projects/roof (3).jpg";
import roof_4 from "@/assets/Images/Roof Projects/roof (4).jpg";
import roof_5 from "@/assets/Images/Roof Projects/roof (5).jpg";
import roof_6 from "@/assets/Images/Roof Projects/roof (6).jpg";
import roof_7 from "@/assets/Images/Roof Projects/roof (7).jpg";
import roof_8 from "@/assets/Images/Roof Projects/roof (8).jpg";
import roof_9 from "@/assets/Images/Roof Projects/roof (9).jpg";
import roof_10 from "@/assets/Images/Roof Projects/roof (10).jpg";
import roof_11 from "@/assets/Images/Roof Projects/roof (11).jpg";
import roof_12 from "@/assets/Images/Roof Projects/roof (12).jpg";
import roof_13 from "@/assets/Images/Roof Projects/roof (13).jpg";
import roof_14 from "@/assets/Images/Roof Projects/roof (14).jpg";
import roof_15 from "@/assets/Images/Roof Projects/roof (15).jpg";
import roof_16 from "@/assets/Images/Roof Projects/roof (16).jpg";
import roof_17 from "@/assets/Images/Roof Projects/roof (17).jpg";
import roof_18 from "@/assets/Images/Roof Projects/roof (18).jpg";
import roof_19 from "@/assets/Images/Roof Projects/roof (19).jpg";
import roof_20 from "@/assets/Images/Roof Projects/roof (20).jpg";
import roof_21 from "@/assets/Images/Roof Projects/roof (21).jpg";
import roof_22 from "@/assets/Images/Roof Projects/roof (22).jpg";
import roof_23 from "@/assets/Images/Roof Projects/roof (23).jpg";
import roof_24 from "@/assets/Images/Roof Projects/roof (24).jpg";
import roof_25 from "@/assets/Images/Roof Projects/roof (25).jpg";
import roof_26 from "@/assets/Images/Roof Projects/roof (26).jpg";
import roof_27 from "@/assets/Images/Roof Projects/roof (27).jpg";
import roof_28 from "@/assets/Images/Roof Projects/roof (28).jpg";
import roof_29 from "@/assets/Images/Roof Projects/roof (29).jpg";
import roof_30 from "@/assets/Images/Roof Projects/roof (30).jpg";
import roof_31 from "@/assets/Images/Roof Projects/roof (31).jpg";
import roof_32 from "@/assets/Images/Roof Projects/roof (32).jpg";
import roof_33 from "@/assets/Images/Roof Projects/roof (33).jpg";
import roof_34 from "@/assets/Images/Roof Projects/roof (34).jpg";
import roof_35 from "@/assets/Images/Roof Projects/roof (35).jpg";
import roof_36 from "@/assets/Images/Roof Projects/roof (36).jpg";
import roof_37 from "@/assets/Images/Roof Projects/roof (37).jpg";
import roof_38 from "@/assets/Images/Roof Projects/roof (38).jpg";
import roof_39 from "@/assets/Images/Roof Projects/roof (39).jpg";
import roof_40 from "@/assets/Images/Roof Projects/roof (40).jpg";
import roof_41 from "@/assets/Images/Roof Projects/roof (41).jpg";
import roof_42 from "@/assets/Images/Roof Projects/roof (42).jpg";
import roof_43 from "@/assets/Images/Roof Projects/roof (43).jpg";
import roof_44 from "@/assets/Images/Roof Projects/roof (44).jpg";
import roof_45 from "@/assets/Images/Roof Projects/roof (45).jpg";
import roof_46 from "@/assets/Images/Roof Projects/roof (46).jpg";
import roof_47 from "@/assets/Images/Roof Projects/roof (47).jpg";
import roof_48 from "@/assets/Images/Roof Projects/roof (48).jpg";
import roof_49 from "@/assets/Images/Roof Projects/roof (49).jpg";
import roof_50 from "@/assets/Images/Roof Projects/roof (50).jpg";
import roof_51 from "@/assets/Images/Roof Projects/roof (51).jpg";
import roof_52 from "@/assets/Images/Roof Projects/roof (52).jpg";
import roof_53 from "@/assets/Images/Roof Projects/roof (53).jpg";
import roof_54 from "@/assets/Images/Roof Projects/roof (54).jpg";
import roof_55 from "@/assets/Images/Roof Projects/roof (55).jpg";
import roof_56 from "@/assets/Images/Roof Projects/roof (56).jpg";
import roof_57 from "@/assets/Images/Roof Projects/roof (57).jpg";
import roof_58 from "@/assets/Images/Roof Projects/roof (58).jpg";
import roof_59 from "@/assets/Images/Roof Projects/roof (59).jpg";
import roof_60 from "@/assets/Images/Roof Projects/roof (60).jpg";
import roof_61 from "@/assets/Images/Roof Projects/roof (61).jpg";

// Form Works - 5 images
import form_1 from "@/assets/Images/Form Works/form (1).jpg";
import form_2 from "@/assets/Images/Form Works/form (2).jpg";
import form_3 from "@/assets/Images/Form Works/form (3).jpg";
import form_4 from "@/assets/Images/Form Works/form (4).jpg";
import form_5 from "@/assets/Images/Form Works/form (5).jpg";

// Construction Projects - 31 images
import construction_1 from "@/assets/Images/Construction Projects/construction (1).jpg";
import construction_2 from "@/assets/Images/Construction Projects/construction (2).jpg";
import construction_3 from "@/assets/Images/Construction Projects/construction (3).jpg";
import construction_4 from "@/assets/Images/Construction Projects/construction (4).jpg";
import construction_5 from "@/assets/Images/Construction Projects/construction (5).jpg";
import construction_6 from "@/assets/Images/Construction Projects/construction (6).jpg";
import construction_7 from "@/assets/Images/Construction Projects/construction (7).jpg";
import construction_8 from "@/assets/Images/Construction Projects/construction (8).jpg";
import construction_9 from "@/assets/Images/Construction Projects/construction (9).jpg";
import construction_10 from "@/assets/Images/Construction Projects/construction (10).jpg";
import construction_11 from "@/assets/Images/Construction Projects/construction (11).jpg";
import construction_12 from "@/assets/Images/Construction Projects/construction (12).jpg";
import construction_13 from "@/assets/Images/Construction Projects/construction (13).jpg";
import construction_14 from "@/assets/Images/Construction Projects/construction (14).jpg";
import construction_15 from "@/assets/Images/Construction Projects/construction (15).jpg";
import construction_16 from "@/assets/Images/Construction Projects/construction (16).jpg";
import construction_17 from "@/assets/Images/Construction Projects/construction (17).jpg";
import construction_18 from "@/assets/Images/Construction Projects/construction (18).jpg";
import construction_19 from "@/assets/Images/Construction Projects/construction (19).jpg";
import construction_20 from "@/assets/Images/Construction Projects/construction (20).jpg";
import construction_21 from "@/assets/Images/Construction Projects/construction (21).jpg";
import construction_22 from "@/assets/Images/Construction Projects/construction (22).jpg";
import construction_23 from "@/assets/Images/Construction Projects/construction (23).jpg";
import construction_24 from "@/assets/Images/Construction Projects/construction (24).jpg";
import construction_25 from "@/assets/Images/Construction Projects/construction (25).jpg";
import construction_26 from "@/assets/Images/Construction Projects/construction (26).jpg";
import construction_27 from "@/assets/Images/Construction Projects/construction (27).jpg";
import construction_28 from "@/assets/Images/Construction Projects/construction (28).jpg";
import construction_29 from "@/assets/Images/Construction Projects/construction (29).jpg";
import construction_30 from "@/assets/Images/Construction Projects/construction (30).jpg";
import construction_31 from "@/assets/Images/Construction Projects/construction (31).jpg";

// Completed Projects - 8 images
import completed_1 from "@/assets/Images/Completed Projects/completed (1).jpg";
import completed_2 from "@/assets/Images/Completed Projects/completed (2).jpg";
import completed_3 from "@/assets/Images/Completed Projects/completed (3).jpg";
import completed_4 from "@/assets/Images/Completed Projects/completed (4).jpg";
import completed_5 from "@/assets/Images/Completed Projects/completed (5).jpg";
import completed_6 from "@/assets/Images/Completed Projects/completed (6).jpg";
import completed_7 from "@/assets/Images/Completed Projects/completed (7).jpg";
import completed_8 from "@/assets/Images/Completed Projects/completed (8).jpg";

const categories = ["All", "Roof Structures", "Construction", "Form Works", "Completed Projects"];

// Roof Structures images
const roofImages = [
  { src: roof_1, alt: "Roof structure 1" },
  { src: roof_2, alt: "Roof structure 2" },
  { src: roof_3, alt: "Roof structure 3" },
  { src: roof_4, alt: "Roof structure 4" },
  { src: roof_5, alt: "Roof structure 5" },
  { src: roof_6, alt: "Roof structure 6" },
  { src: roof_7, alt: "Roof structure 7" },
  { src: roof_8, alt: "Roof structure 8" },
  { src: roof_9, alt: "Roof structure 9" },
  { src: roof_10, alt: "Roof structure 10" },
  { src: roof_11, alt: "Roof structure 11" },
  { src: roof_12, alt: "Roof structure 12" },
  { src: roof_13, alt: "Roof structure 13" },
  { src: roof_14, alt: "Roof structure 14" },
  { src: roof_15, alt: "Roof structure 15" },
  { src: roof_16, alt: "Roof structure 16" },
  { src: roof_17, alt: "Roof structure 17" },
  { src: roof_18, alt: "Roof structure 18" },
  { src: roof_19, alt: "Roof structure 19" },
  { src: roof_20, alt: "Roof structure 20" },
  { src: roof_21, alt: "Roof structure 21" },
  { src: roof_22, alt: "Roof structure 22" },
  { src: roof_23, alt: "Roof structure 23" },
  { src: roof_24, alt: "Roof structure 24" },
  { src: roof_25, alt: "Roof structure 25" },
  { src: roof_26, alt: "Roof structure 26" },
  { src: roof_27, alt: "Roof structure 27" },
  { src: roof_28, alt: "Roof structure 28" },
  { src: roof_29, alt: "Roof structure 29" },
  { src: roof_30, alt: "Roof structure 30" },
  { src: roof_31, alt: "Roof structure 31" },
  { src: roof_32, alt: "Roof structure 32" },
  { src: roof_33, alt: "Roof structure 33" },
  { src: roof_34, alt: "Roof structure 34" },
  { src: roof_35, alt: "Roof structure 35" },
  { src: roof_36, alt: "Roof structure 36" },
  { src: roof_37, alt: "Roof structure 37" },
  { src: roof_38, alt: "Roof structure 38" },
  { src: roof_39, alt: "Roof structure 39" },
  { src: roof_40, alt: "Roof structure 40" },
  { src: roof_41, alt: "Roof structure 41" },
  { src: roof_42, alt: "Roof structure 42" },
  { src: roof_43, alt: "Roof structure 43" },
  { src: roof_44, alt: "Roof structure 44" },
  { src: roof_45, alt: "Roof structure 45" },
  { src: roof_46, alt: "Roof structure 46" },
  { src: roof_47, alt: "Roof structure 47" },
  { src: roof_48, alt: "Roof structure 48" },
  { src: roof_49, alt: "Roof structure 49" },
  { src: roof_50, alt: "Roof structure 50" },
  { src: roof_51, alt: "Roof structure 51" },
  { src: roof_52, alt: "Roof structure 52" },
  { src: roof_53, alt: "Roof structure 53" },
  { src: roof_54, alt: "Roof structure 54" },
  { src: roof_55, alt: "Roof structure 55" },
  { src: roof_56, alt: "Roof structure 56" },
  { src: roof_57, alt: "Roof structure 57" },
  { src: roof_58, alt: "Roof structure 58" },
  { src: roof_59, alt: "Roof structure 59" },
  { src: roof_60, alt: "Roof structure 60" },
  { src: roof_61, alt: "Roof structure 61" },
];

// Form Works images
const formImages = [
  { src: form_1, alt: "Form work 1" },
  { src: form_2, alt: "Form work 2" },
  { src: form_3, alt: "Form work 3" },
  { src: form_4, alt: "Form work 4" },
  { src: form_5, alt: "Form work 5" },
];

// Construction Projects images
const constructionImages = [
  { src: construction_1, alt: "Construction project 1" },
  { src: construction_2, alt: "Construction project 2" },
  { src: construction_3, alt: "Construction project 3" },
  { src: construction_4, alt: "Construction project 4" },
  { src: construction_5, alt: "Construction project 5" },
  { src: construction_6, alt: "Construction project 6" },
  { src: construction_7, alt: "Construction project 7" },
  { src: construction_8, alt: "Construction project 8" },
  { src: construction_9, alt: "Construction project 9" },
  { src: construction_10, alt: "Construction project 10" },
  { src: construction_11, alt: "Construction project 11" },
  { src: construction_12, alt: "Construction project 12" },
  { src: construction_13, alt: "Construction project 13" },
  { src: construction_14, alt: "Construction project 14" },
  { src: construction_15, alt: "Construction project 15" },
  { src: construction_16, alt: "Construction project 16" },
  { src: construction_17, alt: "Construction project 17" },
  { src: construction_18, alt: "Construction project 18" },
  { src: construction_19, alt: "Construction project 19" },
  { src: construction_20, alt: "Construction project 20" },
  { src: construction_21, alt: "Construction project 21" },
  { src: construction_22, alt: "Construction project 22" },
  { src: construction_23, alt: "Construction project 23" },
  { src: construction_24, alt: "Construction project 24" },
  { src: construction_25, alt: "Construction project 25" },
  { src: construction_26, alt: "Construction project 26" },
  { src: construction_27, alt: "Construction project 27" },
  { src: construction_28, alt: "Construction project 28" },
  { src: construction_29, alt: "Construction project 29" },
  { src: construction_30, alt: "Construction project 30" },
  { src: construction_31, alt: "Construction project 31" },
];

// Completed Projects images
const completedImages = [
  { src: completed_1, alt: "Completed project 1" },
  { src: completed_2, alt: "Completed project 2" },
  { src: completed_3, alt: "Completed project 3" },
  { src: completed_4, alt: "Completed project 4" },
  { src: completed_5, alt: "Completed project 5" },
  { src: completed_6, alt: "Completed project 6" },
  { src: completed_7, alt: "Completed project 7" },
  { src: completed_8, alt: "Completed project 8" },
];

// Combine all images with categories
const allImages = [
  ...roofImages.map(img => ({ ...img, category: "Roof Structures" })),
  ...formImages.map(img => ({ ...img, category: "Form Works" })),
  ...constructionImages.map(img => ({ ...img, category: "Construction" })),
  ...completedImages.map(img => ({ ...img, category: "Completed Projects" })),
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
