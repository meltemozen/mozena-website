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
    <footer className="w-full bg-black text-white relative py-8">
    
 

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
        
          <h2 
            className="text-6xl font-bold tracking-wider" 
            style={{ 
              color: 'transparent',
              WebkitTextStroke: '1px white',
            }}
          >
            {brandName}
          </h2>
     
          </div>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;