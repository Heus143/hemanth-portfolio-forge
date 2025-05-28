
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
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

            <div className="flex space-x-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20 hover:border-blue-400 rounded-full"
              >
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-500 text-purple-400 hover:bg-purple-900/20 hover:border-purple-400 rounded-full"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
