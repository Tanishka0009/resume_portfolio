import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MBA (Pursuing)",
      field: "Finance & IT",
      institution: "Gitarattan International School of Business, GGSIPU",
      location: "New Delhi",
      year: "2023-2025",
      status: "Current",
      details: "Specializing in financial analytics and information technology integration"
    },
    {
      degree: "BBA",
      field: "Banking and Insurance",
      institution: "Shri Guru Tegh Bahadur Inst. of Mgmt & IT, GGSIPU",
      location: "New Delhi",
      year: "2023",
      status: "Completed",
      details: "Comprehensive understanding of banking operations and insurance principles"
    },
    {
      degree: "Class XII",
      field: "CBSE",
      institution: "S.B. Mills Sr. Sec. School",
      location: "New Delhi",
      year: "2020",
      status: "Completed",
      details: "Strong foundation in commerce and analytical thinking"
    },
    {
      degree: "Class X",
      field: "CBSE",
      institution: "S.B. Mills Sr. Sec. School",
      location: "New Delhi",
      year: "2018",
      status: "Completed",
      details: "Excellent academic performance with focus on mathematics and sciences"
    }
  ];

  const leadership = {
    title: "Professional Development & Leadership Bridge Year",
    duration: "2023-2024",
    activities: [
      {
        role: "Proctor & Lead Proctor",
        description: "Progressed from monitoring candidates during academic and competitive online assessments to managing a 10-member proctoring team. Led workflow coordination, ensured process integrity, and mentored peers under high-pressure conditions."
      },
      {
        role: "Academic Tutor",
        description: "Provided tailored academic support in commerce and finance subjects to senior secondary students. Improved student performance through individualized plans and consistent tracking, while enhancing subject expertise and communication finesse."
      },
      {
        role: "Project-Based Learning",
        description: "Engaged in small-scale research and analytics projects. Applied tools like Excel and Python for data collection, trend analysis, and visual storytelling to simulate real-world business problem-solving."
      },
      {
        role: "Internship Continuation",
        description: "Pursued short-term virtual internships and project-based learning to deepen business, HR, and data analytics exposure through platforms like Forage."
      },
      {
        role: "Community Engagement",
        description: "Participated in social impact initiatives through NGOs and local outreach programs. Contributed to education and empowerment drives, strengthening leadership and empathy."
      },
      {
        role: "Career Preparation",
        description: "Focused on readiness through learning (certifications, simulations, and virtual experiences), self-assessment, and upskilling in finance, analytics, and communication."
      },
      {
        role: "Professional Networking",
        description: "Expanded network via webinars, and alumni outreach. Engaged with mentors and professionals to refine career focus and identify future opportunities."
      }
    ]
  };

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Development</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and continuous professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" />
              Academic Qualifications
            </h3>
            
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"}
                            className={edu.status === "Current" ? "bg-primary text-primary-foreground" : ""}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <p className="text-lg font-medium text-primary">{edu.field}</p>
                        <p className="text-foreground">{edu.institution}</p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Development */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                {leadership.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{leadership.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                {leadership.activities.map((activity, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 pb-4">
                    <h4 className="font-semibold text-foreground mb-2">{activity.role}</h4>
                    <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;