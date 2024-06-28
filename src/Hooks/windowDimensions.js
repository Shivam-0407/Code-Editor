import { useState,useEffect } from "react";

export const useWindowDimensions = ()=>{
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return screenSize;
}