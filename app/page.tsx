import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center max-w-170 mx-auto px-5 py-20'>
            <Hero />

            <div className="w-full mt-24">
                <h2 className='text-3xl font-bold mb-8 text-center'>Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
                        <p className="text-gray-300 leading-relaxed">
                            HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Backend & Tools</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Node.js basics, MongoDB, Git, GitHub, VS Code
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-28 text-center w-full max-w-2xl bg-gradient-to-b from-white/5 to-transparent p-10 rounded-3xl border border-white/10">
                <h2 className='text-3xl font-bold mb-4'>Get in Touch</h2>
                <p className="text-gray-300 mb-8 text-lg">
                    Interested in collaborating or want to know more about my work?
                    <br />Feel free to reach out!
                </p>
                <div className="flex justify-center gap-4">
                    <Link href='/contact'>
                        <button className='bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition'>
                            Contact Me
                        </button>
                    </Link>
                    <Link href='/projects'>
                        <button className='bg-transparent border border-white/30 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition'>
                            View Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
