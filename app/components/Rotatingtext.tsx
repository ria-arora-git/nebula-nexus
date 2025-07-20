'use client';
import { useState, useEffect } from 'react';

const RotatingText = () => {
  const texts = [
    "Empowering Innovation",
    "Building with Purpose",
    "Driven by Curiosity",
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className={`text-3xl font-extralight text-white text-center transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {texts[index]}
    </div>
  );
};

export default RotatingText;
