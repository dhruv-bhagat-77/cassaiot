import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden dark:bg-dark">
      {/* Video Background with Overlay */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                WE ARE WORKING ON <span className="text-red-600 dark:text-red-500">EDGE INNOVATION</span><br/>
                SO THE WORLD 
              </h1>
              <p 
                className="text-2xl text-white/90 dark:text-gray-200 mb-8 max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Can seat back and relax because <br/> we are awake to solve your problems.
              </p>
              <Link 
                href="/explore" 
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-100 hover:bg-primary/90 text-black hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                EXPLORE NOW
                <i className="bg-[url('/images/hero/arrow-right.svg')] bg-no-repeat bg-contain w-5 h-5 inline-block"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
