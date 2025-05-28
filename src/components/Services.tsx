
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      title: "Automation Services",
      subtitle: "UiPath RPA Solutions", 
      description: "Streamline business processes with intelligent automation solutions using UiPath platform.",
      icon: "🤖",
      features: ["Process Automation", "Workflow Optimization", "Bot Development", "RPA Consulting"]
    },
    {
      title: "Full-Stack Development",
      subtitle: "MERN Stack Applications",
      description: "Build modern, scalable web applications with cutting-edge technologies and frameworks.",
      icon: "💻",
      features: ["React Applications", "API Development", "Database Design", "Cloud Deployment"]
    },
    {
      title: "Data Science & ML",
      subtitle: "Intelligent Analytics",
      description: "Extract insights from data using machine learning models and advanced analytics techniques.",
      icon: "📊", 
      features: ["Data Analysis", "ML Models", "Predictive Analytics", "Data Visualization"]
    },
    {
      title: "Tech Consulting",
      subtitle: "Strategic Guidance",
      description: "Provide expert consultation on technology stack selection and system architecture design.",
      icon: "🎯",
      features: ["Tech Strategy", "Architecture Design", "Code Review", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">SERVICES</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            What I <span className="text-blue-400">offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-slate-950/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <CardTitle className="text-white text-xl font-medium mb-2">{service.title}</CardTitle>
                <p className="text-blue-400 text-sm font-medium">{service.subtitle}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline"
                  className="w-full bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 rounded-xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
