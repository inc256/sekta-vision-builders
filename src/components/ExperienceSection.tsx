import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import parallaxBg from "@/assets/parallax-bg.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 6, suffix: "+", label: "Schools Roofed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl font-black tabular-nums text-accent sm:text-5xl">
      {count}{suffix}
    </div>
  );
};

const ExperienceSection = () => (
  <section
    className="parallax-section relative py-20 sm:py-28"
    style={{ backgroundImage: `url(${parallaxBg})` }}
  >
    <div className="absolute inset-0" style={{ backgroundColor: "var(--parallax-overlay)" }} />
    <div className="section-container relative">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-accent-foreground/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
