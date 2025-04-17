import React, { useRef, useState } from 'react'
import { cn } from '../../lib/utils'

export default function AnimatedButton({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'md',
  onClick, 
  href,
  magnetic = true
}) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!magnetic || !buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const maxDistance = 15
    const distanceX = Math.min(maxDistance, Math.max(-maxDistance, (e.clientX - centerX) * 0.2))
    const distanceY = Math.min(maxDistance, Math.max(-maxDistance, (e.clientY - centerY) * 0.2))
    
    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const variantStyles = {
    default: 'bg-purple-DEFAULT text-white hover:bg-purple-dark',
    outline: 'border border-purple-DEFAULT text-purple-DEFAULT hover:bg-purple-DEFAULT hover:text-white',
    gradient: 'bg-gradient-to-r from-purple-DEFAULT to-blue-DEFAULT text-white hover:from-purple-dark hover:to-blue-dark'
  }

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }

  const buttonStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.2s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
  }

  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-lg font-medium relative overflow-hidden',
    'transition-all duration-300 ease-out',
    'before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity',
    'hover:before:opacity-100',
    'after:absolute after:inset-0 after:bg-black/10 after:opacity-0 after:transition-opacity',
    'active:after:opacity-100',
    sizeStyles[size],
    variantStyles[variant],
    className
  )

  if (href) {
    return (
      <a 
        ref={buttonRef}
        href={href}
        className={buttonClasses}
        style={buttonStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      ref={buttonRef}
      className={buttonClasses}
      style={buttonStyle}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}