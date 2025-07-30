import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Database, Code, Calculator, Presentation, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Excel & Google Sheets", level: 90, details: "Pivot Tables, Power Query, VLOOKUP, Macros, Dashboard Creation" },
        { name: "Tableau", level: 85, details: "Interactive dashboards, data storytelling, advanced visualizations" },
        { name: "Power BI", level: 80, details: "Reports and dashboard development, DAX functions" }
      ]
    },
    {
      icon: Code,
      title: "Programming & Development",
      skills: [
        { name: "Python", level: 85, details: "NumPy, Pandas, Seaborn - data analysis and automation" },
        { name: "SQL", level: 80, details: "Data analysis, querying, database management" },
        { name: "R", level: 70, details: "Statistical analysis and data visualization" }
      ]
    },
    {
      icon: Calculator,
      title: "Finance & Analytics Tools",
      skills: [
        { name: "Tally Prime", level: 85, details: "Accounting, financial modeling, budgeting" },
        { name: "Financial Modeling", level: 80, details: "Valuation, risk assessment, ratio analysis" },
        { name: "Risk Assessment", level: 75, details: "Portfolio analysis, market research" }
      ]
    },
    {
      icon: Presentation,
      title: "Business & Communication",
      skills: [
        { name: "Business Strategy", level: 85, details: "Case study analysis, problem-solving" },
        { name: "Project Management", level: 80, details: "Team leadership, workflow coordination" },
        { name: "Presentation", level: 90, details: "PowerPoint, Canva, visual storytelling" }
      ]
    }
  ];

  const certifications = [
    "Financial Modeling & Valuation (IIT alumni Certificate)",
    "Basics of Python, AI (Swayam - Govt. of India)",
    "J.P. Morgan Investment Banking Virtual Experience",
    "Tata Group Data Visualization Virtual Program",
    "Deloitte Technology Virtual Experience",
    "SQL - Intermediate (HackerRank)",
    "Python - Intermediate (OneRoadmap)",
    "Excel for Analytics - Advanced"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in finance, analytics, and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground">{skill.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Certifications & Training</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="justify-start p-3 h-auto text-left text-wrap"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;