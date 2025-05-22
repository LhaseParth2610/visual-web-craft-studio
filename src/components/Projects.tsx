
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code, Terminal, Beaker, Database, FastForward, FileCode } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  repoUrl: string;
  date: string;
  icon: React.ReactNode;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Disease Predictor",
    description: "Full-stack ML app to predict 8 critical diseases using integrated models",
    details: [
      "Built a full-stack ML app to predict 8 critical diseases using user inputs via an interactive FastAPI + React interface.",
      "Designed modular backend and responsive frontend with TailwindCSS, enabling cross-device usability.",
      "Enabled real-time predictions for diseases like Anemia, Heart Disease, Stroke, using scikit-learn models.",
      "Integrated APIs for user feedback and dynamic retraining to support continuous model improvement.",
      "Used MLflow for experiment tracking and Docker Compose for easy deployment; CI/CD via GitHub Actions."
    ],
    tags: ["Python", "FastAPI", "React", "TailwindCSS", "Docker", "MLflow", "scikit-learn", "GitHub Actions"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    icon: <Beaker className="h-5 w-5 text-primary" />
  },
  {
    id: 2,
    title: "Personal AI Assistant",
    description: "Tkinter-based AI assistant that automates everyday tasks with Mistral 7B",
    details: [
      "Developing a sleek Tkinter-based AI assistant that automates everyday tasks like email drafting and e-commerce searches.",
      "Powered by Mistral 7B and Selenium with queue-based threading for real-time, responsive interactions.",
      "Implemented Gmail automation allowing natural language prompts to draft and send emails with editable feedback loops.",
      "Built an e-commerce search tool to fetch and display Amazon product data (name, price, image, etc.) with threaded performance.",
      "Planned features include social media scheduling, file organizers, budget tracking, and study planners."
    ],
    tags: ["Python", "Tkinter", "Mistral 7B", "Selenium", "Threading"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "May 2025",
    icon: <Terminal className="h-5 w-5 text-primary" />,
    inProgress: true
  },
  {
    id: 3,
    title: "Waste Classification Pipeline",
    description: "End-to-end deep learning system for waste classification across six categories",
    details: [
      "Engineered an end-to-end waste classification system for six categories (plastic, paper, metal, etc.) using deep learning.",
      "Built a complete data pipeline from raw image ingestion to train-test split and preprocessing via modular YAML-driven configs.",
      "Created category-specific folder structures and automated dataset splitting using scikit-learn and custom scripts.",
      "Implemented Keras-based CNN model training with real-time image augmentation and classification report generation.",
      "Used MLflow for tracking experiments and evaluation metrics; containerized with Docker for reproducibility.",
      "Automated project execution via CLI-enabled Python scripts and parameterized config files (params.yaml)."
    ],
    tags: ["Python", "Keras", "Docker", "MLflow", "YAML", "CNN", "scikit-learn"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    icon: <FileCode className="h-5 w-5 text-primary" />
  },
  {
    id: 4,
    title: "Fantasy Cricket Team Optimizer",
    description: "ML system for fantasy Champions Trophy ODI team selection",
    details: [
      "Built a machine learning system for a gameathon to optimize fantasy Champions trophy ODI team selection using player data.",
      "Applied linear programming (PuLP) to maximize performance under constraints."
    ],
    tags: ["Python", "PuLP", "BeautifulSoup", "Pandas", "Docker"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    icon: <Code className="h-5 w-5 text-primary" />
  },
  {
    id: 5,
    title: "ResQ: Disaster Management System",
    description: "Prize-winning disaster management platform for emergency communication",
    details: [
      "Developed a prize-winning disaster management platform (1st Place, Techathon) to enable swift communication between the public and authorities during emergencies."
    ],
    tags: ["Flask", "PostgreSQL", "Google Maps API", "NLP", "CNN"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "February 2025",
    icon: <Database className="h-5 w-5 text-primary" />
  },
  {
    id: 6,
    title: "EduLite OS - Lightweight Linux",
    description: "Custom Linux distro for low-end hardware in education",
    details: [
      "Built a custom Linux distro using Cubic to provide a free, offline-capable OS for low-end hardware (2GB RAM), aimed at schools and students with limited tech access."
    ],
    tags: ["Xubuntu", "LXQt", "Python", "Cubic", "ZRAM"],
    repoUrl: "https://github.com/LhaseParth2610",
    date: "April 2025",
    icon: <Terminal className="h-5 w-5 text-primary" />
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50/50 to-gray-100/30 dark:from-slate-900/20 dark:to-slate-800/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id}
              className="group border border-border/60 hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] dark:shadow-primary/5 animate-fade-in bg-card/80 backdrop-blur-sm dark:bg-slate-800/50 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary/90 text-primary-foreground text-xs py-1 px-3 rounded-bl-lg font-mono shadow-sm flex items-center gap-1.5">
                {project.inProgress && <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>}
                {project.date}
              </div>
              
              <CardHeader className="pb-2 relative">
                <div className="absolute -left-10 -top-10 w-20 h-20 rounded-full bg-primary/5 dark:bg-primary/10 z-0"></div>
                <CardTitle className="text-xl font-bold flex items-center gap-3 z-10">
                  <div className="p-2.5 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    {project.icon}
                  </div>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-medium text-sm mt-1">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4 flex-grow">
                <ul className="text-sm space-y-2 list-disc pl-5 marker:text-primary">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-foreground/90">{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 font-mono text-xs transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 5 && (
                    <Badge
                      variant="outline"
                      className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 font-mono text-xs"
                    >
                      +{project.tags.length - 5}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-2 flex justify-between border-t border-border/50 mt-auto">
                <div className="text-xs font-mono text-muted-foreground flex items-center">
                  <span className="text-primary mr-1.5">$</span> project_{project.id} 
                </div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground transition-colors duration-200 flex gap-1 items-center text-xs font-mono"
                >
                  <Github className="h-4 w-4 mr-1" />
                  <span>View Code</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full gap-2 font-mono shadow-sm hover:shadow-md transition-all border-primary/30 hover:border-primary/70 hover:bg-primary/10"
              onClick={() => setShowAll(true)}
            >
              <FastForward className="h-5 w-5 mr-1" />
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
