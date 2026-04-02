import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => {
    const getWindowSize = () => {
      const width = window.innerWidth;
      const devicePixelRatio = window.devicePixelRatio || 1;
      const actualWidth = width / devicePixelRatio;

      return {
        width,
        height: window.innerHeight,
        isDesktop: actualWidth > 1440,
        isLaptop: actualWidth > 1000,
        isTablet: actualWidth > 500 && actualWidth <= 1000,
        isMobile: actualWidth <= 500,
        isTV: actualWidth >= 1000,
        isWatch: actualWidth <= 300,
        devicePixelRatio,
        actualWidth,
      };
    };

    return getWindowSize();
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(() => {
        const width = window.innerWidth;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const actualWidth = width / devicePixelRatio;

        return {
          width,
          height: window.innerHeight,
          isDesktop: actualWidth > 1440,
          isLaptop: actualWidth > 1000,
          isTablet: actualWidth > 500 && actualWidth <= 1000,
          isMobile: actualWidth <= 500,
          isTV: actualWidth >= 1000,
          isWatch: actualWidth <= 300,
          devicePixelRatio,
          actualWidth,
        };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
