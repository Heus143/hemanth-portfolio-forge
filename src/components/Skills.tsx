
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const specialties = [
    {
      icon: "🤖",
      title: "Automation Services",
      description: "UiPath RPA solutions for business process automation and workflow optimization."
    },
    {
      icon: "💻", 
      title: "Full-Stack Development",
      description: "Modern web applications using MERN stack with responsive design and scalable architecture."
    },
    {
      icon: "📊",
      title: "Data Science & ML",
      description: "Machine learning models, data analysis, and predictive analytics for intelligent insights."
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Analysis",
      description: "Understanding requirements and technical specifications"
    },
    {
      step: "02", 
      title: "Design",
      description: "Creating system architecture and user experience design"
    },
    {
      step: "03",
      title: "Development", 
      description: "Building robust solutions with modern technologies"
    },
    {
      step: "04",
      title: "Testing",
      description: "Quality assurance and performance optimization"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Specialties Section */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">SPECIALITY</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            My <span className="text-blue-400">specialities</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Focused expertise in modern technologies that drive innovation and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {specialties.map((specialty, index) => (
            <div key={specialty.title} className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors duration-300">
                <span className="text-3xl">{specialty.icon}</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{specialty.title}</h3>
              <p className="text-gray-400 leading-relaxed">{specialty.description}</p>
            </div>
          ))}
        </div>

        {/* Work Process Section */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">ABOUT ME</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            My <span className="text-blue-400">work process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A systematic approach to delivering high-quality solutions from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {workProcess.map((process, index) => (
            <div key={process.title} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{process.step}</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{process.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
