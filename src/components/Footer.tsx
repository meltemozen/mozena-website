import React from "react";
import { useTranslation } from "react-i18next";

interface FooterProps {
  brandName?: string;
  accentColor?: string;
  curveColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  brandName = "Mozena",
  accentColor = "bg-cyan-400",
  curveColor = "bg-blue-500",
}) => {
  const { t } = useTranslation();

  const footerColumns = [
    {
      title: t("footer.about"),
      items: [t("footer.company"), t("footer.mission"), t("footer.contact")],
    },
    {
      title: t("footer.services"),
      items: [t("footer.consulting"), t("footer.software"), t("footer.design")],
    },
    {
      title: t("footer.resources"),
      items: [t("footer.blog"), t("footer.announcements"), t("footer.docs")],
    },
  ];

  return (
    <footer className="w-full bg-black text-white relative py-12">
      {/* Üst curve */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-10 bg-white rounded-t-full"></div>
        <div
          className={`w-20 h-1 ${curveColor} absolute bottom-0 left-0`}
        ></div>
      </div>

      {/* Alt curve */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-20 h-10 bg-white rounded-b-full"></div>
        <div className={`w-20 h-1 ${curveColor} absolute top-0 left-0`}></div>
      </div>

      {/* Footer içerik */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {footerColumns.map((col, colIndex) => (
          <div key={colIndex} className="mb-6 md:mb-0 flex">
            <div>
              <h3 className="text-sm font-bold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="md:max-w-xs">
          <p className="text-sm mb-4">{t("footer.description")}</p>
          <div className="flex justify-end">
            <h2 className="text-6xl font-bold tracking-wider border border-white mt-6 px-2">
              {brandName}
            </h2>
          </div>
          <div className={`w-6 h-1 ${accentColor} ml-auto mt-2`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
