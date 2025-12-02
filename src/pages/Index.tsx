import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar } from "@/components/ui/avatar";
import { Sun, Zap, Leaf, Shield, TrendingDown, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [installationsCount, setInstallationsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    // Installations counter (0 to 15000)
    const installationsDuration = 2000;
    const installationsTarget = 15000;
    const installationsSteps = 50;
    const installationsStepValue = installationsTarget / installationsSteps;
    const installationsStepDuration = installationsDuration / installationsSteps;

    let installationsCurrentStep = 0;
    const installationsTimer = setInterval(() => {
      installationsCurrentStep++;
      setInstallationsCount(Math.floor(installationsCurrentStep * installationsStepValue));
      if (installationsCurrentStep >= installationsSteps) {
        setInstallationsCount(installationsTarget);
        clearInterval(installationsTimer);
      }
    }, installationsStepDuration);

    // Satisfaction counter (0 to 98)
    const satisfactionDuration = 2000;
    const satisfactionTarget = 98;
    const satisfactionSteps = 98;
    const satisfactionStepDuration = satisfactionDuration / satisfactionSteps;

    let satisfactionCurrentStep = 0;
    const satisfactionTimer = setInterval(() => {
      satisfactionCurrentStep++;
      setSatisfactionCount(satisfactionCurrentStep);
      if (satisfactionCurrentStep >= satisfactionTarget) {
        clearInterval(satisfactionTimer);
      }
    }, satisfactionStepDuration);

    // Experience counter (0 to 13)
    const experienceDuration = 2000;
    const experienceTarget = 13;
    const experienceSteps = 13;
    const experienceStepDuration = experienceDuration / experienceSteps;

    let experienceCurrentStep = 0;
    const experienceTimer = setInterval(() => {
      experienceCurrentStep++;
      setExperienceCount(experienceCurrentStep);
      if (experienceCurrentStep >= experienceTarget) {
        clearInterval(experienceTimer);
      }
    }, experienceStepDuration);

    return () => {
      clearInterval(installationsTimer);
      clearInterval(satisfactionTimer);
      clearInterval(experienceTimer);
    };
  }, []);

  const feedbacks = [
    {
      id: 1,
      photo: "/p1.jpeg",
      feedback: "RK Solar Green Mount handled everything from site inspection to installation smoothly. My electricity bill dropped by almost 70% in just the first two months. Very professional team!",
      name: "Ramesh Varma",
      company: ""
    },
    {
      id: 2,
      photo: "/p2.jpeg",
      feedback: "I really appreciated how clearly they explained every part of the process. The installation was neat, quick, and the team was polite. Definitely recommending them to others.",
      name: "Priya Choudhary",
      company: ""
    },
    {
      id: 3,
      photo: "/p3.jpeg",
      feedback: "Excellent service and top-quality solar panels. Their after-sales support is amazing — they check performance and follow up regularly. Very satisfied.",
      name: "Imran Shaik",
      company: ""
    },
    {
      id: 4,
      photo: "/p4.jpeg",
      feedback: "For our 56kWp industrial system, their engineering quality and execution were impressive. We are saving a significant amount on our energy costs every month.",
      name: "Sandeep Rathi",
      company: "Airco Fin Tubes Pvt Ltd"
    },
    {
      id: 5,
      photo: "/p5.jpeg",
      feedback: "We opted for zero-down-payment financing and the process was surprisingly easy. Their bank tie-ups and EMI options made solar truly affordable for us.",
      name: "Lakshmi Nair",
      company: ""
    },
    {
      id: 6,
      photo: "/p6.jpeg",
      feedback: "The 40kWp system they installed for our community has drastically reduced our common-area electricity expenses. Residents are very happy with the results.",
      name: "Karthik Vuppala",
      company: "Housing Association Treasurer"
    }
  ];

  const bankImages = [
    "/BANK 1.png",
    "/BANK 2.png",
    "/BANK 3.png",
    "/BANK 4.png",
    "/BANK 5.png",
    "/BANK 6.png",
    "/BANK 7.png",
    "/BANK 8.png",
    "/BANK 9.png",
    "/BANK 10.png"
  ];

  // Duplicate images multiple times for continuous scrolling
  const duplicatedImages = [...bankImages, ...bankImages, ...bankImages, ...bankImages];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              POWER YOUR FUTURE WITH{" "}
              <TypewriterText />
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white mb-8">
              Clean, sustainable, and cost-effective energy<br />
              solutions for homes and businesses
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919347920454?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20solar%20installation.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg font-bold px-8">
                  GET FREE QUOTE
                </Button>
              </a>
              <Link to="/about-us">
                <Button size="lg" variant="outline" className="text-lg font-bold px-8">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                ABOUT US
              </h2>
              <p className="text-xl font-semibold text-muted-foreground mb-8">
                At RK Solur Green Mount, we're passionate about bringing clean, renewable solar energy to every corner of India. With years of hands on experience, our team delivers high quality solar installation and service solutions for all types of clients.
              </p>
              <Link to="/about-us">
                <Button size="lg" className="text-lg font-bold px-8">
                  VIEW MORE
                </Button>
              </Link>
            </div>
            <div className="flex-1 ml-6">
              <img src="/aboutus.jpg" alt="About Us" className="w-full h-56 md:h-72 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>





      {/* Stats Section */}
      <section id="about" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">{installationsCount >= 1000 ? `${Math.floor(installationsCount / 1000)}K` : installationsCount}+</div>
              <div className="text-lg font-bold text-primary-foreground/80">INSTALLATIONS</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">{satisfactionCount}%</div>
              <div className="text-lg font-bold text-primary-foreground/80">SATISFACTION RATE</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">{experienceCount}+</div>
              <div className="text-lg font-bold text-primary-foreground/80">INDUSTRIAL EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Why Choose RK Solar Green Mount?
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl font-semibold text-muted-foreground">
              At RK Solar Green Mount, we prioritize trust, performance, and sustainability beyond just solar panels. With years of hands-on experience in design, installation, and service, we ensure every customer maximizes their investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Expert Team and Proven Experience</h3>
                <p className="text-muted-foreground font-semibold">
                  Our team includes skilled professionals with extensive experience in solar power installation and maintenance. From residential rooftops to industrial setups, we've successfully completed many high-quality projects across India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">End-to-End Solar Solutions</h3>
                <p className="text-muted-foreground font-semibold">
                  We take care of everything, from site survey, design, government approvals, and installation to long-term service support. You get a smooth, worry-free solar experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Quality Components You Can Trust</h3>
                <p className="text-muted-foreground font-semibold">
                  We use only MNRE-approved panels, inverters, and equipment to ensure high efficiency, durability, and maximum output. This gives you peace of mind for years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Affordable and Customizable Plans</h3>
                <p className="text-muted-foreground font-semibold">
                  Whether it's a small home or a large industry, we offer flexible solar packages that fit your energy needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Reliable After-Sales Support</h3>
                <p className="text-muted-foreground font-semibold">
                  Our commitment doesn't end with installation. We provide regular maintenance, performance checks, and quick assistance to keep your system running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Driving India Toward a Greener Future</h3>
                <p className="text-muted-foreground font-semibold">
                  We're on a mission to make India a sustainable, energy-independent nation, one rooftop at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            PM Surya Ghar
          </h2>
          <div className="w-full text-center mb-12">
            <img src="/PM SURYA GHAR.png" alt="PM Surya Ghar" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="text-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              <img src="/C1.png" alt="Certificate 1" className="w-full max-w-64 h-auto rounded-lg border-2 border-gray-400" />
              <img src="/C2.png" alt="Certificate 2" className="w-full max-w-64 h-auto rounded-lg border-2 border-gray-400" />
              <img src="/C3.png" alt="Certificate 3" className="w-full max-w-64 h-auto rounded-lg border-2 border-gray-400" />
              <img src="/C4.png" alt="Certificate 4" className="w-full max-w-64 h-auto rounded-lg border-2 border-gray-400" />
            </div>
          </div>


        </div>
      </section>

      {/* Bank Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase">
            OUR BANK PARTNERS
          </h2>
          <div className="max-w-6xl mx-auto overflow-hidden mb-16">
            <div className="flex animate-marquee">
              {duplicatedImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 mx-4">
                  <img
                    src={image}
                    alt={`Bank Partner ${(index % bankImages.length) + 1}`}
                    className="w-48 h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Solar Benefits Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential Solar Benefits */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  🏠 Residential Solar Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Eligible for MNRE residential subsidy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Zero down-payment loan options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Low interest rate starting at 6%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Tie-ups with all major public sector banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Easy documentation & quick approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Ideal for homes, villas, and small residential rooftops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Commercial & Industrial Solar Benefits */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  🏢 Commercial & Industrial Solar Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">❌</span>
                    <span className="font-semibold text-muted-foreground">No government subsidy available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Zero down-payment financing options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Loans available through all partnered banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Low interest EMI-based repayment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Fast project processing & approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span className="font-semibold text-muted-foreground">Ideal for businesses, industries, factories & institutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Meet Our Founders
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex justify-center p-6">
                <img
                  src="/pro1.jpg"
                  alt="Founder 1"
                  className="w-48 h-48 object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">THUM SHYAM PRASAD</h3>
                <p className="text-primary font-semibold mb-2">Founder</p>
                <p className="text-muted-foreground text-sm">
                  With over 20 years in renewable energy, Thum Shyam Prasad founded RK Solar to bring sustainable solutions to India, leading the company's vision and strategic growth.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex justify-center p-6">
                <img
                  src="/pro2.jpg"
                  alt="Founder 2"
                  className="w-48 h-48 object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">K.RAMESH GOUD</h3>
                <p className="text-primary font-semibold mb-2">Founder</p>
                <p className="text-muted-foreground text-sm">
                  Expert in solar technology, k.ramesh goud leads innovation in our product development and engineering, ensuring cutting-edge solutions for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <video controls loop className="w-full rounded-lg shadow-lg">
              <source src="/KOMPALLY.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-xl font-semibold text-muted-foreground text-center mb-12">
            Successful solar installations across the region
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src="/p1.jpeg" alt="100 kWp Solar Rooftop System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">100 kWp Solar Rooftop System</h3>
                <p className="text-muted-foreground font-semibold">
                  Cedar Valley International School, Khammam - Generating clean electricity to reduce grid dependency and lower electricity bills.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/p3.jpeg" alt="56 kWp Solar Rooftop System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">56 kWp Solar Rooftop System</h3>
                <p className="text-muted-foreground font-semibold">
                  Airco Fin Tubes Pvt. Ltd., Isnapur - High-efficiency system with advanced inverter technology for maximum energy efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/p6.jpeg" alt="40 kWp Solar Shed Mounted System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">40 kWp Solar Shed Mounted System</h3>
                <p className="text-muted-foreground font-semibold">
                  Divino Villas Housing Society, Tellapur - Powers common-area utilities, reducing costs and promoting sustainable living.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="text-lg font-bold px-8">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="feedback" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-xl font-semibold text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Hear from our satisfied customers who have experienced the benefits of clean, renewable solar energy
          </p>
          <div className="max-w-6xl mx-auto">
            <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {feedbacks.map((feedback) => (
                  <CarouselItem key={feedback.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Avatar className="w-16 h-16 mb-4">
                          <img src={feedback.photo} alt={feedback.name} className="w-full h-full object-cover rounded-full" />
                        </Avatar>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground font-semibold mb-4 italic leading-relaxed">
                          "{feedback.feedback}"
                        </p>
                        <h3 className="text-lg font-bold mb-1">{feedback.name}</h3>
                        {feedback.company && (
                          <p className="text-sm text-muted-foreground font-medium">{feedback.company}</p>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  What types of solar systems do you install?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  We provide all types of solar systems — on-grid, off-grid, and hybrid — for residential, commercial, and industrial use. Our team helps you choose the best system based on your energy needs and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  How much maintenance does a solar system require?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Solar systems require very minimal maintenance. We recommend cleaning the panels once or twice a month and getting an annual service check from our experts to ensure maximum efficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  How long does the installation process take?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Depending on the project size, installation usually takes 3 to 7 days for residential systems and up to 2–4 weeks for large-scale commercial or industrial setups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  What warranties do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  We offer up to 25 years warranty on solar panels and 5–10 years on inverters, along with free installation support and service during the warranty period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  Is government subsidy available for solar installations?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Yes ✅. We help our customers apply for MNRE-approved government subsidies available for residential and housing society solar projects, ensuring a hassle-free process from start to finish.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
