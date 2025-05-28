
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Hemanth_Kumar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Modern dark background */}
      <div className="absolute inset-0 bg-slate-950"></div>
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/30 rotate-45"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-cyan-400/40 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
              <div className="flex-1">
                <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                  Hi, I'm Divvela Hemanth Kumar
                </h2>
              </div>
              <div className="relative">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-slate-800">
                  <img
                    src="/lovable-uploads/8504390e-e46a-468a-aa63-7d8a8fb2b0bc.png"
                    alt="Divvela Hemanth Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            I build intelligent applications with cutting-edge technology. 
            Specialized in automation, data science, and web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-base font-medium group transition-all duration-300"
            >
              Discuss for Projects
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 bg-slate-900/50 rounded-full px-8 py-3 text-base font-medium backdrop-blur-sm group transition-all duration-300"
            >
              View Portfolios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Contact info with icons */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-400 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📞</span>
              <span>+91 88977 54668</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✉️</span>
              <span>hemanthkumardivvela@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📍</span>
              <span>Chirala, Andhra Pradesh</span>
            </div>
          </div>

          {/* Social Links and Download Resume */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/Heus143', '_blank')}
              className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 rounded-full px-6 bg-slate-900/50 backdrop-blur-sm transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/hemanth-kumar-a19a9429a', '_blank')}
              className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 rounded-full px-6 bg-slate-900/50 backdrop-blur-sm transition-all duration-300"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 font-medium transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
