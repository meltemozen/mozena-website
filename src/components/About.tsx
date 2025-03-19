import React, { useEffect, useState } from 'react';

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = () => {
    const [animateOut, setAnimateOut] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimateOut(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className='flex justify-around gap-2.5'>
    <div className="w-[800px] h-[96px] mt-16 ml-28 space-y-8 gap-2rem">

      <h2 className="text-6xl font-bold font-inter text-[#002566]">Güvenilir ve Sonuç Odaklı</h2>

      <p className="w-[784px] h-[112px] text-base font-inter text-[#002566] leading-relaxed">
        Her projeye özel bir bakış açısı getiriyor, işinizi en iyi şekilde yansıtmak
        için çalışıyoruz. Hedefimiz sadece beklentileri karşılamak değil, sınırları aşan
        işler ortaya koymak.
      </p>
      <a href="https://wa.me/905541392582" target="_blank">
      <button className=" rounded-xl px-1.5 py-1.5 bg-[#155CFF] text-white font-medium transition">
        Whatsapp'tan iletişime geç
      </button>
      </a>
    </div>
    <div>
       <img
        src="src\assets\Uzay.png"
        alt="scroll image"
        className={`absolute transition-all duration-1000 ease-in 
          ${animateOut ? "-translate-x-full -translate-y-full opacity-0" : "translate-x-0 translate-y-0 opacity-100"}`}
      />
    </div>
    </div>
  );
};
export default About;

