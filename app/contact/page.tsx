'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here (e.g., console.log for now)
        console.log('Form submitted:', formData)
        alert('Message sent! (This is a demo)')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 py-20 md:py-24'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 md:mb-20 text-center"
            >
                <h1 className='text-3xl font-bold md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    Get in Touch
                </h1>
                <p className='text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed'>
                    Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
                </p>
            </motion.div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex flex-col gap-8'
                >
                    <div className="p-8 rounded-3xl bg-white/10 border border-white/10 hover:border-blue-500/30 transition-colors group">
                        <h3 className='text-2xl font-semibold mb-4 text-white flex items-center gap-3'>
                            <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </span>
                            Email
                        </h3>
                        <a href="mailto:mohanavenkatesh.work@gmail.com" className='text-gray-400 text-lg hover:text-white transition-colors'>mohanavenkatesh.work@gmail.com</a>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                        <h3 className='text-2xl font-semibold mb-6 text-white flex items-center gap-3'>
                            <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </span>
                            Connect
                        </h3>
                        <div className='flex gap-4'>
                            <a href='https://www.linkedin.com/in/mohanavenkatesh/' className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 transition-all text-sm font-medium'>LinkedIn</a>
                            <a href='https://github.com/mohan-codebase' className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all text-sm font-medium'>GitHub</a>
                            <a href='#' className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/50 hover:text-sky-400 transition-all text-sm font-medium'>Twitter</a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-6 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden'
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 space-y-6">
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium mb-2 text-gray-300 ml-1'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-500'
                                placeholder='What should I call you?'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-2 text-gray-300 ml-1'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-500'
                                placeholder='Where can I reach you?'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-sm font-medium mb-2 text-gray-300 ml-1'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-500 resize-none'
                                placeholder='Tell me about your project...'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-white/20'
                        >
                            Send Message
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
