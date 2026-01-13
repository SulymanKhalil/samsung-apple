import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Innovation", href: "#innovation" },
    { name: "Lifestyle", href: "#lifestyle" },
    { name: "Ecosystem", href: "#ecosystem" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Fusion Brand Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-xl font-bold tracking-tight text-black group-hover:opacity-70 transition-opacity">
            SAMSUNG
          </span>
          <span className="text-lg text-gray-400 font-light mx-1">|</span>
          <span className="text-xl font-medium tracking-tight text-black group-hover:opacity-70 transition-opacity">
            Apple
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-black hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300">
          Pre-Order
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
