import React from 'react';
import { Layout, ShoppingCart, Code, BarChart3, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const servicesData = [
  {
    icon: <Layout className="h-12 w-12 mb-4 text-white" />,
    title: "UI/UX Design",
    description: "Creating beautiful, user-centered interfaces that enhance customer satisfaction and boost conversion rates.",
    gradientClass: "bg-gradient-to-b from-black to-zinc-800"
  },
  {
    icon: <ShoppingCart className="h-12 w-12 mb-4 text-white" />,
    title: "E-commerce Platform",
    description: "Building high-converting online stores with seamless checkout experiences and robust product management.",
    gradientClass: "bg-gradient-to-b from-black to-zinc-800"
  },
  {
    icon: <Code className="h-12 w-12 mb-4 text-white" />,
    title: "Website Development",
    description: "Developing fast, responsive, and SEO-friendly websites tailored to your business needs and goals.",
    gradientClass: "bg-gradient-to-b from-black to-zinc-800"
  },
  {
    icon: <BarChart3 className="h-12 w-12 mb-4 text-white" />,
    title: "Marketing Consultation",
    description: "Strategic guidance to boost your online presence and drive sales growth through effective digital marketing.",
    gradientClass: "bg-gradient-to-b from-black to-zinc-800"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold mb-4 text-white">Our Services</h2>
          <p className="text-zinc-400">Comprehensive solutions to accelerate your business growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="relative group hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="absolute -inset-0.5 bg-orange-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
              <Card 
                className={`border-0 shadow-xl flex flex-col h-full overflow-hidden w-full max-w-xs mx-auto relative z-10 ${service.gradientClass}`}
              >
                <div className="rounded-t-lg h-16 w-full relative">
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-black/80 border-4 border-zinc-900">
                    {React.cloneElement(service.icon, { className: 'h-8 w-8' })}
                  </div>
                </div>
                <CardHeader className="text-center pt-10 pb-2 bg-black/20">
                  <CardTitle className="mt-2 text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow bg-black/30 px-4 py-4">
                  <CardDescription className="text-center text-zinc-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-black/40 pt-2 pb-6 flex justify-center">
                  <Button 
                    className="w-4/5 bg-[#FF5733] hover:bg-[#FF5733]/90 text-white transition-all duration-300 modern-button button-glow"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    <span>Ask a Query</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
