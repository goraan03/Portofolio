import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Courses App",
    description: "A comprehensive platform for managing and buying courses, built with C# and XAML.",
    Image: "/projects/Kursevi.png",
    tags: ["C#", "XAML", "WPF"],
    demoURL: "#",
    githubURL: "#"
  },
  {
    id: 2,
    title: "Console MOBA Game",
    description: "A console-based MOBA game featuring a variety of characters, potions, maps and weapons, developed in C#.",
    Image: "/projects/MOBAGame.png",
    tags: ["C#", "MOQ", ".NET", "NUnit"],
    demoURL: "#",
    githubURL: "https://github.com/goraan03/ers_E03_tim_3"
  },
  {
    id: 3,
    title: "Portofolio Website",
    description: "A personal portfolio website showcasing my projects and skills, built with ReactJS and Tailwind CSS.",
    Image: "/projects/portofolio.png",
    tags: ["ReactJS", "TailwindCSS", "JavaScript"],
    demoURL: "#hero",
    githubURL: "https://github.com/goraan03/Portofolio"
  }  
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary "> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                Here are some of the projects I have worked on, showcasing my skills in various technologies and frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadov-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.Image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                                </div>
                            </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/goraan03" target="_blank"> Check My GitHub <ArrowRight size={16}/></a>
            </div>

        </div>
    </section>;
};