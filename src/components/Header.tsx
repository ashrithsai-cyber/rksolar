import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "GALLERY", href: "/gallery" },
  ];

  const handleContactUs = () => {
    const phoneNumber = "9347920454";
    const message = "Hello, I am interested in your solar services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b">
      <nav className="px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="RK GREEN SOLAR Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-xl md:text-2xl font-black text-white">
              RK GREEN <span className="text-primary">MOUNT</span>
            </span>
          </Link>

          {/* Desktop Navigation and Button */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.name === "HOME" ? (
                <Link
                  key={item.name}
                  to="/"
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="font-bold" onClick={handleContactUs}>CONTACT US</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                item.name === "HOME" ? (
                  <Link
                    key={item.name}
                    to="/"
                    className="text-sm font-bold text-white hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-bold text-white hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-bold text-white hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button
                className="font-bold mx-4 mt-2"
                onClick={() => {
                  handleContactUs();
                  setIsMenuOpen(false);
                }}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
