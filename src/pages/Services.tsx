import { motion } from "framer-motion";
import { Home, Hammer, Layers, Wrench, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const services = [
  {
    icon: Home,
    title: "Roof Structures",
    description: "Design and installation of strong roofing structures for schools, homes and commercial buildings.",
    features: [
      "Steel roof truss design and installation",
      "Roof sheet installation",
      "Roof repairs and renovations",
      "Custom roofing solutions",
    ],
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Professional building construction services from foundation to finishing.",
    features: [
      "Residential construction",
      "Commercial building projects",
      "Foundation work",
      "Complete building solutions",
    ],
  },
  {
    icon: Layers,
    title: "Form Works",
    description: "Accurate and reliable concrete formwork solutions for any project scale.",
    features: [
      "Concrete formwork installation",
      "Reinforcement bar placement",
      "Custom formwork design",
      "Quality formwork solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Repair and maintenance of roofing structures and buildings to extend their lifespan.",
    features: [
      "Roof inspections",
      "Leak repairs",
      "Structural maintenance",
      "Building restoration",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Services | Sekta Real Constructors - Roofing, Form Works, Construction"
        description="Explore Sekta Real Constructors' services including roof structures, full building construction, formwork systems, and maintenance services in Uganda."
        url="https://sekta-real-constructors.com/services"
        canonical="https://sekta-real-constructors.com/services"
        image="https://sekta-real-constructors.com/services-og.jpg"
        keywords="construction services uganda, roof structure service, formwork contractor mukono"
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl font-black text-foreground sm:text-5xl">Our Services</h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Comprehensive construction solutions delivered with precision and reliability.
                Quality craftsmanship for every project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-shadow group rounded-xl bg-card p-8 transition-shadow duration-200 hover:card-shadow-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Link
                      to="/portfolio"
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      View Related Projects →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-foreground">Need Our Services?</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Contact us today for a free consultation and quote on your construction project.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Services;
