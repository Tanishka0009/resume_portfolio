import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary to-primary-glow flex items-center">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Finance & Analytics Professional
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                TANISHKA
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Results-oriented management postgraduate with expertise in finance, analytics, 
                and data-driven solutioning. Committed to enabling business growth through 
                advanced data analysis, AI integration, and cross-functional collaboration.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9599339265</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">tanishkasr@gmail.com</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-white">T</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;