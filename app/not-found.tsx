'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center relative z-10"
            >
                <h1 className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-80">
                    404
                </h1>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-lg mx-auto -mt-10 md:-mt-16 relative">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Oops! The page you're looking for seems to have vanished into the digital void.
                    </p>

                    <Link href="/">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20">
                            Return Home
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
