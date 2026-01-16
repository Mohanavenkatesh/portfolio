import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='fixed top-3 w-full '>
            <nav className='max-w-120 mx-auto px-5'>
                <div className=' bg-white/10 backdrop-blur-md border border-white/10 rounded-full md:px-4 px-2 py-2'>
                    <ul className='flex items-center justify-center gap-10'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/projects'>Projects</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header