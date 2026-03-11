import { motion } from "framer-motion";
import { Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import hero2 from "@/assets/hero-2.jpg";

const About = () => (
  <>
    <Navbar />
    <main>
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl font-black text-foreground sm:text-5xl">
                About <span className="text-accent">Sekta Real</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Sekta Real Constructors is a professional construction company based in Seeta, Mukono
                with over 10 years of experience delivering roofing structures, construction services,
                form works, and maintenance.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                The company has successfully completed projects for schools and institutions across
                Mukono and surrounding districts, building a reputation for quality and reliability.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Deliver strong, reliable and high-quality construction work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Our Motto</h3>
                    <p className="text-sm italic text-muted-foreground">
                      "Only the best is good enough."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={hero2}
                alt="Sekta Real construction project"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default About;
