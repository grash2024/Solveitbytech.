import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, User } from "lucide-react";
import logo from "@assets/image_1771430867466.png";

export default function About() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Who We <span className="text-gradient">Are</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SolveitByTech is more than just a technology company. We are a team of passionate problem solvers dedicated to transforming businesses through innovative digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded with a vision to bridge the gap between complex technology and business needs, we specialize in delivering end-to-end solutions ranging from web development to advanced drone photogrammetry.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <Stat number="50+" label="Projects" />
              <Stat number="20+" label="Clients" />
              <Stat number="100%" label="Satisfaction" />
            </div>

            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                Work With Us
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 absolute -z-10 blur-3xl w-full h-full" />
            <div className="bg-card border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
               <img src={logo} alt="SolveitByTech Logo" className="w-full h-auto object-contain mx-auto mb-6 opacity-90" />
               <blockquote className="text-center text-xl font-medium text-white italic">
                 "Technology is best when it brings people together and solves real-world problems."
               </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <ValueCard 
            icon={Target}
            title="Our Mission"
            desc="To empower businesses of all sizes with affordable, high-quality technological solutions."
          />
          <ValueCard 
            icon={Users}
            title="Our Vision"
            desc="To be the leading tech partner for startups and enterprises, known for innovation and reliability."
          />
          <ValueCard 
            icon={Award}
            title="Our Values"
            desc="Integrity, Innovation, and Excellence are at the core of everything we do."
          />
        </div>

        {/* Team/Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Leadership & Partners</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember 
              name="Rajath Shetty"
              role="Strategic Partner"
            />
            <TeamMember 
              name="Sanjay N"
              role="Strategic Partner"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5 text-center hover:bg-secondary/50 transition-colors">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}

function TeamMember({ name, role }: { name: string, role: string }) {
  return (
    <div className="bg-card border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/30 transition-colors">
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
        {name.split(" ").map(n => n[0]).join("")}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-primary">{role}</p>
      </div>
    </div>
  );
}
