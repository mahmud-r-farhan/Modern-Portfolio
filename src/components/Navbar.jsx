import React, { useState, useEffect } from 'react'
import AnimatedButton from './button/AnimatedButton'
import Logo from '../assets/pictures/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-navy/90 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="https://devplus.fun" target='_blank' className="flex items-center">
          <img src={Logo} alt="Logo" className='w-[15%]'/>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white relative overflow-hidden group px-2 py-1"
            >
              <span className="relative z-10 group-hover:text-purple-light transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-light group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
          <AnimatedButton variant="gradient" size="sm"><a href='' target='_blank'>Let's Talk</a></AnimatedButton>
        </div>

        <button 
          className="md:hidden flex flex-col justify-between w-7 h-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-7 translate-y-[10px] rotate-45' : 'w-7'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5 ml-auto'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-7 -translate-y-[10px] -rotate-45' : 'w-7'}`}></span>
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container px-4 mx-auto flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white hover:text-purple-light py-2 transition-colors duration-300"
              style={{ 
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: `opacity 0.3s ease, transform 0.3s ease ${index * 0.05}s` 
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div 
            className="my-2"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
              transition: `opacity 0.3s ease, transform 0.3s ease ${navLinks.length * 0.05}s`
            }}
          >
            <AnimatedButton variant="gradient" size="sm">
              Let's Talk
            </AnimatedButton>
          </div>
        </div>
      </div>
    </nav>
  )
}