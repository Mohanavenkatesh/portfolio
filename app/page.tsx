'use client';
import Hero from "@/components/sections/Hero";
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <Hero />

            <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <h2 className='text-4xl font-bold md:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        My preferred ecosystem for building high-performance, scalable web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Category 1: Core & Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.12] transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Languages</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 group-hover:bg-yellow-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">JavaScript (ES6+)</p>
                                    <p className="text-sm text-gray-400">Core logic & interactivity</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20l4-16m2 16l4-16M6 9h12M4 6h16" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">HTML5</p>
                                    <p className="text-sm text-gray-400">Structural semantic markup</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l4-16m2 16l4-16M6 9h12M4 6h16" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">CSS3</p>
                                    <p className="text-sm text-gray-400">Modern layout & animations</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Category 2: Frameworks */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-2-4-2v4zm-4 4-2 4-2-4h4zm-4-10-4 2 4 2V10zm4-4 2-4 2 4h-4zm2 10H8v-4h8v4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Frameworks</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 21.7C17.3 21.7 21.7 17.3 21.7 12S17.3 2.3 12 2.3 2.3 6.7 2.3 12 6.7 21.7 12 21.7z" /><path d="M12 21.7c-5.3 0-9.7-4.3-9.7-9.7S6.7 2.3 12 2.3" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">React</p>
                                    <p className="text-sm text-gray-400">Component-based UI architecture</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-white/10 rounded-lg text-white group-hover:bg-white/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">Next.js</p>
                                    <p className="text-sm text-gray-400">SSR & Production Framework</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-sky-500/10 rounded-lg text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">Tailwind CSS</p>
                                    <p className="text-sm text-gray-400">Utility-first styling system</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Category 3: Tools & Backend */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/10 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.12] transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-pink-500/20 rounded-xl text-pink-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Backend & Tools</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:bg-green-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">Node.js</p>
                                    <p className="text-sm text-gray-400">Server-side runtime</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-green-600/10 rounded-lg text-green-600 group-hover:bg-green-600/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">MongoDB</p>
                                    <p className="text-sm text-gray-400">NoSQL Database</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-2 bg-orange-600/10 rounded-lg text-orange-500 group-hover:bg-orange-600/20 transition-colors">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>
                                </span>
                                <div>
                                    <p className="text-white font-medium">Git</p>
                                    <p className="text-sm text-gray-400">Version Control</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
                    <h2 className='text-4xl font-bold mb-8 md:text-5xl text-white'>
                        Ready to start a project?
                    </h2>
                    <p className="text-gray-400 mb-12 text-xl max-w-2xl mx-auto">
                        I'm currently available for freelance work. Let's build something extraordinary together.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link href='/contact'>
                            <button className='group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden'>
                                <span className="relative z-10 flex items-center gap-2">
                                    Get in Touch
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </Link>
                        <Link href='/projects'>
                            <button className='px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full transition-all hover:bg-white/10 hover:border-white/40'>
                                View Work
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
