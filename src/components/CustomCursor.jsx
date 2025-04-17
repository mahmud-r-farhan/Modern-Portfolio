import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function CustomCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cursor position update function
    const updatePosition = (e) => {
      const { clientX, clientY } = e;
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.left = `${clientX}px`;
        cursorInnerRef.current.style.top = `${clientY}px`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.left = `${clientX}px`;
        cursorOuterRef.current.style.top = `${clientY}px`;
      }
    };

    // Mouse down/up handling for cursor clicks
    const handleMouseDown = () => {
      cursorOuterRef.current?.classList.add('cursor-clicked');
    };
    const handleMouseUp = () => {
      cursorOuterRef.current?.classList.remove('cursor-clicked');
    };

    // Handle cursor visibility on mouse enter/leave
    const handleMouseLeave = () => {
      cursorOuterRef.current?.classList.add('cursor-hidden');
      cursorInnerRef.current?.classList.add('cursor-hidden');
    };
    const handleMouseEnter = () => {
      cursorOuterRef.current?.classList.remove('cursor-hidden');
      cursorInnerRef.current?.classList.remove('cursor-hidden');
    };

    // Handle link hover events
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursorOuterRef.current?.classList.add('cursor-hover');
      });
      link.addEventListener('mouseleave', () => {
        cursorOuterRef.current?.classList.remove('cursor-hover');
      });
    });

    // Attach event listeners for cursor movement and interactions
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add no-cursor class to body
    document.body.classList.add('no-cursor');

    // Cleanup event listeners and Lenis instance
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {
          cursorOuterRef.current?.classList.add('cursor-hover');
        });
        link.removeEventListener('mouseleave', () => {
          cursorOuterRef.current?.classList.remove('cursor-hover');
        });
      });
      document.body.classList.remove('no-cursor');
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className="fixed z-50 w-8 h-8 border-2 border-white rounded-full pointer-events-none cursor-outer transition-all"
      />
      <div
        ref={cursorInnerRef}
        className="fixed z-50 w-2 h-2 bg-white rounded-full pointer-events-none cursor-inner transition-all"
      />
    </>
  );
}
