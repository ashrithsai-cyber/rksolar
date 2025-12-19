import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-200">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5 space-y-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="RK Green Mount Logo" className="w-12 h-12 rounded-xl border border-primary/20 shadow-sm" />
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  RK Green Mount
                </h3>
                <p className="text-xs text-slate-500 font-semibold">Powering a Sustainable Future</p>
              </div>
            </div>




            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 text-slate-600 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary" />
                <span className="text-sm font-medium">+91 90002 72748, +91 93479 20454</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600 hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary" />
                <span className="text-sm font-medium">rkgreenmountenergies@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600 hover:text-primary transition-colors group">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary" />
                <span className="text-sm font-medium">5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</span>
              </div>
            </div>
          </div>

          {/* Quick Links and Policies - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about-us", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/projects", label: "Projects" },
                  { to: "/gallery", label: "Gallery" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-600 hover:text-primary font-medium text-sm transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-6">
                Policies
              </h4>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Warranty Policy",
                  "Refund Policy",
                ].map((policy) => (
                  <li key={policy}>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-primary font-medium text-sm transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200"></span>
                      {policy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-6">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/rkgreenmountenergies"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 rounded-xl border border-slate-200 hover:border-pink-300 transition-all duration-300 hover:shadow-md hover:shadow-pink-100"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919347920454"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 rounded-xl border border-slate-200 hover:border-green-300 transition-all duration-300 hover:shadow-md hover:shadow-green-100"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/rkgreenmountenergies"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-100"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:rkgreenmountenergies@gmail.com"
                className="group p-3 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 rounded-xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-md hover:shadow-orange-100"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <p className="text-xs text-slate-500 font-medium pt-4 leading-relaxed">
              Follow us on social media for updates, tips, and insights on solar energy solutions.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            © 2024 RK Green Mount. All rights reserved.
          </p>
          <a
            href="https://wa.me/918341126169?text=Hello%2C%20I%20am%20interested%20in%20your%20website%20for%20our%20company."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black rounded-full border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-sm"
          >
            <span className="text-xs font-semibold text-white">
              Developed by M. Ashrith Sai
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
