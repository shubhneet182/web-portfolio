'use client';

import { useRef, useEffect } from 'react';

export default function TimelineScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollY = window.scrollY;
        const scrollAmount = scrollY * 0.8; // Adjust the multiplier for speed
        scrollRef.current.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div
        ref={scrollRef}
        className="overflow-x-scroll whitespace-nowrap w-full no-scrollbar"
        style={{
            scrollBehavior: 'smooth', // Smooth scrolling
            whiteSpace: 'nowrap', // Prevents items from wrapping
            display: 'flex', // Ensures horizontal layout
            width: '100%', // Ensures it spans full width
        }}
        >
        {children}
        </div>;
};
