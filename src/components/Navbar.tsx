import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        {/* Logo */}
        <div className="relative">
          <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0055e3] to-[#7fbfff] relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#0055e3] after:rotate-[-2deg]">
            Mozena
          </span>
        </div>

        {/* Desktop Menü */}
        <ul className="hidden md:flex space-x-10 text-[#002566] font-medium">
          <li>
            <a
              href="#services"
              className="hover:text-[#0055e3] transition-colors duration-200"
            >
              Hizmetlerimiz
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#0055e3] transition-colors duration-200"
            >
              Projelerimiz
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-[#0055e3] transition-colors duration-200"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#0055e3] transition-colors duration-200"
            >
              İletişim
            </a>
          </li>
        </ul>

        {/* Desktop Buton */}
        <div className="hidden md:block">
          <a href="#contact" className="button-primary">
            Daha Fazla Öğren
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-[#0055e3]"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-[#0055e3]"
            />
          )}
        </div>
      </div>

      {/* Mobile Menü */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6">
          <a
            href="#services"
            className="text-[#002566] font-medium hover:text-[#0055e3]"
            onClick={() => setIsOpen(false)}
          >
            Hizmetlerimiz
          </a>
          <a
            href="#projects"
            className="text-[#002566] font-medium hover:text-[#0055e3]"
            onClick={() => setIsOpen(false)}
          >
            Projelerimiz
          </a>
          <a
            href="#blog"
            className="text-[#002566] font-medium hover:text-[#0055e3]"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[#002566] font-medium hover:text-[#0055e3]"
            onClick={() => setIsOpen(false)}
          >
            İletişim
          </a>
          <a
            href="#contact"
            className="button-primary"
            onClick={() => setIsOpen(false)}
          >
            Daha Fazla Öğren
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
