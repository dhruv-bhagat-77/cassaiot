"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const createLogos = () => {
  const baseLogos = [
    { id: 1, src: '/images/logo/dpiit.png', alt: 'DPIIT' },
    { id: 2, src: '/images/logo/msme.png', alt: 'MSME' },
    { id: 3, src: '/images/logo/make_in_india.png', alt: 'Make In India' }
  ];
  
  // Create a single array with unique IDs for each logo instance
  const duplicatedLogos = [];
  const duplicates = 3; // Number of times to duplicate the logos for smooth looping
  
  for (let i = 0; i < baseLogos.length * duplicates; i++) {
    const originalLogo = baseLogos[i % baseLogos.length];
    duplicatedLogos.push({
      ...originalLogo,
      id: `logo-${i}-${originalLogo.id}` // Ensure unique IDs
    });
  }
  
  return duplicatedLogos;
};

const logos = createLogos();

const LogoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);
  const speed = 0.5; // Pixels per frame

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const container = containerRef.current;
    if (!container) return;

    // Set the width of the scroll container to fit all logos
    // Calculate total width based on number of logos and their size
    const logoWidth = 200; // Width of each logo container
    const logoGap = 64; // 4rem in pixels (matching the gap-16 in the flex container)
    const totalWidth = (logoWidth + logoGap) * logos.length;
    scrollContainer.style.width = `${totalWidth}px`;

    const animate = () => {
      if (!scrollContainerRef.current) return;
      
      scrollPosition.current -= speed;
      
      // Reset position when scrolled one full set of logos
      if (-scrollPosition.current >= totalWidth / 2) {
        scrollPosition.current = 0;
      }
      
      scrollContainerRef.current.style.transform = `translateX(${scrollPosition.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-4 bg-primary dark:bg-primary/90 w-full overflow-hidden">
      <div className="w-full">
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden"
        >
          <div 
            ref={scrollContainerRef}
            className="flex items-center py-4"
            style={{
              display: 'flex',
              willChange: 'transform',
              gap: '4rem' // Adjust gap between logos
            }}
          >
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 px-8"
                style={{ minWidth: '200px' }} // Ensure consistent width for all logos
              >
                <div className="relative w-full h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 120px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
