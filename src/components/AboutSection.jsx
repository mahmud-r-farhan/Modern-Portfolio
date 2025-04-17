import React, { useEffect, useRef } from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import Profile from '../assets/pictures/profile-png.png'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const elementsRef = useRef([])

  const skills = [
    { name: 'React.js', level: 90, description: 'Building scalable and interactive user interfaces', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', level: 85, description: 'Building fast and scalable server-side applications', icon: <FaNodeJs />, color: '#339933' },
    { name: 'MongoDB', level: 90, description: 'Database management with NoSQL and aggregation pipelines', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express.js', level: 90, description: 'Building RESTful APIs with this web application framework', icon: <SiExpress />, color: '#000000' },
    { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework for building responsive UIs quickly', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Next.js', level: 85, description: 'Full-stack React framework for static and dynamic web apps', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'GitHub', level: 90, description: 'Version control and collaboration with Git and GitHub', icon: <SiGithub />, color: '#F05032' }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-deep-blue to-navy relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-dark/10 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-DEFAULT/10 to-transparent rounded-tr-full"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, transform: 'translateY(30px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-purple-light to-blue-DEFAULT mx-auto"
            initial={{ opacity: 0, transform: 'translateY(30px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl glass-effect relative"
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-DEFAULT to-blue-DEFAULT p-1">
              <div className="w-full h-full bg-navy flex items-center justify-center">
                <img
                  src={Profile}
                  title="Mahmudur Rahman Headshot"
                  alt="profile"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
              <div className="absolute -bottom-2 -right-2 w-64 h-20 bg-gradient-to-br from-purple-light to-blue-DEFAULT rounded-lg p-4">
                <h2 className="text-lg text-white">Mahmudur Rahman</h2>
                <h4 className="text-sm text-gray-300">Full Stack Developer</h4>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full Stack MERN Developer
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. With a strong
              foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js), I create responsive and dynamic web
              applications with seamless user experiences and stunning animations.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              My approach combines technical expertise with creative problem-solving, allowing me to build solutions that are
              both functional and visually impressive. I'm constantly exploring new technologies and techniques to push the
              boundaries of what's possible on the web.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <p className="text-purple-light font-medium">Name:</p>
                <p className="text-white">Mahmudur Rahman</p>
              </div>
              <div>
                <p className="text-purple-light font-medium">Email:</p>
                <p className="text-white">dev@devplus.fun</p>
              </div>
              <div>
                <p className="text-purple-light font-medium">From:</p>
                <p className="text-white">Bogura, Bangladesh</p>
              </div>
              <div>
                <p className="text-purple-light font-medium">Experience:</p>
                <p className="text-white">2+ Years</p>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="mt-20" 
          id="skills"
          ref={sectionRef}>
          <motion.h3
            className="text-3xl md:text-3xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, transform: 'translateY(30px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12"
            initial={{ opacity: 0, transform: 'translateY(30px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-4">
                <motion.div
                  className="flex justify-between mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <h4 className="text-white font-medium">{skill.name}</h4>
                  <span className="text-purple-light">{skill.level}%</span>
                </motion.div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-DEFAULT to-blue-DEFAULT rounded-full"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  )
}
