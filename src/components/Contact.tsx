import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Globe, Languages, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  const personalDetails = {
    dateOfBirth: "3 December 2002",
    languages: ["English", "Hindi", "French"],
    maritalStatus: "Unmarried"
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanishkasr@gmail.com",
      action: "mailto:tanishkasr@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9599339265",
      action: "tel:+919599339265"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "G-31, Karampura, New Delhi – 110015",
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-glow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to drive measurable impact at a forward-thinking organization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{contact.label}</p>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-primary hover:text-primary-glow transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                <div className="pt-4 space-y-4">
                  <Button 
                    variant="portfolio" 
                    size="lg" 
                    className="w-full"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Schedule a Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Details */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Date of Birth</p>
                    <p className="text-muted-foreground">{personalDetails.dateOfBirth}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Languages className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {personalDetails.languages.map((language, index) => (
                        <Badge key={index} variant="secondary">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Marital Status</p>
                    <p className="text-muted-foreground">{personalDetails.maritalStatus}</p>
                  </div>
                </div>

                {/* Career Focus */}
                <div className="pt-4 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Career Objective</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seeking to drive measurable impact at a forward-thinking organization through 
                    advanced data analysis, AI integration, and cross-functional collaboration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-8 bg-white/95 backdrop-blur-sm text-center">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Make an Impact Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm excited about opportunities in finance, analytics, and data-driven roles where 
                I can contribute to business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="portfolio" size="lg">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;