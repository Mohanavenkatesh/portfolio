'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    return (
        <div className='min-h-screen max-w-5xl mx-auto px-6 py-20 md:py-32'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mb-16"
            >
                <h1 className='text-3xl font-bold md:text-6xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    About Me
                </h1>
                <div className="p-6 md:p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <p className='text-lg md:text-xl text-gray-300 leading-relaxed relative z-10'>
                        Hi, I’m <span className="text-white font-semibold">Mohan</span>. A frontend developer who enjoys building clean, simple, and functional web interfaces using React and Next.js.
                    </p>
                </div>
            </motion.div>

            <div className='space-y-16'>
                {/* Story */}
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                        <span className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z" /><circle cx="12" cy="11" r="1" /></svg>
                        </span>
                        My Journey
                    </h2>
                    <div className="pl-6 border-l-2 border-white/10 space-y-6">
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            I started my journey with basic <span className="text-white">HTML and CSS</span>, building simple static pages and experimenting with layouts.
                            As I grew more curious about how websites actually work, I moved into <span className="text-white">JavaScript</span> and later <span className="text-white">React</span>.
                        </p>
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            Instead of jumping from tutorial to tutorial, I began building small real projects and slowly improved my understanding of components, state, and data flow.
                            Recently, I’ve been working with <span className="text-white">Next.js</span> and exploring how frontend connects with backend APIs.
                        </p>
                    </div>
                </motion.section>

                {/* Focus Area & Approach Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-colors'
                    >
                        <h2 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /></svg>
                            Current Focus
                        </h2>
                        <ul className='space-y-4'>
                            {[
                                "Writing clean and reusable React components",
                                "Understanding JavaScript concepts deeply",
                                "Building real-world projects",
                                "Improving UI structure with Tailwind",
                                "Connecting Frontend with Backend APIs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className='bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-colors'
                    >
                        <h2 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M2 12h20" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" /><path d="M12 2l-5 5" /><path d="M12 2l5 5" /></svg>
                            How I Build
                        </h2>
                        <ol className='space-y-4'>
                            {[
                                "Start with a basic UI and layout",
                                "Break UI into reusable components",
                                "Add state and interactions",
                                "Connect APIs and handle errors",
                                "Refactor for clean code"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">
                                        {i + 1}
                                    </span>
                                    <span className="mt-0.5">{item}</span>
                                </li>
                            ))}
                        </ol>
                    </motion.section>
                </div>

                {/* Details */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-3xl'
                >
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        {[
                            { label: "Location", value: "Chennai, India" },
                            { label: "Open to", value: "Junior roles, Internships, Freelance " },
                            { label: "Primary Tech", value: "React, Next.js, Tailwind CSS " },
                            { label: "Learning", value: "Advanced JS & Backend Basics " }
                        ].map((item, i) => (
                            <div key={i}>
                                <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{item.label}</span>
                                <span className="text-white font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center pt-8"
                >
                    <p className='text-gray-400 text-lg mb-8'>
                        If you’d like to collaborate or know more about my work
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href='/projects'>
                            <button className='px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform'>
                                View Projects
                            </button>
                        </Link>
                        <Link href='/contact'>
                            <button className='px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors'>
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </motion.section>
            </div>
        </div>
    )
}