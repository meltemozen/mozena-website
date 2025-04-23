import React, { useEffect, useState, useRef } from 'react';

interface AboutProps {
  title: string;
  background_items: any;
  rocket_image: any;
}

const About: React.FC<AboutProps> = ({ title, background_items, rocket_image }) => {
  const [rocketPosition, setRocketPosition] = useState({ x: 10, y: 90, rotation: 45 });
  const [tracePoints, setTracePoints] = useState<Array<{id: number, x: number, y: number, opacity: number, color: string}>>([]);
  const isAnimating = true;
  const [isRocketVisible, setIsRocketVisible] = useState(true);
  const traceIdRef = useRef(0);
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
    const animationDuration = windowWidth < 768 ? 1500 : 2000; 
    
    const animateRocket = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const baseX = 10 + progress * 80;
      const baseY = 90 - progress * 80;

      const zigZagAmplitude = windowWidth < 768 ? 5 : 8; 
      const zigZagFrequency = 5; 
      
      const zigZagOffset = zigZagAmplitude * Math.sin(progress * zigZagFrequency * Math.PI);
      
      const angle = Math.atan2(-1, 1); 
      const perpAngle = angle + Math.PI / 2; 

      const x = baseX + zigZagOffset * Math.cos(perpAngle);
      const y = baseY + zigZagOffset * Math.sin(perpAngle);

      const rotationOffset = Math.cos(progress * zigZagFrequency * Math.PI) * 15;
      const rotation = 45 + rotationOffset; 

      setRocketPosition({ x, y, rotation });

      if (progress % 0.01 < 0.005) {
        const traceId = traceIdRef.current++;
        
        const traceAngle = (rotation - 180) * (Math.PI / 180);
        const traceDistance = windowWidth < 768 ? 3 : 4;
        const traceX = x + Math.cos(traceAngle) * traceDistance;
        const traceY = y + Math.sin(traceAngle) * traceDistance;
        
        const hue = 210 + Math.random() * 30;
        const saturation = 90 + Math.random() * 10;
        const lightness = 60 + Math.random() * 20;
        
        const tracePoint = {
          id: traceId,
          x: traceX,
          y: traceY,
          opacity: 0.8,
          color: `hsla(${hue}, ${saturation}%, ${lightness}%, 0.85)`
        };

        setTracePoints(prev => [...prev, tracePoint]);

        setTimeout(() => {
          setTracePoints(prev => prev.filter(p => p.id !== traceId));
        }, 1500);
      }
      
      if (progress >= 1) {
        setIsRocketVisible(false);
        setTracePoints([]);
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
    setTracePoints([]);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-8 md:px-20 py-16 bg-white w-full relative overflow-hidden">
      {tracePoints.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${8 - index * 0.15}px`,
            height: `${8 - index * 0.15}px`,
            backgroundColor: point.color,
            opacity: point.opacity * (1 - index * 0.02),
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 10px 3px ${point.color}`,
            zIndex: 15,
          }}
        />
      ))}

      {isRocketVisible && (
        <img
          src={rocket_image}
          alt="rocket"
          className="absolute z-20 w-10 sm:w-14 md:w-20 lg:w-28 xl:w-32 cursor-pointer transition-all"
          style={{
            left: `${rocketPosition.x}%`,
            top: `${rocketPosition.y}%`,
            transform: `translate(-50%, -50%) rotate(${rocketPosition.rotation}deg)`,
            transition: 'transform 0.1s ease-out',
            filter: 'drop-shadow(0 0 8px rgba(100, 200, 255, 0.7))'
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
        <a href="https://wa.me/905518738644" target="_blank" rel="noopener noreferrer">
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
