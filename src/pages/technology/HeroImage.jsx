import { useState, useEffect } from 'react';

export default function HeroImage({ selectedTech, portraitImg, landscapeImg }) {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    function checkScreenWidth() {
      const mediaQuery = window.matchMedia('(max-width: 1439px)');
      mediaQuery.matches
        ? setIsTabletOrMobile(true)
        : setIsTabletOrMobile(false);
    }

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, [isTabletOrMobile]);

  return (
    <img
      src={isTabletOrMobile ? landscapeImg : portraitImg}
      alt={`Image of ${selectedTech.toLowerCase()}`}
      className='technology__hero-image'
    />
  );
}
