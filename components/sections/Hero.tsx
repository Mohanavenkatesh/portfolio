'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-28 md:pt-20 text-center">

            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md"
            >
                <span className="flex items-center gap-2 text-gray-300">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Available for new projects
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl leading-tight md:leading-tight"
            >
                Building Digital <br />
                <span className="text-blue-500">Experiences.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
            >
                Hi, I'm Mohan. A passionate Frontend Developer crafting pixel-perfect, interactive, and accessible web applications.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex flex-wrap justify-center gap-4"
            >
                <Link
                    href="/projects"
                    className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-all hover:bg-gray-200"
                >
                    View Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                    href="/contact"
                    className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                    Contact Me
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;