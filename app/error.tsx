'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-lg w-full text-center relative z-10"
            >
                <div className="w-20 h-20 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    We encountered an unexpected error. Don't worry, it's not you - it's us.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Try again
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
                    >
                        Go Home
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
