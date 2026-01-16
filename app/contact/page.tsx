'use client'
import React, { useState } from 'react'

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
        <div className='min-h-screen flex flex-col items-center justify-center max-w-170 mx-auto px-5 py-20'>
            <h1 className='text-4xl font-bold mb-8'>Get in Touch</h1>
            
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Contact Info */}
                <div className='flex flex-col gap-6 justify-center'>
                     <p className='text-gray-300 text-lg'>
                        I’m always open to discussing product design work or partnership opportunities.
                    </p>
                    
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Email</h3>
                        <p className='text-gray-400'>mohan@example.com</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Socials</h3>
                        <div className='flex gap-4'>
                            <a href='#' className='text-blue-400 hover:underline'>LinkedIn</a>
                            <a href='#' className='text-gray-200 hover:underline'>GitHub</a>
                            <a href='#' className='text-sky-400 hover:underline'>Twitter</a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-1'>Name</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition'
                            placeholder='Your Name'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='message' className='block text-sm font-medium mb-1'>Message</label>
                        <textarea 
                            id='message' 
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className='w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition resize-none'
                            placeholder='How can I help you?'
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition mt-2'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
