
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Terminal, Code, Database } from "lucide-react";

type SkillCategory = "languages" | "frameworks" | "tools" | "libraries";

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("languages");

  const skills: Skill[] = [
    // Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "C++", level: 85, category: "languages" },
    { name: "HTML/CSS", level: 80, category: "languages" },
    { name: "JavaScript", level: 75, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },
    
    // Frameworks
    { name: "TensorFlow", level: 85, category: "frameworks" },
    { name: "Streamlit", level: 80, category: "frameworks" },
    { name: "Flask", level: 85, category: "frameworks" },
    { name: "Fast Api", level: 75, category: "frameworks" },

    
    // Tools
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Google Cloud Platform", level: 75, category: "tools" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Jupyter Notebook", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    
    // Libraries
    { name: "Keras", level: 85, category: "libraries" },
    { name: "Pandas", level: 90, category: "libraries" },
    { name: "NumPy", level: 85, category: "libraries" },
    { name: "Matplotlib", level: 80, category: "libraries" },
    { name: "Scikit-learn", level: 85, category: "libraries" },
    { name: "Seaborn", level: 75, category: "libraries" },
    { name: "BeautifulSoup", level: 80, category: "libraries" },
    { name: "Selenium", level: 85, category: "libraries" },
  ];

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  const categories: { value: SkillCategory; label: string }[] = [
    { value: "languages", label: "Languages" },
    { value: "frameworks", label: "Frameworks" },
    { value: "tools", label: "Dev Tools" },
    { value: "libraries", label: "Libraries" },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-mono text-primary">$ ls ~/skills</span><br />
            A comprehensive overview of my technical expertise in AI, data science, and development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-background dark:bg-slate-800 rounded-full p-1 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-2.5 rounded-full text-base transition-all font-mono ${
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
                  <span className="font-mono font-medium flex items-center gap-1">
                    <span className="text-primary">&gt;</span> {skill.name}
                  </span>
                  <span className="text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-8 text-center font-mono flex items-center justify-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Tech Stack
            </h3>
            <div className="glassmorphism rounded-xl p-8 flex flex-wrap gap-6 justify-center items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                {[
                  {name: "Python", icon: Code},
                  {name: "TensorFlow", icon: Database},
                  {name: "Flask", icon: Code},
                  {name: "Pandas", icon: Database},
                  {name: "Docker", icon: Terminal},
                  {name: "Git", icon: Terminal},
                  {name: "NumPy", icon: Database},
                  {name: "SQL", icon: Database},
                  {name: "C++", icon: Code},
                  {name: "Scikit-learn", icon: Database},
                  {name: "Streamlit", icon: Code},
                  {name: "Keras", icon: Database},
                ].map((tech) => (
                  <div 
                    key={tech.name} 
                    className="px-4 py-3 rounded-lg bg-background/70 dark:bg-slate-800/70 
                           shadow-sm border border-border hover:border-primary/50 
                           transition-colors duration-200 font-mono text-sm flex items-center gap-2"
                  >
                    <tech.icon className="h-4 w-4 text-primary" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
