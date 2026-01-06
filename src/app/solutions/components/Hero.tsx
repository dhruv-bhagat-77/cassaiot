import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/solutions.webp"
          alt="AI and IoT Solutions"
          fill
          className="object-cover dark:brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif dark:text-gray-100 mb-4">
            OUR SOLUTIONS
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Innovative AI and IoT solutions for industrial automation and digital transformation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
