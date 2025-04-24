import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AboutProps {
  background_items: any;
  rocket_image: any;
}

const About: React.FC<AboutProps> = ({ background_items, rocket_image }) => {
  const { t } = useTranslation();
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateOut(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-8 md:px-20 py-16 bg-white w-full">
      <div className="w-full md:w-[50%] space-y-10 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002566] font-sans leading-tight">
          {t("aboutTitle")}
        </h2>
        <p className="text-base md:text-lg text-[#002566] leading-relaxed font-light">
          {t("aboutDescription")}
        </p>
        <a
          href="https://wa.me/905541392582"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-xl px-5 py-3 bg-[#155CFF] hover:bg-[#004bcc] transition text-white font-semibold shadow-md">
            {t("contactWhatsapp")}
          </button>
        </a>
      </div>
      <div className="relative w-full md:w-[45%] h-[300px] md:h-[450px] flex items-center justify-center">
        <img
          src={background_items}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-contain z-0"
        />
        <img
          src={rocket_image}
          alt="animated"
          className={`absolute w-24 md:w-48 transition-all duration-[5000ms] ease-in z-10 ${
            animateOut
              ? "-translate-x-[150%] -translate-y-[150%] opacity-0"
              : "translate-x-0 translate-y-0 opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default About;
