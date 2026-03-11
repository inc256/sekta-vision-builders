import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Images/Logos/Sekta-Real-Constructors-Logo-Black.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Sekta Real Constructors" 
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.path.startsWith("/#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
            <Button asChild variant="accent" size="lg">
              <a href="tel:+256705941023">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-border pb-4 lg:hidden">
            <div className="flex flex-col gap-1 pt-4">
              {navItems.map((item) =>
                item.path.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className="rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-2 px-4">
                <Button asChild variant="accent" size="lg" className="w-full">
                  <a href="tel:+256705941023">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
