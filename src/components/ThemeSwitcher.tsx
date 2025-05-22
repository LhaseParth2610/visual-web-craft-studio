
import { useState, useEffect } from "react";
import { Sun, Moon, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default to dark for nerdy feel

  // On mount, detect system preference
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(isDarkMode ? "dark" : "light");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full group relative"
      aria-label="Toggle theme"
    >
      <span className="absolute -top-10 right-0 bg-background border border-border px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
        {theme === "light" ? "$ theme --dark" : "$ theme --light"}
      </span>
      {theme === "light" ? (
        <Moon size={18} className="text-primary" />
      ) : (
        <Sun size={18} className="text-primary" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
