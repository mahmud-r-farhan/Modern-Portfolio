import React, { useEffect, useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);

  // Smooth scroll damping using useSpring for scroll progress
  const { scrollY } = useScroll({
    container: containerRef,
  });
  const springScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100; // Offset for header
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth', // Native smooth scroll
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener('click', handleAnchorClick)
    );

    // Cleanup
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener('click', handleAnchorClick)
      );
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100%', overflowY: 'auto' }}>
      {children}
    </div>
  );
}