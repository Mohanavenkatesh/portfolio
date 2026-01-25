'use client'
import React from 'react'
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Simple To-Do List',
        description: 'A clean and minimal to-do list app to manage daily tasks. Features include adding, deleting, and marking tasks as complete.',
        tags: ['React', 'State Management', 'CSS Modules'],
        link: 'https://react-todo-app-kappa-six.vercel.app/',
        github: 'https://github.com/Mohanavenkatesh/react-todo-app'
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'Fetches real-time weather data using the OpenWeatherMap API. Displays current temperature, humidity, and wind speed.',
        tags: ['React', 'Fetch API', 'OpenWeatherMap'],
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'This very website! Built to showcase my learning progress and projects. Focuses on clean layout and component reusability.',
        tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Calculator App',
        description: 'A fully functional calculator capable of basic arithmetic operations. Good practice for logic and state handling.',
        tags: ['JavaScript', 'HTML/CSS', 'Grid Layout'],
        link: '#',
        github: '#'
    }
]

const Projects = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 py-20 md:py-24'>
            <div className="mb-20 text-center">
                <h1 className='text-3xl font-bold md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    Projects
                </h1>
                <p className='text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed'>
                    Here are some of the projects I've worked on recently, showcasing my journey in building scalable web applications.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 auto-rows-fr'>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, rotateX: 2, rotateY: 2, scale: 1.02 }}
                        className='group relative flex flex-col rounded-3xl bg-white/10 p-6 md:p-8 transition-all hover:bg-white/15 overflow-hidden border border-white/10 hover:border-blue-500/30 shadow-2xl shadow-transparent hover:shadow-blue-500/10'
                        style={{ perspective: 1000 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className='relative z-10 flex flex-col h-full'>
                            <div className='mb-6 flex justify-between items-start'>
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" /><path d="M12 2l-5 5" /><path d="M12 2l5 5" /></svg>
                                </div>
                                <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">0{index + 1}</span>
                            </div>

                            <h2 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors'>{project.title}</h2>

                            <p className='text-gray-400 mb-8 flex-grow leading-relaxed'>{project.description}</p>

                            <div className='flex flex-wrap gap-2 mb-8'>
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className='rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-200'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='flex gap-4 mt-auto pt-6 border-t border-white/10'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex flex-1 items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 px-4 py-3 rounded-xl text-sm font-medium text-white transition-all group/btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/btn:opacity-100 transition-opacity"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 3-1 3 9-2 9-2.83 6-5.5 0-1.4.5-2 1.5-2.5 1-.5 2.5 1 2.5 1 .28 1.15.28 2.35 0 3.5A5.403 5.403 0 0 0 19 18c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /></svg>
                                    Code
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className='flex flex-1 items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all group/btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects
