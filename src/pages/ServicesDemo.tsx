import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, List, Presentation } from "lucide-react";

const ServicesDemo = () => {
  const styles = [
    {
      id: 1,
      name: "Original Style",
      description: "Simple 2-column grid layout with bordered cards and images on the right",
      icon: Layout,
      path: "/services",
      image: "/img1.jpg",
      features: [
        "Clean and straightforward",
        "Easy to scan",
        "Traditional layout",
        "All services visible at once"
      ]
    },
    {
      id: 2,
      name: "Carousel Style",
      description: "Full-width immersive carousel with auto-play and large images",
      icon: Presentation,
      path: "/services-carousel",
      image: "/img2.jpg",
      features: [
        "Modern and engaging",
        "Full-screen experience",
        "Auto-play slideshow",
        "Quick overview grid below"
      ]
    },
    {
      id: 3,
      name: "Accordion Style",
      description: "Expandable accordion with detailed information and features list",
      icon: List,
      path: "/services-accordion",
      image: "/Consultation.jpg",
      features: [
        "Space-efficient",
        "Interactive experience",
        "Detailed information",
        "Mobile-friendly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                SERVICES PAGE STYLES
              </h1>
              <p className="text-xl font-semibold text-muted-foreground max-w-3xl mx-auto">
                Choose your preferred style for the services page. Click on any card to preview the full page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {styles.map((style) => {
                const IconComponent = style.icon;
                return (
                  <Card key={style.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={style.image} 
                        alt={style.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-primary p-3 rounded-full">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{style.name}</h3>
                      <p className="text-muted-foreground font-semibold mb-4">
                        {style.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {style.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <span className="text-green-600">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to={style.path}>
                        <Button className="w-full font-bold">
                          Preview This Style
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Deciding?</h2>
              <p className="text-muted-foreground font-semibold mb-6 max-w-2xl mx-auto">
                Each style has its own strengths. The Carousel style is great for a modern, immersive experience. 
                The Accordion style is perfect for detailed information in a compact format. 
                The Original style offers a clean, traditional approach.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services-carousel">
                  <Button size="lg" className="font-bold">
                    Try Carousel Style
                  </Button>
                </Link>
                <Link to="/services-accordion">
                  <Button size="lg" variant="outline" className="font-bold">
                    Try Accordion Style
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesDemo;
