import React, { useEffect, useRef } from 'react';
import AnimatedButton from './button/AnimatedButton';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add('animate-fade-in');
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x-pos', `${x}px`);
        card.style.setProperty('--y-pos', `${y}px`);
      };

      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'ModernMart E-Commerce',
      description:
        'A full-stack e-commerce platform built with React, Next.js Node.js, Express, and MongoDB. Features include user authentication, product browsing, cart functionality, and payment processing.',
      tags: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'Express', 'Zustand'],
      image: 'https://res.cloudinary.com/dqovjmmlx/image/upload/v1740311428/f18f1b500ef384693ce8947bf68dbddb_flpzca.jpg',
      link: 'https://modernmart-mern.vercel.app/',
    },
    {
      id: 2,
      title: 'Anony Post - share your thoughts anonymously',
      description: 'AnonyPost is a secure platform for anonymous posting social media.',
      tags: ['React', 'MongoDB', 'Cloudinary', 'Node.js', 'Tailwind'],
      image: 'https://res.cloudinary.com/dydnhyxfh/image/upload/v1739128091/New_Project_1_1_hflkhd.webp',
      link: 'https://anonypost-app.vercel.app/',
    },
    {
      id: 3,
      title: 'Customer Service Center',
      description:
        'web-based system designed to manage customer registration, token generation, serial number tracking, and agent-assisted consultation.',
      tags: ['MERN', 'Tailwind', 'WebSocket', 'jwt', 'SaaS'],
      image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o35bt4gp4v4f5m7a1jor.jpg',
      link: 'https://customer-service-center.vercel.app/login',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      description:
        'Convenient food delivery app that lets users order from local restaurants and have meals delivered to their doorstep quickly.',
      tags: ['Tailwind', 'MERN'],
      image: 'https://via.placeholder.com/600x400?text=Food+Delivery+App',
      link: 'https://beefood.netlify.app/',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-navy relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-purple-dark/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-blue-DEFAULT/10 blur-3xl"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl text-white font-bold mb-4 reveal-item"
            ref={(el) => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div
            className="h-1 w-20 bg-gradient-to-r from-purple-light to-blue-DEFAULT mx-auto reveal-item"
            ref={(el) => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '100ms' }}
          ></div>
          <p
            className="max-w-2xl mx-auto text-gray-300 mt-6 reveal-item"
            ref={(el) => el && elementsRef.current.push(el)}
            style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '200ms' }}
          >
            Check out some of my recent projects showcasing my expertise in MERN stack development and modern frontend technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group relative overflow-hidden rounded-xl glass-effect reveal-item"
              ref={(el) => el && elementsRef.current.push(el)}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transitionDelay: `${300 + index * 100}ms`,
                '--x-pos': '100px',
                '--y-pos': '100px',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(600px circle at var(--x-pos) var(--y-pos), rgba(155, 135, 245, 0.15), transparent 40%)',
                }}
              ></div>

              <div className="p-8">
                <div className="relative overflow-hidden rounded-lg mb-6 h-48 group/image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover/image:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-DEFAULT/20 text-purple-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <AnimatedButton variant="gradient" size="sm" href={project.link} target="_blank">
                  View Project
                </AnimatedButton>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center reveal-item"
          ref={(el) => el && elementsRef.current.push(el)}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transitionDelay: `${300 + projects.length * 100}ms`,
          }}
        >
          <AnimatedButton variant="outline" size="lg" href="#">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}