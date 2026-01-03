import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[900px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/about.webp"
          alt="City Skyline"
          fill
          className="object-cover dark:brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif dark:text-gray-100">ABOUT US</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
