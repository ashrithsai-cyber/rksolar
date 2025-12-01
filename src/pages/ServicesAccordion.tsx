import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Wrench, Home, Building2, Droplets, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

const ServicesAccordion = () => {
  const [openItem, setOpenItem] = useState<string>("item-1");

  const services = [
    {
      id: "item-1",
      icon: Sun,
      title: "Solar Panel Installation",
      shortDesc: "End-to-end installation services for homes, businesses, and industries",
      fullDesc: "We provide end-to-end solar panel installation services for homes, businesses, and industries. Our expert team ensures precise setup, maximum energy output, and long-term performance — helping you save money and the planet.",
      image: "/img1.jpg",
      features: [
        "Professional site assessment",
        "Custom system design",
        "Expert installation team",
        "Quality assurance testing",
        "Post-installation support"
      ],
      color: "border-yellow-500",
      bgColor: "bg-yellow-500/10",
      iconColor: "text-yellow-600"
    },
    {
      id: "item-2",
      icon: Wrench,
      title: "Solar System Maintenance & Service",
      shortDesc: "Professional inspection, cleaning, and repair services",
      fullDesc: "Regular maintenance is key to long-lasting performance. We offer professional inspection, cleaning, and repair services to ensure your solar system runs efficiently all year round.",
      image: "/img2.jpg",
      features: [
        "Regular system inspections",
        "Panel cleaning services",
        "Performance monitoring",
        "Quick repair services",
        "Annual maintenance packages"
      ],
      color: "border-blue-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-600"
    },
    {
      id: "item-3",
      icon: Home,
      title: "Residential Solar Solutions",
      shortDesc: "Customized rooftop solar systems for homes",
      fullDesc: "Make your home energy-independent with our customized rooftop solar systems. Reduce your electricity bills and enjoy uninterrupted green power every day.",
      image: "/Residential Solar Solutions.jpg",
      features: [
        "Rooftop solar installations",
        "Net metering setup",
        "Battery backup options",
        "Government subsidy assistance",
        "25-year panel warranty"
      ],
      color: "border-green-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-600"
    },
    {
      id: "item-4",
      icon: Building2,
      title: "Commercial & Industrial Solar Solutions",
      shortDesc: "Large-scale solar systems for businesses and institutions",
      fullDesc: "We design and install large-scale solar systems for factories, offices, and institutions — helping businesses cut costs, earn government benefits, and contribute to a cleaner India.",
      image: "/Commercial & Industrial Solar.jpg",
      features: [
        "High-capacity systems",
        "ROI analysis & planning",
        "Minimal downtime installation",
        "Energy audit services",
        "Corporate sustainability goals"
      ],
      color: "border-purple-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-600"
    },
    {
      id: "item-5",
      icon: Droplets,
      title: "Solar Water Heaters & Accessories",
      shortDesc: "High-quality equipment for sustainable living",
      fullDesc: "From solar water heaters to inverters and batteries, we provide high-quality equipment that supports sustainable living and ensures reliable performance.",
      image: "/Solar Water Heaters & Accessories.jpg",
      features: [
        "Solar water heaters",
        "Inverters & batteries",
        "Charge controllers",
        "Mounting structures",
        "Monitoring systems"
      ],
      color: "border-red-500",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-600"
    },
    {
      id: "item-6",
      icon: FileText,
      title: "Consultation & Energy Audit",
      shortDesc: "Expert analysis and recommendations for your energy needs",
      fullDesc: "Not sure where to start? Our experts analyze your energy usage and recommend the best solar system for your needs — balancing efficiency, cost, and space.",
      image: "/Consultation.jpg",
      features: [
        "Free energy audit",
        "Consumption analysis",
        "System sizing recommendations",
        "Cost-benefit analysis",
        "Financing options guidance"
      ],
      color: "border-indigo-500",
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              OUR SERVICES
            </h1>
            <p className="text-xl font-semibold text-muted-foreground mb-8">
              Explore our comprehensive range of solar solutions. Click on any service to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
              value={openItem}
              onValueChange={setOpenItem}
            >
              {services.map((service) => {
                const IconComponent = service.icon;
                const isOpen = openItem === service.id;
                
                return (
                  <AccordionItem 
                    key={service.id} 
                    value={service.id}
                    className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen ? `${service.color} shadow-xl` : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className={`${service.bgColor} p-3 rounded-lg transition-transform duration-300 ${
                          isOpen ? 'scale-110' : 'group-hover:scale-105'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                          <p className="text-sm font-semibold text-muted-foreground">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {/* Image Section */}
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                          <p className="text-base font-semibold text-muted-foreground leading-relaxed">
                            {service.fullDesc}
                          </p>
                          
                          <div>
                            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <span className="text-sm font-semibold text-muted-foreground">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4">
                            <Button className="w-full font-bold">
                              Request Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-black text-primary mb-2">15K+</div>
                  <div className="text-sm font-bold text-muted-foreground">Installations</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-secondary transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-black text-secondary mb-2">98%</div>
                  <div className="text-sm font-bold text-muted-foreground">Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-accent transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-black text-accent mb-2">13+</div>
                  <div className="text-sm font-bold text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-black text-primary mb-2">24/7</div>
                  <div className="text-sm font-bold text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-semibold text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how solar energy can transform your life
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-bold text-lg px-8">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesAccordion;
