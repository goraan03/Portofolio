import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative"> 
    {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Aspiring Web Developer & Software Engineering Student
                    </h3>

                    <p className="text-muted-foreground">
                        I'm a computer science student specializing in Software Engineering, with a strong passion for web development and building user-friendly applications. 
                        I enjoy working with modern technologies, and constantly seek to improve my skills through personal projects and continuous learning. 
                        I'm especially interested in frontend development, UI/UX, and creating responsive web applications that offer great user experiences.
                    </p>

                    <p className="text-muted-foreground">
                        I'm always eager to learn new technologies and stay up to date with current trends in the software industry. 
                        My goal is to work on impactful projects, collaborate with inspiring teams, and grow as a developer through real-world experience. 
                        I'm particularly drawn to creating modern, efficient, and scalable web solutions that solve real problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 trnsition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground"> Creating responsive websites and web applications with modern frameworks. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="text-muted-foreground"> Designing intuitive user interfaces and seamless user experiences. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Menagement </h4>
                                <p className="text-muted-foreground"> Leading projects from conception to completion with agile methodologies. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}
