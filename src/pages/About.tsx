import { motion } from "framer-motion";
import { Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Seo from "@/components/Seo";
import hero2 from "@/assets/Images/Completed Projects/completed (8).jpg";

const About = () => (
  <>
    <Seo
      title="About ssekta Real Contructors | Trusted Construction Company in Mukono"
      description="Learn about ssekta Real Contructors' mission, top-quality service, and 10+ years of experience in roofing structures, form works, and building maintenance."
      url="https://sekta-real-contructors.com/about"
      canonical="https://sekta-real-contructors.com/about"
      image="https://sekta-real-contructors.com/about-og.jpg"
      keywords="about ssekta real contructors, construction company mukono, roofing experience uganda"
    />
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
                About <span className="text-accent">ssekta Real</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                ssekta Real Constructors is a professional construction company based in Seeta, Mukono
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
                alt="ssekta Real construction project"
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
