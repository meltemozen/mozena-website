import React, { useEffect, useState } from 'react';

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = () => {
    const [animateOut, setAnimateOut] = useState(false);
  
    /*useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 300; // Ne kadar scroll yapıldığında animasyon başlasın
        if (window.scrollY > scrollThreshold) {
          setAnimateOut(true);
        } else {
          setAnimateOut(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
*/


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
      Güvenilir ve Sonuç Odaklı
    </h2>
    <p className="text-base md:text-lg text-[#002566] leading-relaxed font-light">
      Her projeye özel bir bakış açısı getiriyor, işinizi en iyi şekilde yansıtmak
      için çalışıyoruz. Hedefimiz sadece beklentileri karşılamak değil, sınırları aşan
      işler ortaya koymak.
    </p>
    <a href="https://wa.me/905541392582" target="_blank" rel="noopener noreferrer">
      <button className="rounded-xl px-5 py-3 bg-[#155CFF] hover:bg-[#004bcc] transition text-white font-semibold shadow-md">
        Whatsapp'tan iletişime geç
      </button>
    </a>
  </div>
  <div className="relative w-full md:w-[45%] h-[300px] md:h-[450px] flex items-center justify-center">
    <img
      src="src/assets/Background items.png"
      alt="background"
      className="absolute top-0 left-0 w-full h-full object-contain z-0"
    />
    <img
      src="src/assets/Uzay.png"
      alt="animated"
      className={`
        absolute w-24 md:w-48 transition-all duration-[5000ms] ease-in z-10
        ${animateOut ? "-translate-x-[150%] -translate-y-[150%] opacity-0" : "translate-x-0 translate-y-0 opacity-100"}
      `}
    />
  </div>
</div>


  );
};  

export default About;