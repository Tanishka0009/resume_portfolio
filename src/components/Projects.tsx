import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Users, Award, ExternalLink, FileText } from "lucide-react";

const Projects = () => {
  const academicProjects = [
    {
      title: "Startup Financial Planning & Dashboards",
      description: "Built comprehensive financial plans with Excel dashboards for startup businesses. Created detailed financial models for future budgeting and investment planning.",
      technologies: ["Excel", "Financial Modeling", "Dashboard Design"],
      category: "Finance",
      icon: TrendingUp
    },
    {
      title: "HR Hiring Trends Analysis",
      description: "Researched and visualized HR hiring trends during internship period. Analyzed market data to identify patterns and provide actionable insights for recruitment strategies.",
      technologies: ["Data Analysis", "Visualization", "Market Research"],
      category: "Analytics",
      icon: Users
    },
    {
      title: "Risk & Return Modeling of Indian Banks",
      description: "Simulated comprehensive risk and return modeling of Indian banks using spreadsheet analysis as part of advanced coursework in financial risk management.",
      technologies: ["Excel", "Risk Assessment", "Financial Analysis"],
      category: "Finance",
      icon: TrendingUp
    }
  ];

  const achievements = [
    {
      title: "National Idea Lab Competition",
      description: "Participant representing GGSIPU in national-level innovation competition",
      icon: Lightbulb,
      category: "Competition"
    },
    {
      title: "Business Case Study Analyst",
      description: "Recognized by faculty for exceptional analytical skills and problem-solving approach",
      icon: Award,
      category: "Recognition"
    },
    {
      title: "College Event Leadership",
      description: "Organized and led college fests, job fairs, business contests, and quiz events",
      icon: Users,
      category: "Leadership"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Finance": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Analytics": return "bg-green-100 text-green-800 border-green-200";
      case "Competition": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Recognition": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Leadership": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic projects and professional achievements demonstrating analytical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Academic Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              Academic Projects
            </h3>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {academicProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground mb-2">
                            {project.title}
                          </CardTitle>
                          <Badge className={getCategoryColor(project.category)}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-primary" />
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {achievement.title}
                      </CardTitle>
                      <Badge className={getCategoryColor(achievement.category)} variant="outline">
                        {achievement.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Core Strengths */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Core Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Analytical & Technical</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Strong analytical reasoning with structured problem-solving approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Creativity and resourcefulness in solution design</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Professional & Personal</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Effective communicator, adaptable and highly deadline-driven</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Collaborative mindset and initiative-taking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;