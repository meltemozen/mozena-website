import React, { useEffect, useState } from 'react';

interface AboutProps {
  title: string;
  background_items: any;
  rocket_image: any;
}

const About: React.FC<AboutProps> = ({title, background_items, rocket_image}) => {
    const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 50, rotation: 0 });
    const isAnimating = true;
    const [isRocketVisible, setIsRocketVisible] = useState(true);
 
    useEffect(() => {
      if (!isAnimating || !isRocketVisible) return;
      
      let startTime = Date.now();
      const animationDuration = 15000; 
      
      const animateRocket = () => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % animationDuration) / animationDuration;
        
      
        
        const angle = progress * 2 * Math.PI; 
        const a = 40; 
        const b = 35; 
        
        const centerX = 50;
        const centerY = 50;
        
        const x = centerX + a * Math.cos(angle);
        const y = centerY + b * Math.sin(angle);
        
       
        const dx = -a * Math.sin(angle); 
        const dy = b * Math.cos(angle);  
        const rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        
        setRocketPosition({ x, y, rotation });
        
        if (isAnimating && isRocketVisible) {
          requestAnimationFrame(animateRocket);
        }
      };
      
      const animationFrame = requestAnimationFrame(animateRocket);
      return () => cancelAnimationFrame(animationFrame);
    }, [isAnimating, isRocketVisible]);
    
    const handleRocketClick = () => {
      setIsRocketVisible(false);
    };
    
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-8 md:px-20 py-16 bg-white w-full relative overflow-hidden">
      {isRocketVisible && (
        <img
          src={rocket_image}
          alt="rocket"
          className="absolute z-20 w-16 md:w-24 lg:w-32 cursor-pointer transition-opacity duration-500"
          style={{
            left: `${rocketPosition.x}%`, 
            top: `${rocketPosition.y}%`,
            transform: `translate(-50%, -50%) rotate(${rocketPosition.rotation}deg)`,
            transition: 'opacity 0.5s, top 0s, left 0s, transform 0s'
          }}
          onClick={handleRocketClick}
        />
      )}
      
      <div className="w-full md:w-[50%] space-y-10 text-center md:text-left relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002566] font-sans leading-tight">
          {title}
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
      
      <div className="relative w-full md:w-[45%] h-[300px] md:h-[450px] flex items-center justify-center z-10">

        <img
          src={background_items}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default About;