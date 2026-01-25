'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
                    scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
                )}
            >
                <nav className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity z-50 relative">
                        M<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 relative p-2 text-white hover:text-blue-400 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        <ul className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1) }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-3xl font-bold text-white/80 hover:text-white hover:scale-105 transition-all py-2"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto mb-10 text-gray-400 text-sm"
                        >
                            <p>© {new Date().getFullYear()} Mohan. All rights reserved.</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;