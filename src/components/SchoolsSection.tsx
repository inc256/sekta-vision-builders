import { motion } from "framer-motion";
import school1 from "@/assets/school-1.jpg";
import school2 from "@/assets/school-2.jpg";
import school3 from "@/assets/school-3.jpg";

const schools = [
  { name: "Our Lady of Africa – Namilyango", image: school1 },
  { name: "Our Lady of Africa – Mukono", image: school2 },
  { name: "Our Lady of Africa – Bukasa", image: school3 },
  { name: "St. Mary's College – Lugazi", image: school1 },
  { name: "Mother Kevin College – Mabira", image: school2 },
  { name: "St. Francis Borgia High School – Mukono", image: school3 },
];

const SchoolsSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-black text-foreground sm:text-4xl">Schools We Have Roofed</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Trusted by educational institutions across Mukono and surrounding districts.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((school, i) => (
          <motion.div
            key={school.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            viewport={{ once: true }}
            className="card-shadow group overflow-hidden rounded-xl bg-card transition-shadow duration-200 hover:card-shadow-hover"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={school.image}
                alt={school.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-foreground">{school.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolsSection;
