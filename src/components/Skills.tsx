import { useState } from "react";
import { Progress } from "@/components/ui/progress";

type SkillCategory = "frontend" | "backend" | "other";

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  const skills: Skill[] = [
    // Frontend
    { name: "HTML & CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Vue.js", level: 70, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "backend" },
    { name: "Django", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 75, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "GraphQL", level: 65, category: "backend" },
    
    // Other
    { name: "Git", level: 90, category: "other" },
    { name: "Docker", level: 75, category: "other" },
    { name: "AWS", level: 70, category: "other" },
    { name: "UI/UX Design", level: 80, category: "other" },
    { name: "CI/CD", level: 75, category: "other" },
    { name: "Agile", level: 85, category: "other" },
  ];

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  const categories: { value: SkillCategory; label: string }[] = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "other", label: "Tools & Others" },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical skills and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-background dark:bg-slate-800 rounded-full p-1 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-2.5 rounded-full text-base transition-all ${
                    activeCategory === category.value
                      ? "bg-primary text-white shadow-sm"
                      : "hover:bg-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="animate-fade-in">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-8 text-center">Technologies I Work With</h3>
            <div className="glassmorphism rounded-xl p-8 flex flex-wrap gap-6 justify-center items-center">
              {[
                "React", "Next.js", "TypeScript", "Node.js", 
                "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS",
                "Docker", "Git", "GitHub Actions", "Firebase",
              ].map((tech) => (
                <div 
                  key={tech} 
                  className="px-4 py-2 rounded-lg bg-background/70 dark:bg-slate-800/70 
                           shadow-sm border border-border hover:border-primary/50 
                           transition-colors duration-200 font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
