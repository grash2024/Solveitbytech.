import { Link } from "wouter";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@assets/image_1771430867466.png";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-lg p-1">
                <img src={logo} alt="SolveitByTech" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                Solveit<span className="text-primary">ByTech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From web to drones, we solve it all.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Instagram} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Github} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/projects">Our Work</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="/services">Web Development</FooterLink>
              <FooterLink href="/services">App Development</FooterLink>
              <FooterLink href="/services">SEO Optimization</FooterLink>
              <FooterLink href="/services">Drone Photogrammetry</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Tech Park, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@solveitbytech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SolveitByTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Icon size={18} />
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}
