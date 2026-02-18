import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Smartphone, Video, Globe, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/image_1771430867466.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={stagger}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Innovating the Future
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
                Tech Solutions for <br />
                <span className="text-gradient">Modern Problems</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                We transform ideas into digital reality. From websites and apps to drone mapping and SEO, 
                SolveitByTech is your partner in digital innovation.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-gradient-to-tr from-white/10 to-transparent p-1 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="bg-secondary/80 rounded-xl overflow-hidden aspect-video relative group">
                  {/* Abstract tech visualization or dashboard placeholder */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50" />
                   <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Digital Innovation Team" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <img src={logo} className="w-12 h-12" alt="Logo" />
                          <div>
                            <h3 className="font-bold text-white">SolveitByTech</h3>
                            <p className="text-xs text-muted-foreground">Digital Excellence</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-primary w-[85%]" />
                           </div>
                           <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Project Completion</span>
                              <span>98%</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business in the modern landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Globe} 
              title="Web Development" 
              desc="Static, dynamic, and e-commerce solutions built with modern frameworks." 
            />
            <ServiceCard 
              icon={Smartphone} 
              title="App Development" 
              desc="Native iOS and Android applications that deliver exceptional user experiences." 
            />
            <ServiceCard 
              icon={Search} 
              title="SEO Optimization" 
              desc="Data-driven strategies to boost your visibility and drive organic traffic." 
            />
            <ServiceCard 
              icon={Video} 
              title="Video Editing" 
              desc="Professional post-production services for impactful visual storytelling." 
            />
            <ServiceCard 
              icon={Zap} 
              title="Drone Photogrammetry" 
              desc="High-precision aerial mapping and surveying solutions." 
            />
            <ServiceCard 
              icon={Code} 
              title="Custom Software" 
              desc="Tailored software solutions designed to solve your specific business challenges." 
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2">
                View All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-primary p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 font-display">Backed by Industry Leaders</h2>
                <p className="text-white/80 max-w-lg mb-8">
                  Our strategic partners help us deliver world-class solutions.
                  Recognized by innovators like Rajath Shetty & Sanjay N.
                </p>
                <div className="flex items-center gap-8">
                   <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-bold text-white">RS</div>
                      <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-bold text-white">SN</div>
                   </div>
                   <div className="text-sm font-medium text-white">
                      Trusted Partners
                   </div>
                </div>
              </div>
              <div className="relative z-10">
                <Link href="/about">
                  <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
                    Meet the Team
                  </Button>
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's build something amazing together. Get in touch for a free consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
