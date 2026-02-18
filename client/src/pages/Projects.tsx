import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using Unsplash placeholders as specific project images weren't provided yet
const projects = [
  {
    title: "Sreeyan Developers",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    description: "A comprehensive real estate platform built for Sreeyan Developers featuring property listings and dynamic search.",
    link: "https://sreeyandevelopers.com"
  },
  {
    title: "E-Commerce Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop&q=60",
    description: "Full-stack e-commerce solution with cart management, payment integration, and admin dashboard.",
    link: "#"
  },
  {
    title: "Drone Mapping Initiative",
    category: "Photogrammetry",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop&q=60",
    description: "Large scale agricultural land mapping project using high-precision drone photogrammetry.",
    link: "#"
  },
  {
    title: "Tech Startup Branding",
    category: "Design & SEO",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60",
    description: "Complete brand overhaul including logo design, social media assets, and SEO strategy.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of our recent work across web development, design, and specialized tech solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-primary text-sm font-medium mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary">
                        <ExternalLink size={20} />
                      </Button>
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
