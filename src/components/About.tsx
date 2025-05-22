
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Briefcase, User, Terminal, Github, Flask } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-24 bg-muted/40">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Image section */}
          <div className="w-full md:w-2/5 lg:w-5/12 relative">
            <div className="w-full aspect-square relative z-10 rounded-2xl overflow-hidden shadow-xl animate-fade-right">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/30 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -right-6 w-36 h-36 bg-accent rounded-lg shadow-lg hidden md:flex flex-col items-center justify-center text-white p-4 rotate-6">
              <span className="text-4xl font-bold">AI</span>
              <span className="text-sm text-center">& Data Science</span>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-3/5 lg:w-7/12 animate-fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-8 w-full justify-start bg-transparent p-0 space-x-4">
                <TabsTrigger
                  value="about"
                  className={`data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 px-5 py-2.5 rounded-lg transition-all`}
                  onClick={() => setActiveTab("about")}
                >
                  <User className="h-4 w-4 mr-2" />
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className={`data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 px-5 py-2.5 rounded-lg transition-all`}
                  onClick={() => setActiveTab("education")}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className={`data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 px-5 py-2.5 rounded-lg transition-all`}
                  onClick={() => setActiveTab("technical")}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Technical
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-0">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    I'm a passionate AI & Data Science Engineer with a focus on creating intelligent and innovative solutions. 
                    Currently pursuing my BTech in Artificial Intelligence and Data Science, I love working on projects 
                    that combine advanced algorithms with practical applications.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    My projects range from machine learning systems for fantasy cricket team optimization to disaster management platforms 
                    and lightweight Linux distributions for education. I'm always looking to push the boundaries of what's possible through code.
                  </p>
                  <div className="flex items-center pt-4">
                    <Terminal className="h-5 w-5 text-accent mr-2" />
                    <p className="font-medium font-mono">$ passion --list="AI, Data Science, Linux, Python, Full-stack development"</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-xl font-semibold">BTech in Artificial Intelligence and Data Science</h3>
                    <p className="text-primary">AISSMS Institute Of Information Technology • 2022 - Present</p>
                    <p className="mt-2 text-muted-foreground">
                      Pune, Maharashtra
                    </p>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">
                      <span className="text-primary">&gt;</span> Studying cutting-edge AI and data science technologies
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-0">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    I specialize in AI, data science and full-stack development, with a focus on creating intelligent, 
                    efficient and scalable applications.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <p className="text-muted-foreground">
                        Python, C++, HTML/CSS, JavaScript, SQL
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Frameworks</h4>
                      <p className="text-muted-foreground">
                        TensorFlow, Streamlit, Flask
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Developer Tools</h4>
                      <p className="text-muted-foreground">
                        VS Code, Google Cloud Platform, Git, Jupyter Notebook, Docker
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Libraries</h4>
                      <p className="text-muted-foreground">
                        Keras, Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn, BeautifulSoup
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
