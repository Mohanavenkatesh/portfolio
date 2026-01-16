export default function About() {
    return (
        <div className='min-h-screen flex flex-col items-start justify-center max-w-170 mx-auto px-5 py-32'>
            <h1 className='text-4xl font-bold mb-10'>About Me</h1>

            <div className='space-y-12 text-lg text-gray-300'>
                {/* Intro */}
                <section>
                    <p className='leading-relaxed'>
                        Hi, I’m <span className="text-white font-semibold">Mohan</span>. A frontend developer who enjoys building clean, simple, and functional web interfaces using React and Next.js.
                    </p>
                    <p className='mt-6 leading-relaxed'>
                        I started my journey with basic HTML and CSS, building simple static pages and experimenting with layouts.
                        As I grew more curious about how websites actually work, I moved into JavaScript and later React.
                    </p>
                    <p className='mt-6 leading-relaxed'>
                        Instead of jumping from tutorial to tutorial, I began building small real projects and slowly improved my understanding of components, state, and data flow.
                        Recently, I’ve been working with Next.js and exploring how frontend connects with backend APIs.
                    </p>
                </section>

                {/* Focus Area */}
                <section>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Right now, I’m focused on:</h2>
                    <ul className='list-disc list-inside space-y-2 ml-2'>
                        <li>Writing clean and reusable React components</li>
                        <li>Understanding JavaScript concepts deeply (closures, async, state)</li>
                        <li>Building real-world projects instead of demo apps</li>
                        <li>Improving my UI structure using Tailwind CSS</li>
                        <li>Learning how frontend connects with backend APIs and MongoDB</li>
                    </ul>
                </section>

                {/* Approach */}
                <section>
                    <h2 className='text-2xl font-semibold text-white mb-4'>How I Build</h2>
                    <p className='mb-4'>When I build a project, I usually follow a simple approach:</p>
                    <ol className='list-decimal list-inside space-y-2 ml-2'>
                        <li>Start with a basic UI and layout</li>
                        <li>Break the UI into small reusable components</li>
                        <li>Add state and interactions step by step</li>
                        <li>Connect APIs and handle loading or errors</li>
                        <li>Refactor code to keep it clean and readable</li>
                    </ol>
                    <p className='mt-4 italic text-gray-400'>
                        I prefer understanding why something works instead of blindly copying solutions.
                    </p>
                </section>

                {/* Details */}
                <section className='bg-white/5 border border-white/10 p-6 rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Location</span>
                            <span className="text-white">Chennai, India 📍</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Open to</span>
                            <span className="text-white">Junior roles, Internships, Freelance 💼</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Primary Tech</span>
                            <span className="text-white">React, Next.js, Tailwind CSS 🛠</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Learning</span>
                            <span className="text-white">Advanced JS & Backend Basics 📚</span>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section>
                    <p className='leading-relaxed'>
                        If you’d like to collaborate or know more about my work, feel free to check out my <a href="/projects" className="text-blue-400 hover:underline">projects</a> or <a href="/contact" className="text-blue-400 hover:underline">get in touch</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}