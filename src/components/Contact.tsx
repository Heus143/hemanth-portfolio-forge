
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Github } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:hemanthkumardivvela@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened!",
      description: "Your email client should open with the pre-filled message.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">CONTACT</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-medium">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 min-h-32 focus:border-blue-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-blue-400">hemanthkumardivvela@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-blue-400">+91 88977 54668</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-blue-400">Chirala, Andhra Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* GitHub Links at Bottom */}
        <div className="flex flex-col items-center space-y-4 mt-16 pt-8 border-t border-slate-800">
          <div className="flex space-x-6">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://github.com/Heus143/hemanth-portfolio-forge.git', '_blank')}
              className="border-blue-500 text-blue-400 hover:bg-blue-900/20 hover:border-blue-400 rounded-full px-6"
            >
              <Github className="mr-2 h-5 w-5" />
              Portfolio Repository
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://github.com/Heus143/Projects.git', '_blank')}
              className="border-purple-500 text-purple-400 hover:bg-purple-900/20 hover:border-purple-400 rounded-full px-6"
            >
              <Github className="mr-2 h-5 w-5" />
              Projects Repository
            </Button>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Divvela Hemanth Kumar. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
