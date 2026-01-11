import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-center items-center'>
            <h1>© {new Date().getFullYear()} Mohan - Build with Next.js</h1>
        </div>
    </footer>
  )
}

export default Footer