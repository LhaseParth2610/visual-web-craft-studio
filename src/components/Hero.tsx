
import { ArrowDown, Github, Linkedin, Terminal, Code, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-hero-pattern"
    >
      {/* Animated background blobs */}
      <div className="blob bg-primary/20 top-1/4 left-1/4 animate-blob"></div>
      <div className="blob bg-accent/20 bottom-1/4 right-1/4 animate-blob animation-delay-2000"></div>
      <div className="blob bg-blue-500/20 bottom-1/3 left-1/3 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4 gap-6">
        <span className="px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in flex items-center gap-2">
          <Terminal size={16} /> <span className="hidden sm:inline">Welcome to my portfolio</span><span className="sm:hidden">Welcome</span>
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl animate-fade-in">
          Hello, I'm <span className="gradient-text">Parth Lhase</span> <br />
          <span className="typewriter inline-block font-mono">
            Coding minds, shaping mine
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 animate-fade-in font-mono">
          <span className="text-primary font-bold">$ </span>
          AI & Data Science Engineer creating intelligent solutions through code. Turning complex problems into elegant algorithms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
          <Button size="lg" className="rounded-full text-base px-8 font-mono group">
            <Code className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 font-mono">
            <Beaker className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        <div className="flex gap-4 mt-4">
          <a href="https://github.com/LhaseParth2610" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Github className="h-6 w-6 text-foreground hover:text-primary" />
          </a>
          <a href="https://linkedin.com/in/parth-lhase-60342a330" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Linkedin className="h-6 w-6 text-foreground hover:text-primary" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-float">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-10 w-10 text-primary opacity-80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
