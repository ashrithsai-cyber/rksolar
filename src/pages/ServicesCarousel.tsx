import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Sun, Wrench, Home, Building2, Droplets, FileText } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ServicesCarousel = () => {
  const services = [
    {
      id: 1,
      icon: Sun,
      title: "Solar Panel Installation",
      description: "We provide end-to-end solar panel installation services for homes, businesses, and industries. Our expert team ensures precise setup, maximum energy output, and long-term performance — helping you save money and the planet.",
      image: "/img1.jpg",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 2,
      icon: Wrench,
      title: "Solar System Maintenance & Service",
      description: "Regular maintenance is key to long-lasting performance. We offer professional inspection, cleaning, and repair services to ensure your solar system runs efficiently all year round.",
      image: "/img2.jpg",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      icon: Home,
      title: "Residential Solar Solutions",
      description: "Make your home energy-independent with our customized rooftop solar systems. Reduce your electricity bills and enjoy uninterrupted green power every day.",
      image: "/Residential Solar Solutions.jpg",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      icon: Building2,
      title: "Commercial & Industrial Solar Solutions",
      description: "We design and install large-scale solar systems for factories, offices, and institutions — helping businesses cut costs, earn government benefits, and contribute to a cleaner India.",
      image: "/Commercial & Industrial Solar.jpg",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      icon: Droplets,
      title: "Solar Water Heaters & Accessories",
      description: "From solar water heaters to inverters and batteries, we provide high-quality equipment that supports sustainable living and ensures reliable performance.",
      image: "/Solar Water Heaters & Accessories.jpg",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      id: 6,
      icon: FileText,
      title: "Consultation & Energy Audit",
      description: "Not sure where to start? Our experts analyze your energy usage and recommend the best solar system for your needs — balancing efficiency, cost, and space.",
      image: "/Consultation.jpg",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              OUR SERVICES
            </h1>
            <p className="text-xl font-semibold text-muted-foreground">
              Comprehensive solar solutions tailored to your energy needs
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <CarouselItem key={service.id}>
                      <Card className="border-0 shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                          {/* Image Section */}
                          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} z-10`}></div>
                            <img 
                              src={service.image} 
                              alt={service.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6 z-20">
                              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                                <IconComponent className="w-8 h-8 text-primary" />
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                            <div className="mb-6">
                              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                Service {service.id} of {services.length}
                              </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                              {service.title}
                            </h2>
                            <p className="text-lg font-semibold text-muted-foreground mb-8 leading-relaxed">
                              {service.description}
                            </p>
                            <div className="flex gap-4">
                              <Button size="lg" className="font-bold">
                                Get Started
                              </Button>
                              <Button size="lg" variant="outline" className="font-bold">
                                Learn More
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Service Grid Overview */}
            <div className="mt-16">
              <h3 className="text-3xl font-black text-center mb-8">Quick Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary">
                      <CardContent className="p-6 text-center">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-bold text-sm leading-tight">
                          {service.title.split(' ').slice(0, 2).join(' ')}
                        </h4>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl font-semibold text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the perfect solar solution for your needs
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-lg px-8">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesCarousel;
