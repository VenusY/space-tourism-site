import { useState, useEffect } from 'react';

export default function HeroImage({ selectedTech, portraitImg, landscapeImg }) {
  return (
    <>
      <img
        src={landscapeImg}
        alt={`Image of ${selectedTech.toLowerCase()}`}
        className='technology__hero-image--mobile'
      />

      <img
        src={portraitImg}
        alt={`Image of ${selectedTech.toLowerCase()}`}
        className='technology__hero-image--desktop'
      />
    </>
  );
}
