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
      <section className="relative pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/aboutus.jpg"
                  alt="About Us - RK Green Mount"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                  ABOUT RK GREEN MOUNT
                </h1>
                <p className="text-lg font-medium text-gray-700 mb-8 leading-relaxed">
                  Pioneering sustainable solar energy solutions across India, empowering communities with clean, renewable power for a brighter future.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
                    <Sun className="h-6 w-6 text-yellow-500" />
                    <span className="font-semibold text-gray-900">{count}+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
                    <Users className="h-6 w-6 text-blue-500" />
                    <span className="font-semibold text-gray-900">15K+ Installations</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
                    <Award className="h-6 w-6 text-green-500" />
                    <span className="font-semibold text-gray-900">98% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Our Mission & Vision
            </h2>
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm border">
                <p className="text-gray-700 font-medium text-lg leading-relaxed max-w-4xl mx-auto text-justify">
                  At RK Solar Green Mount, we are driven by a powerful purpose to make clean, reliable, and affordable solar energy accessible to every home, business, and community across India. Our mission is to help people save on electricity, reduce carbon impact, and move toward energy independence through high-quality solar solutions and hassle-free installation. We envision a greener, self-sustaining India, where every rooftop becomes a source of clean power and every citizen plays a part in protecting our planet. Through innovation, trust, and excellence, we aim to become one of the nation's most trusted solar energy providers transforming sunlight into savings, sustainability, and a brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Team Photos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <img
                  src="/pro1.jpg"
                  alt="Team member 1"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">THUM SHYAM PRASAD</h3>
                  <p className="text-blue-600 font-semibold mb-2">Founder</p>
                  <p className="text-gray-600 text-sm">
                    Thum Shyam Prasad Founder, ECE, with 13+ years of industrial experience in engineering, system integration, and solar implementation.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <img
                  src="/pro2.jpg"
                  alt="Team member 2"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">K.RAMESH GOUD</h3>
                  <p className="text-blue-600 font-semibold mb-2">Founder</p>
                  <p className="text-gray-600 text-sm">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                  Certifications & Recognition
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                      🏆
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">MNRE Certified</h3>
                      <p className="text-gray-600 text-sm">Ministry of New and Renewable Energy approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
                      🏢
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Udyam Registered</h3>
                      <p className="text-gray-600 text-sm">MSME recognized enterprise</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl">
                      ✅
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">MSME Approved</h3>
                      <p className="text-gray-600 text-sm">MSME Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 90002 72748, +91 93479 20454</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Email</h3>
                      <p className="text-gray-600">rkgreenmountenergies@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Address</h3>
                      <p className="text-gray-600">5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
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
