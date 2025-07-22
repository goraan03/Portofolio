import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you as soon as possible.",
                duration: 3000,
            });
            setIsSubmitting(false);
        }, 1500);
        
    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Also, if you have any proposals, for job opportunities, or internships, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8 ">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:gorangrcic72@gmail.com" className="text-muted-foreground hover:text-primary transsition-colors">gorangrcic72@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+381652239463" className="text-muted-foreground hover:text-primary transsition-colors">+381 65/223-9463</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transsition-colors">Novi Sad, Serbia</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me </h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/goran-grčić-7480862a6" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/goraan03" target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://facebook.com/goran.003" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                            placeholder="Your Name..."/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email </label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                            placeholder="someone@gmail.com"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                            <textarea 
                            id="message" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I'd like to talk about..."/>
                        </div>
                        <button 
                        type="submit" 
                        disabled={isSubmiting}
                        className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            
                        )}>
                            {isSubmiting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </section>
}