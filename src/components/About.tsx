<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
=======

import React, { useEffect, useState } from 'react';
>>>>>>> af5b28026f13fa8a7fda967d86b1a0aa5deb10b8

interface AboutProps {
  title: string;
  background_items: any;
  rocket_image: any;
}

const About: React.FC<AboutProps> = ({ title, background_items, rocket_image }) => {
  const [rocketPosition, setRocketPosition] = useState({ x: 10, y: 90, rotation: 45 });
  const [exhaustParticles, setExhaustParticles] = useState<Array<{id: number, x: number, y: number, opacity: number, size: number}>>([]);
  const isAnimating = true;
  const [isRocketVisible, setIsRocketVisible] = useState(true);
  const particleIdRef = useRef(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAnimating || !isRocketVisible) return;
 
    let startTime = Date.now();
    const animationDuration = windowWidth < 768 ? 4000 : 5000;
 
    const animateRocket = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
 
      const x = 10 + progress * 80;
      const y = 90 - progress * 80; 
 
      const rotation = 60; 
 
      setRocketPosition({ x, y, rotation });

      const particleChance = windowWidth < 768 ? 0.7 : 0.6;
      
      if (Math.random() > particleChance) {
        const particleId = particleIdRef.current++;
        
        const baseSize = windowWidth < 768 ? 3 : 4;
        const sizeVariation = windowWidth < 768 ? 4 : 8;
        
        const newParticle = {
          id: particleId,
          x: x - 5 + (Math.random() * 2 - 1),
          y: y + 5 + (Math.random() * 2 - 1),
          opacity: 0.8 + Math.random() * 0.2,
          size: baseSize + Math.random() * sizeVariation
        };

        setExhaustParticles(prev => [...prev, newParticle]);

        const particleDuration = windowWidth < 768 ? 800 : 1000;
        setTimeout(() => {
          setExhaustParticles(prev => prev.filter(p => p.id !== particleId));
        }, particleDuration + Math.random() * 1000);
      }
      
      if (progress >= 1) {
        setIsRocketVisible(false);
        setExhaustParticles([]);
        return;
      }
 
      if (isAnimating && isRocketVisible) {
        requestAnimationFrame(animateRocket);
      }
    };
 
    const animationFrame = requestAnimationFrame(animateRocket);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAnimating, isRocketVisible, windowWidth]);
 
  const handleRocketClick = () => {
    setIsRocketVisible(false);
    setExhaustParticles([]);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-8 md:px-20 py-16 bg-white w-full relative overflow-hidden">
      {exhaustParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gray-200"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${Math.max(particle.size * 0.5, 2)}px`,
            height: `${Math.max(particle.size * 0.5, 2)}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 1s',
         
          }}
        />
      ))}

      {isRocketVisible && (
        <img
          src={rocket_image}
          alt="rocket"
          className="absolute z-20 w-10 sm:w-14 md:w-20 lg:w-28 xl:w-32 cursor-pointer transition-opacity duration-500"
          style={{
            left: `${rocketPosition.x}%`,
            top: `${rocketPosition.y}%`,
            transform: `translate(-50%, -50%) rotate(${rocketPosition.rotation}deg)`,
            transition: 'opacity 0.5s, top 0s, left 0s, transform 0s'
          }}
          onClick={handleRocketClick}
        />
      )}
      <div className="w-full md:w-1/2 space-y-10 text-center md:text-left relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-[#002566] font-sans leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-[#002566] leading-relaxed font-light">
          Her projeye özel bir bakış açısı getiriyor, işinizi en iyi şekilde yansıtmak
          için çalışıyoruz. Hedefimiz sadece beklentileri karşılamak değil, sınırları aşan
          işler ortaya koymak.
        </p>
<<<<<<< HEAD
        <a href="https://wa.me/905518738644" target="_blank" rel="noopener noreferrer">
=======
        <a href="https://wa.me/905518738644" target="_blank" rel="noopener noreferrer"> 
>>>>>>> af5b28026f13fa8a7fda967d86b1a0aa5deb10b8
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