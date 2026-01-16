'use client'
import React from 'react'

const projects = [
    {
        id: 1,
        title: 'Simple To-Do List',
        description: 'A clean and minimal to-do list app to manage daily tasks. Features include adding, deleting, and marking tasks as complete.',
        tags: ['React', 'State Management', 'CSS Modules'],
        link: '#',
        github: '#'
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
        <div className='min-h-screen max-w-170 mx-auto px-5 py-20'>
            <h1 className='text-4xl font-bold mb-2'>Projects</h1>
            <p className='text-gray-400 mb-10'>Here are some of the projects I've worked on recently.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project) => (
                    <div key={project.id} className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group'>
                        <div className='flex justify-between items-start mb-4'>
                            <h2 className='text-2xl font-semibold group-hover:text-blue-400 transition'>{project.title}</h2>
                            <div className='flex gap-3'>
                                <a href={project.github} className='text-gray-400 hover:text-white transition' title="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 3-1 3 9-2 9-2.83 6-5.5 0-1.4.5-2 1.5-2.5 1-.5 2.5 1 2.5 1 .28 1.15.28 2.35 0 3.5A5.403 5.403 0 0 0 19 18c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /></svg>
                                </a>
                                <a href={project.link} className='text-gray-400 hover:text-white transition' title="Live Demo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            </div>
                        </div>

                        <p className='text-gray-300 mb-6'>{project.description}</p>

                        <div className='flex flex-wrap gap-2'>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
