import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Users, Award, Target } from "lucide-react";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [count, setCount] = useState(0);
  const [openItem, setOpenItem] = useState<string>("item-1");

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 13;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(currentStep);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);
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
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                  ABOUT RK SOLAR GREEN MOUNT
                </h1>
                <p className="text-xl font-semibold text-muted-foreground mb-8">
                  Pioneering sustainable solar energy solutions across India, empowering communities with clean, renewable power for a brighter future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-6 w-6 text-primary" />
                    <span className="font-semibold">{count}+ Industrial Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="font-semibold">15K+ Installations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="font-semibold">98% Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop"
                  alt="Solar panels installation"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              Our Mission & Vision
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground font-semibold text-lg leading-relaxed max-w-4xl mx-auto text-justify">
                At RK Solar Green Mount, we are driven by a powerful purpose to make clean, reliable, and affordable solar energy accessible to every home, business, and community across India. Our mission is to help people save on electricity, reduce carbon impact, and move toward energy independence through high-quality solar solutions and hassle-free installation. We envision a greener, self-sustaining India, where every rooftop becomes a source of clean power and every citizen plays a part in protecting our planet. Through innovation, trust, and excellence, we aim to become one of the nation's most trusted solar energy providers transforming sunlight into savings, sustainability, and a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Team Photos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/pro1.jpg"
                  alt="Team member 1"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">THUM SHYAM PRASAD</h3>
                  <p className="text-primary font-semibold mb-2">Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Thum Shyam Prasad  Founder, ECE, with 13+ years of industrial experience in engineering, system integration, and solar implementation.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/pro2.jpg"
                  alt="Team member 2"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">K.RAMESH GOUD</h3>
                  <p className="text-primary font-semibold mb-2">Founder</p>
                  <p className="text-muted-foreground text-sm">
                    K. Ramesh Goud Founder, EEE, with 12+ years of industrial experience in electrical engineering, power systems, and solar project execution.
                  </p>
                </CardContent>
              </Card>
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

      {/* Certifications & Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Certifications & Recognition
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold">MNRE Certified</h3>
                      <p className="text-muted-foreground text-sm">Ministry of New and Renewable Energy approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                    <Award className="h-8 w-8 text-secondary" />
                    <div>
                      <h3 className="font-bold">Udyam Registered</h3>
                      <p className="text-muted-foreground text-sm">MSME recognized enterprise</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                    <Award className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="font-bold">MSME Approved</h3>
                      <p className="text-muted-foreground text-sm">MSME Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">📞</div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+91 90002 72748, +91 93479 20454</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">✉️</div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">rkgreenmountenergies@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">📍</div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
