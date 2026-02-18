import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Code, Smartphone, Video, Globe, Zap, Search, Layout, Database, Camera, PenTool
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "From sleek static portfolios to complex dynamic web applications and robust E-commerce platforms. We build responsive, fast, and secure websites tailored to your brand.",
    tags: ["Static", "Dynamic", "E-Commerce", "Next.js", "React"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. We focus on intuitive UI/UX and seamless performance to keep your users engaged.",
    tags: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Boost your online visibility with our data-driven SEO strategies. We optimize your content and technical structure to rank higher on search engines.",
    tags: ["Keyword Research", "On-Page SEO", "Analytics", "Growth"]
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional video post-production services. We turn raw footage into compelling stories for your marketing campaigns, social media, or corporate presentations.",
    tags: ["Post-Production", "Color Grading", "Motion Graphics"]
  },
  {
    icon: Camera,
    title: "Drone Photogrammetry",
    desc: "High-precision aerial mapping and 3D modeling. Perfect for construction, real estate, and land surveying requirements.",
    tags: ["Aerial Mapping", "3D Modeling", "Surveying"]
  },
  {
    icon: PenTool,
    title: "Poster & Graphic Design",
    desc: "Eye-catching visual designs for your marketing materials. From posters to brochures, we ensure your brand message stands out.",
    tags: ["Branding", "Print Design", "Digital Art"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of digital solutions designed to help your business grow and succeed in the digital age.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-secondary to-background border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Don't see exactly what you're looking for? We love challenges. Contact us to discuss your unique project requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
