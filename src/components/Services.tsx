import { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
interface ServicesProps {
    servicesTitle: string;
    rocketImage: any;
    hizmetlerimiz:any;
    mainTitle1: string;
    subTitle1: string;
    maintTitle2: string;
    subTitle2: string;
    maintTitle3: string;
    subTitle3: string;
  }

  
  const Services: React.FC<ServicesProps> = ({servicesTitle ,rocketImage, mainTitle1, subTitle1,hizmetlerimiz,maintTitle2,subTitle2,maintTitle3,subTitle3}) => {
   
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
          className="absolute text-2xl md:text-5xl font-bold text-[#002566] font-sans leading-tight"
        >
          {servicesTitle}
        </motion.p>
        )}

<div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full min-h-screen p-4 md:p-10">
  <div className="w-full md:w-1/2 max-w-xl px-4 py-6 flex justify-center items-center">
    <img
      src={hizmetlerimiz}
      className="w-full h-auto max-w-md object-contain transform transition-transform duration-300 
      sm:scale-110 
      md:scale-115 md:translate-x-16 
      lg:scale-125 lg:translate-x-24 
      xl:scale-135 xl:translate-x-28"
      alt="Hizmetlerimiz"
    />
  </div>
  <div className="w-full md:w-1/2 max-w-xl px-4 py-6">
    <h2 className="text-xl md:text-3xl font-bold text-[#002566]">
      {mainTitle1}
    </h2>
    <p className="mt-2 text-base md:text-lg text-[#002566]">
      {subTitle1}
    </p>
    <br />
    <h2 className="text-xl md:text-3xl font-bold text-[#002566]">
      {maintTitle2}
    </h2>
    <p className="mt-2 text-base md:text-lg text-[#002566]">
      {subTitle2}
    </p>
    <br />
    <h2 className="text-xl md:text-3xl font-bold text-[#002566]">
      {maintTitle3}
    </h2>   
    <p className="mt-2 text-base md:text-lg text-[#002566]">
      {subTitle3}
    </p>
  </div>
</div>


      
      </div>
    );
  }
export default Services;