
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code, Terminal, Beaker, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCategory = "all" | "ai" | "app" | "linux";

type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
  category: ProjectCategory[];
  repoUrl: string;
  date: string;
  tech: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fantasy Cricket Team Optimizer",
    description: "ML system for fantasy Champions Trophy ODI team selection",
    details: "Built a machine learning system for a gameathon to optimize fantasy Champions trophy ODI team selection using player data, applying linear programming (PuLP) to maximize performance under constraints.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "PuLP", "BeautifulSoup", "Pandas", "Docker"],
    category: ["ai", "app"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    tech: "Python, PuLP, BeautifulSoup, Pandas, Docker"
  },
  {
    id: 2,
    title: "ResQ: Disaster Management System",
    description: "Prize-winning disaster management platform for emergency communication",
    details: "Developed a prize-winning disaster management platform (1st Place, Techathon) to enable swift communication between the public and authorities during emergencies.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Flask", "PostgreSQL", "Google Maps API", "NLP", "CNN"],
    category: ["app", "ai"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    tech: "Flask, PostgreSQL, Google Maps API, NLP, CNN"
  },
  {
    id: 3,
    title: "EduLite OS - Lightweight Linux",
    description: "Custom Linux distro for low-end hardware in education",
    details: "Built a custom Linux distro using Cubic to provide a free, offline-capable OS for low-end hardware (2GB RAM), aimed at schools and students with limited tech access.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Xubuntu", "LXQt", "Python", "Cubic", "ZRAM"],
    category: ["linux"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "April 2025",
    tech: "Xubuntu, LXQt, Python, Cubic, ZRAM"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "ai", label: "AI & ML" },
    { value: "app", label: "Applications" },
    { value: "linux", label: "Linux" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-mono text-primary">$ cat ~/projects/showcase.txt</span><br />
            Explore my recent work showcasing my skills in AI, data science and application development.
          </p>
        </div>

        <div className="flex overflow-x-auto py-4 mb-12 hide-scrollbar justify-center">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="rounded-full text-base px-6"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in bg-card/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs py-1 px-2 rounded font-mono">
                  {project.date}
                </div>
              </div>

              <CardHeader className="relative z-10 pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  {project.id === 1 && <Code className="h-5 w-5 text-primary" />}
                  {project.id === 2 && <Database className="h-5 w-5 text-primary" />}
                  {project.id === 3 && <Terminal className="h-5 w-5 text-primary" />}
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-sm">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex justify-between">
                <div className="text-xs font-mono text-muted-foreground">
                  <span className="text-primary">&gt;</span> {project.tech.split(',')[0]}...
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-muted hover:bg-primary/20 text-foreground transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full gap-2 font-mono">
            <Github className="h-5 w-5 mr-1" />
            More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
