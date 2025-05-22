
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Briefcase, User, Heart } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -right-6 w-36 h-36 bg-accent rounded-lg shadow-lg hidden md:flex flex-col items-center justify-center text-white p-4 rotate-6">
              <span className="text-4xl font-bold">5+</span>
              <span className="text-sm text-center">Years Experience</span>
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
                  value="experience"
                  className={`data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 px-5 py-2.5 rounded-lg transition-all`}
                  onClick={() => setActiveTab("experience")}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
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
                    I'm a passionate developer with a focus on creating beautiful and functional web applications. 
                    With over 5 years of experience in the industry, I've worked on a variety of projects from small business websites to complex enterprise applications.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    My goal is to create digital experiences that are not only visually stunning but also intuitive and accessible to all users. I believe that great design and solid engineering can make a real difference in people's lives.
                  </p>
                  <div className="flex items-center pt-4">
                    <Heart className="h-5 w-5 text-accent mr-2" />
                    <p className="font-medium">What I love: Clean code, creative solutions, and continuous learning</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="mt-0">
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-xl font-semibold">Senior Developer</h3>
                    <p className="text-primary">Company Name • 2021 - Present</p>
                    <p className="mt-2 text-muted-foreground">
                      Led development of multiple web applications, mentored junior developers, and implemented CI/CD pipelines.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-xl font-semibold">Web Developer</h3>
                    <p className="text-primary">Another Company • 2018 - 2021</p>
                    <p className="mt-2 text-muted-foreground">
                      Developed and maintained client websites, implemented responsive designs, and optimized performance.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="text-xl font-semibold">Junior Developer</h3>
                    <p className="text-primary">First Company • 2016 - 2018</p>
                    <p className="mt-2 text-muted-foreground">
                      Assisted in the development of web applications, fixed bugs, and implemented new features.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-0">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    I specialize in modern web technologies and frameworks, with a focus on creating performant, accessible, and responsive applications.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <p className="text-muted-foreground">
                        React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-muted-foreground">
                        Node.js, Express, Python, Django, PostgreSQL
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">DevOps</h4>
                      <p className="text-muted-foreground">
                        Docker, GitHub Actions, AWS, Netlify, Vercel
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Tools</h4>
                      <p className="text-muted-foreground">
                        Git, VS Code, Figma, Adobe XD, Notion
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
