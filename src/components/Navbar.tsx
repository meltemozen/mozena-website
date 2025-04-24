import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // 🔥 Dil dropdown state
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false); // Seçimden sonra dropdown kapansın
  };

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
            <a href="#services">{t("services")}</a>
          </li>
          <li>
            <a href="#projects">{t("projects")}</a>
          </li>
          <li>
            <a href="#blog">{t("blog")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact")}</a>
          </li>
        </ul>

        <div className="relative hidden md:block">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="text-black font-medium"
          >
            🌐 {i18n.language.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow">
              <button
                onClick={() => changeLanguage("tr")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Türkçe
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
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
          <a href="#services" onClick={() => setIsOpen(false)}>
            {t("services")}
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            {t("projects")}
          </a>
          <a href="#blog" onClick={() => setIsOpen(false)}>
            {t("blog")}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </a>
          {/* Mobil Dil Seçici */}
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage("tr")}
              className="text-[#0055e3]"
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="text-[#0055e3]"
            >
              EN
            </button>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
