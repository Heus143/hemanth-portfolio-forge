
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "AI-powered recommendation engine using machine learning algorithms to suggest movies based on user preferences and viewing history with collaborative filtering.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Flask", "TensorFlow"],
      icon: "🎬",
      featured: true,
      status: "Completed",
      githubUrl: "https://github.com/Heus143/movie-recommendation-system",
      liveUrl: "https://github.com/Heus143/movie-recommendation-system"
    },
    {
      title: "Fraud Detection System", 
      description: "Machine learning model to detect fraudulent transactions in real-time using advanced anomaly detection techniques and neural networks.",
      techStack: ["Python", "TensorFlow", "Pandas", "NumPy", "Keras"],
      icon: "💳",
      featured: true,
      status: "Completed",
      githubUrl: "https://github.com/Heus143/fraud-detection-system",
      liveUrl: "https://github.com/Heus143/fraud-detection-system"
    }
  ];

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveDemo = (liveUrl: string) => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllProjects = () => {
    window.open('https://github.com/Heus143/Projects.git', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcasing my expertise in automation, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'border-blue-800/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="bg-green-600 text-white border-green-700">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="bg-blue-900/20 text-blue-300 border-blue-700/50 hover:bg-blue-900/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn border-slate-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-900/20 transition-all duration-300"
                    onClick={() => handleGithubClick(project.githubUrl)}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group/btn transition-all duration-300"
                    onClick={() => handleLiveDemo(project.liveUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            onClick={handleViewAllProjects}
            className="px-8 py-4 text-lg font-medium border-2 border-blue-500 text-blue-400 hover:bg-blue-900/20 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
