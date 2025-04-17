import React, { useEffect, useRef, useState } from 'react'
import AnimatedButton from './button/AnimatedButton'

export default function ContactSection() {
  const sectionRef = useRef(null)
  const elementsRef = useRef([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target
          target.classList.add('animate-fade-in')
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
          observer.unobserve(target)
        }
      })
    }
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    
    elementsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })
    
    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach(el => {
          if (el) observer.unobserve(el)
        })
      }
    }
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Thanks for your message! This is a demo form, so no message was actually sent.')
  }
  
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      type: 'Phone',
      value: '+880 1998470273'
    },
    {
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      type: 'Email',
      value: 'dev@devplus.fun'
    },
    {
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      type: 'Location',
      value: 'Bogura 5800, Bangladesh'
    }
  ]
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-deep-blue relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-purple-dark/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-blue-DEFAULT/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-4 reveal-item"
            ref={el => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div 
            className="h-1 w-20 bg-gradient-to-r from-purple-light to-blue-DEFAULT mx-auto reveal-item"
            ref={el => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '100ms' }}
          ></div>
          <p 
            className="max-w-2xl mx-auto text-gray-300 mt-6 reveal-item"
            ref={el => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '200ms' }}
          >
            Have a project in mind or want to discuss collaboration opportunities? Let's connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.type}
              className="glass-effect p-6 rounded-xl text-center reveal-item"
              ref={el => el && elementsRef.current.push(el)}
              style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-DEFAULT/20 flex items-center justify-center text-purple-light mx-auto mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{contact.type}</h3>
              <p className="text-gray-300">{contact.value}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="glass-effect p-8 rounded-xl reveal-item"
          ref={el => el && elementsRef.current.push(el)}
          style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-navy/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-light transition-colors"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-navy/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-light transition-colors"
                required
              />
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-navy/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-light transition-colors"
                required
              />
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-navy/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-light transition-colors"
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2 text-center">
              <AnimatedButton variant="gradient" size="lg" className="w-full md:w-auto">
                Send Message
              </AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}