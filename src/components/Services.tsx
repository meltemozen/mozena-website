import { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
interface ServicesProps {
    servicesTitle: string;
    rocketImage: any;
    mainTitle1: string;
    subTitle1: string;
  }

  
  const Services: React.FC<ServicesProps> = ({servicesTitle ,rocketImage, mainTitle1, subTitle1}) => {
   
    const [isVisible, setIsVisible] = useState(false);
    const [showText, setShowText] = useState(false);
    const ref = useRef(null); 
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        },
        { threshold: 0.3 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div ref={ref} className="relative flex flex-col items-center h-screen overflow-hidden bg-gray-50">
        
        {isVisible && (
        <motion.img
          src={rocketImage}
          className="rotate-90 absolute"
          alt="Moving Object"
          initial={{ y: 1500 }} 
          animate={{ y: -1500 }} 
          transition={{ duration: 3, ease: "easeInOut" }} 
          onAnimationComplete={() => setShowText(true)} 
        />
        )}

        {showText && (
        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="absolute text-3xl md:text-5xl font-bold text-[#002566] font-sans leading-tight"
        >
          {servicesTitle}
        </motion.p>
        )}

        <div className="flex items-center justify-end h-screen p-10">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-[#002566]">
            {mainTitle1}
          </h2>
        <p className="mt-2 text-lg text-[#002566]">
            {subTitle1}
        </p>
        </div>
        </div>

      </div>

      
    );
    
}

export default Services;