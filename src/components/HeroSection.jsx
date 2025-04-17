import React, { useEffect, useRef } from 'react'
import AnimatedButton from './button/AnimatedButton'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const textRefs = useRef([])

  useEffect(() => {
    const texts = textRefs.current
    
    const revealTexts = () => {
      texts.forEach((text, index) => {
        setTimeout(() => {
          if (text) {
            text.style.transform = 'translateY(0)'
            text.style.opacity = '1'
          }
        }, 200 * index)
      })
    }
    
    setTimeout(revealTexts, 500)
    
    return () => {
      texts.forEach(text => {
        if (text) {
          text.style.transform = ''
          text.style.opacity = ''
        }
      })
    }
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollPos = window.scrollY
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax')
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.2 + (index * 0.1)
        el.style.transform = `translateY(${scrollPos * speed}px)`
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy to-deep-blue"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-dark/20 blur-3xl parallax"></div>
        <div className="absolute top-1/3 right-10 w-60 h-60 rounded-full bg-blue-DEFAULT/10 blur-3xl parallax"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-purple-light/15 blur-3xl parallax"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <p 
            className="text-white mb-4 font-medium opacity-0 transform translate-y-6 transition-all duration-500" 
            ref={el => el && textRefs.current.push(el)}
          >
            Hi there, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="block overflow-hidden" style={{ lineHeight: 1.1 }}>
              <span 
                className="block opacity-0 transform translate-y-15 transition-all duration-500"
                ref={el => el && textRefs.current.push(el)}
              >
                MERN Stack
              </span>
            </span>
            <span className="block overflow-hidden text-white mt-2" style={{ lineHeight: 1.1 }}>
              <span 
                className="block opacity-0 transform translate-y-15 transition-all duration-500"
                ref={el => el && textRefs.current.push(el)}
              >
                Developer
              </span>
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl opacity-0 transform translate-y-8 transition-all duration-500"
            ref={el => el && textRefs.current.push(el)}
          >
            I create stunning web experiences with cutting-edge technologies and smooth animations
          </p>
          
          <div 
            className="flex flex-wrap gap-4 mt-2 opacity-0 transform translate-y-8 transition-all duration-500"
            ref={el => el && textRefs.current.push(el)}
          >
            <AnimatedButton variant="gradient" size="lg" href="#projects">View My Work</AnimatedButton>
            <AnimatedButton variant="outline" size="lg" href="#contact">Contact Me</AnimatedButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-light">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
