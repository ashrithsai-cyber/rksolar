import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-black mb-4">
              OUR <span className="text-primary">PROJECTS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our portfolio of innovative solar solutions and successful installations.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* First Project */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">100 kWp Solar Rooftop System</h3>
                <p className="text-primary text-lg font-semibold">Cedar Valley International School, Khammam</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <img src="/p1.jpeg" alt="Project Image 1" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                  <img src="/p2.jpeg" alt="Project Image 2" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We successfully completed the installation of a 100 kWp solar rooftop system at Cedar Valley International School, Khammam, as part of our mission to promote sustainable energy across educational institutions in India.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Key Benefits</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This project is designed to generate clean electricity directly from solar power, significantly reducing the school's dependence on grid energy and lowering their electricity bills. The system is optimized for maximum efficiency, long-term durability, and minimal maintenance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-black mb-4">Project Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔋</span>
                    <span className="text-gray-700">Capacity: 100 kWp Solar Rooftop System</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-700">Location: Cedar Valley International School, Khammam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⚡</span>
                    <span className="text-gray-700">Energy Output: Designed for high performance and reliability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🛠️</span>
                    <span className="text-gray-700">Services: Complete system design, installation, and commissioning</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-700">Impact: Reduces carbon emissions and supports a sustainable campus environment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">56 kWp Solar Rooftop System</h3>
                <p className="text-primary text-lg font-semibold">Airco Fin Tubes Pvt. Ltd., Isnapur</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <img src="/p3.jpeg" alt="Project Image 3" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                  <img src="/p4.jpeg" alt="Project Image 4" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                  <img src="/p5.jpeg" alt="Project Image 5" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      RK Solar Green Mount successfully executed a 56 kWp rooftop solar power system for Airco Fin Tubes Pvt. Ltd. in Isnapur. This project is designed to maximize energy efficiency and reduce dependency on traditional power sources. The system ensures long-term savings, reliable performance, and contributes to a cleaner, greener future.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Key Features</h4>
                    <ul className="text-gray-700 leading-relaxed space-y-2">
                      <li>• High-efficiency polycrystalline solar panels</li>
                      <li>• Advanced inverter system with Polycab technology</li>
                      <li>• Robust cable management and safety-compliant design</li>
                      <li>• Full-scale installation and commissioning</li>
                      <li>• Remote monitoring and performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-black mb-4">Project Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏢</span>
                    <span className="text-gray-700">Client: Airco Fin Tubes Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-700">Location: Isnapur, Telangana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔋</span>
                    <span className="text-gray-700">Capacity: 56 kWp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏭</span>
                    <span className="text-gray-700">Type: Industrial Rooftop Solar Installation</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-700">Impact: Offsets significant carbon emissions annually and supports sustainability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Project */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">40 kWp Solar Shed Mounted System</h3>
                <p className="text-primary text-lg font-semibold">Divino Villas Housing Society, Tellapur</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      RK Solar Green Mount installed a 40kWp solar shed mounted system for Divino Villas, a premium housing society in Tellapur. The system is designed to deliver clean, efficient, and cost-effective power for community needs while promoting sustainable living within the residential complex.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Key Features</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Shed-mounted structure designed for maximum sunlight exposure, high-efficiency solar modules ensuring consistent energy generation, advanced inverter setup for optimal power conversion, durable and weather-resistant installation, and seamless integration with the society's existing electrical system.
                    </p>
                  </div>

                  <img src="/p6.jpeg" alt="Project Image 6" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-black mb-4">Project Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏢</span>
                    <span className="text-gray-700">Client: Divino Villas Housing Society</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-700">Location: Tellapur, Telangana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔋</span>
                    <span className="text-gray-700">Capacity: 40 kWp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-gray-700">Type: Shed Mounted Solar Power System</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-700">Impact: Powers common-area utilities such as lighting and water pumps, reducing electricity costs for residents and promoting a greener future</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Project */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">6 kWp Residential Solar Rooftop System</h3>
                <p className="text-primary text-lg font-semibold">Residential Customer, Mahbubnagar</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      RK Solar Green Mount successfully installed a 6kWp on-grid rooftop solar system for a residential home in Mahbubnagar. The system was designed to maximize rooftop space while ensuring long-term savings and energy independence for the homeowner.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">Key Features</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Compact rooftop design suitable for residential spaces, high-performance solar panels with excellent efficiency, smart inverter system for smooth grid synchronization, neat and durable cable management for aesthetic appeal, and hassle-free installation with minimal maintenance.
                    </p>
                  </div>

                  <img src="/p7.jpeg" alt="Project Image 7" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-black mb-4">Project Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-gray-700">Client: Residential Customer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-700">Location: Mahbubnagar, Telangana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔋</span>
                    <span className="text-gray-700">Capacity: 6 kWp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏡</span>
                    <span className="text-gray-700">Type: Rooftop Solar System</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-700">Impact: Reduces electricity bills by up to 80% while contributing to a cleaner and more sustainable environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
