
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      institution: "Bapatla Engineering College",
      location: "Bapatla, Andhra Pradesh",
      period: "2021 – 2025",
      grade: "CGPA: 6.8",
      icon: "🎓",
      status: "Completed"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Chirala, Andhra Pradesh", 
      period: "2019 – 2021",
      grade: "GPA: 83.6",
      icon: "📚",
      status: "Completed"
    },
    {
      degree: "High School",
      institution: "Bhashyam High School",
      location: "Chirala, Andhra Pradesh",
      period: "Completed in 2019",
      grade: "GPA: 8.7",
      icon: "🏫",
      status: "Completed"
    }
  ];

  const skillsData = [
    {
      category: "Languages",
      skills: ["C", "Python", "Java Basics", "HTML", "CSS"],
      icon: "💻"
    },
    {
      category: "Database",
      skills: ["SQL"],
      icon: "🗄️"
    },
    {
      category: "Others",
      skills: ["Data Structures"],
      icon: "🔧"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">EDUCATION</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Academic <span className="text-blue-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My educational background in technology and sciences, building a strong foundation for innovation.
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {educationData.map((edu, index) => (
            <Card 
              key={edu.degree} 
              className="bg-slate-950/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300 flex-shrink-0">
                      <span className="text-3xl">{edu.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-500/30">
                          {edu.status}
                        </span>
                      </div>
                      
                      <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400">📍</span>
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400">📅</span>
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 justify-center lg:justify-end mb-2">
                        <Award className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Grade</span>
                      </div>
                      <p className="text-xl font-bold text-white">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">TECHNICAL EXPERTISE</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Technical skills and competencies developed through academic projects and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <Card 
              key={skillCategory.category}
              className="bg-slate-950/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                  <span className="text-3xl">{skillCategory.icon}</span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4">{skillCategory.category}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
