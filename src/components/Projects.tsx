
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code } from "lucide-react";

type ProjectCategory = "all" | "web" | "mobile" | "design";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory[];
  repoUrl: string;
  demoUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: ["web", "design"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customers of an online store.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Next.js", "MongoDB", "Chart.js"],
    category: ["web"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A mobile app that shows weather forecasts using a public API.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["React Native", "API Integration", "Geolocation"],
    category: ["mobile"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    category: ["web", "design"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "design", label: "Design" },
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
            Explore some of my recent work showcasing my skills and the 
            technologies I've been working with.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/50 animate-fade-in"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-slate-200 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 backdrop-blur-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full gap-2">
            <Code className="h-5 w-5 mr-1" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
