import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
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
    const handleLinkMouseEnter = () => {
      cursorOuterRef.current?.classList.add('cursor-hover');
    };
    const handleLinkMouseLeave = () => {
      cursorOuterRef.current?.classList.remove('cursor-hover');
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkMouseEnter);
      link.addEventListener('mouseleave', handleLinkMouseLeave);
    });

    // Attach event listeners for cursor movement and interactions
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add no-cursor class to body
    document.body.classList.add('no-cursor');

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkMouseEnter);
        link.removeEventListener('mouseleave', handleLinkMouseLeave);
      });

      document.body.classList.remove('no-cursor');
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
