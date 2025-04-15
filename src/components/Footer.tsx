import React from 'react';


interface FooterColumn {
  title: string;
  items: string[];
}

interface FooterProps {
  brandName?: string;
  description?: string;
  leftBarColor?: string;
  rightBarColor?: string;
  accentColor?: string;
  curveColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  brandName = 'Mozena',
  description = 'Velit dolor enim natiatur excepteur commodo mollit commodo qui pariatur esse consectetur. Elit proident et proident est enim.',
  accentColor = 'bg-cyan-400',
  curveColor = 'bg-blue-500'
}) => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'HAKKIMIZDA',
      items: ['Şirketimiz', 'Misyonumuz', 'İletişim']
    },
    {
      title: 'HİZMETLER',
      items: ['Danışmanlık', 'Yazılım', 'Tasarım']
    },
    {
      title: 'KAYNAKLAR',
      items: ['Blog', 'Duyurular', 'Belgeler']
    }
  ];

  return (
    <footer className="w-full bg-black text-white relative py-12">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-10 bg-white rounded-t-full"></div>
        <div className={`w-20 h-1 ${curveColor} absolute bottom-0 left-0`}></div>
      </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-20 h-10 bg-white rounded-b-full"></div>
        <div className={`w-20 h-1 ${curveColor} absolute top-0 left-0`}></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 flex">
          <div>
            <h3 className="text-sm font-bold mb-4">{footerColumns[0].title}</h3>
            <ul className="space-y-2">
              {footerColumns[0].items.map((item, index) => (
                <li key={`col1-${index}`} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-sm font-bold mb-4">{footerColumns[1].title}</h3>
          <ul className="space-y-2">
            {footerColumns[1].items.map((item, index) => (
              <li key={`col2-${index}`} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6 md:mb-0 flex">
          <div>
            <h3 className="text-sm font-bold mb-4">{footerColumns[2].title}</h3>
            <ul className="space-y-2">
              {footerColumns[2].items.map((item, index) => (
                <li key={`col3-${index}`} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:max-w-xs">
          <p className="text-sm mb-4">{description}</p>
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