import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics & AI Intern",
      company: "Novitech Pvt Ltd",
      duration: "3 months",
      location: "Remote",
      achievements: [
        "Performed advanced exploratory data analysis and predictive modeling in Python",
        "Automated dashboards and reporting for real-time performance tracking using advanced analytics tools"
      ],
      type: "Internship"
    },
    {
      title: "HR Intern",
      company: "Recruit Nxt",
      duration: "3 months",
      location: "Remote",
      achievements: [
        "Managed initial screening, interviews, and candidate assessments",
        "Matched applicants to client requirements using structured evaluation matrices"
      ],
      type: "Internship"
    },
    {
      title: "Campus Ambassador",
      company: "INGLU Organization",
      duration: "1 month",
      location: "On-campus",
      achievements: [
        "Led engagement and brand-building initiatives on campus",
        "Managed prospective talent database; facilitated sponsor partnerships"
      ],
      type: "Leadership"
    },
    {
      title: "NGO Intern",
      company: "Umeed NGO",
      duration: "3 months",
      location: "Remote",
      achievements: [
        "Supported instructional programs and data-driven reporting for outreach impact assessment"
      ],
      type: "Social Impact"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-primary text-primary-foreground";
      case "Leadership": return "bg-secondary text-secondary-foreground";
      case "Social Impact": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse roles in analytics, HR, leadership, and social impact
          </p>
        </div>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;