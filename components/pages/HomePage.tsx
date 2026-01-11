import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='p-5 text-center '>
        <h1 className='text-2xl'> Hi, I’m Mohan. </h1>
        <p>Frontend Developer </p>
        <h1 className='mt-10 text-2xl'>Skills</h1>
        <p>
          Tech I work with: <br />
        </p>

        <ul>
          <li>Frontend: HTML, CSS, JavaScript  </li>
          <li>Frameworks: React, Next.js  </li>
          <li>Styling: Tailwind CSS  </li>
          <li>Tools: Git, GitHub  </li>
          <li>Backend basics: APIs, MongoDB  </li>
        </ul>

        <h1 className='text-2xl mt-10'> Get in Touch </h1>
        <p>Interested in colloaborating or <br /> want to know more about my work ? <br /> feel free to contact me</p>
        <Link href='https://wa.me/7200470762' ><button className='bg-white text-black py-2 px-5 mt-10 cursor-pointer rounded-full'>Hire Me</button></Link>
      </div>
    </>
  )
}

export default HomePage