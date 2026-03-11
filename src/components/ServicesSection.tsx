import { motion } from "framer-motion";
import { Home, Hammer, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roof Structures",
    description: "Design and installation of strong roofing structures for schools, homes and commercial buildings.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Professional building construction services from foundation to finishing.",
  },
  {
    icon: Layers,
    title: "Form Works",
    description: "Accurate and reliable concrete formwork solutions for any project scale.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Repair and maintenance of roofing structures and buildings to extend their lifespan.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-black text-foreground sm:text-4xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Comprehensive construction solutions delivered with precision and reliability.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            viewport={{ once: true }}
            className="card-shadow group rounded-xl bg-card p-6 transition-shadow duration-200 hover:card-shadow-hover"
            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <service.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
