import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-black">Ssekta Real Contructors</h3>
          <p className="mt-2 text-sm italic text-primary-foreground/70">
            "Only the best is good enough"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <a href="tel:+256705941023" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> +256 705 941023
            </a>
            <a href="tel:+256776529485" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> +256 776 529485
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Seeta, Mukono, Uganda.
            </span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ssekta Real Contructors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
