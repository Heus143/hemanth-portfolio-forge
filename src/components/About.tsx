
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Download } from "lucide-react";

export const About = () => {
  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication", "Critical Thinking",
    "Adaptability", "Leadership", "Time Management", "Creative Thinking"
  ];

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Hemanth_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">ABOUT ME</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Passionate About <span className="text-blue-400">Technology</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to creating innovative solutions through code and design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-medium text-white mb-6">
                About Divvela Hemanth Kumar
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a final-year B.Tech Information Technology student from Chirala, Andhra Pradesh, India. 
                As an aspiring software developer, I specialize in automation, data science, and full-stack web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I build intelligent applications, automate workflows, and bring innovative ideas to life through clean, 
                efficient code. My passion lies in creating solutions that make a real difference.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Education</h4>
                    <p className="text-gray-400 text-sm">B.Tech Information Technology</p>
                  </div>
                </div>
                <p className="text-blue-400 font-medium">Final Year Student</p>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-gray-400 text-sm">Chirala, Andhra Pradesh</p>
                  </div>
                </div>
                <p className="text-purple-400 font-medium">India</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-lg font-medium group transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 mt-12">
              <h4 className="text-2xl font-medium text-white mb-8 text-center">
                Soft Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="bg-slate-800/50 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-slate-600"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-gray-200 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
