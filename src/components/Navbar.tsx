
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-slate-200/20 dark:border-slate-700/20" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex-1 md:flex-none">
          <a 
            href="#hero" 
            className="text-xl font-display font-bold gradient-text group transition-all"
          >
            P<span className="text-primary group-hover:text-accent transition-colors">.</span>FOLIO
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex gap-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-medium hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-primary/70 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher and Mobile Menu */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <ThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background/95 dark:bg-slate-900/95 backdrop-blur-md p-4 shadow-md md:hidden animate-fade-in border-b border-slate-200/20 dark:border-slate-700/20">
            <ul className="flex flex-col gap-4">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block py-2 font-medium hover:text-primary transition-colors duration-200 border-l-2 border-transparent hover:border-primary pl-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
