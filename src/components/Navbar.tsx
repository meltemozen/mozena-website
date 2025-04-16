import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
      {/* Yazılı Logo */}
      <div className="relative">
        <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0055e3] to-[#7fbfff] relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#0055e3] after:rotate-[-2deg]">
          Mozena
        </span>
      </div>

      {/* Menü Linkleri */}
      <ul className="flex space-x-10 text-[#002566] font-medium">
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

      {/* Buton */}
      <button className="button-primary">LOREM IPSUM</button>
    </nav>
  );
};

export default Navbar;
