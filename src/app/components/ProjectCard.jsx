/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectCard({imgUrl, title, description}) {
  return (
    <div className='grid lg:grid-cols-2 h-70'>

        <div className='h-70'
            style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
        </div>

        <div className='grid gap-5 text-white rounded-b-sl bg-[#181818] p-8'>
            <h5 className='font-xl font-semibold'>
                {title}
            </h5>
            <Link href="https://flowbite.com">https://flowbite.com</Link>
            <p className='text-[#ADB7BE]'>{description}</p>

            <div>
              <ul className='flex gap-5'>
                  <li>
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={20} height={20} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={20} height={20} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width={20} height={20} />
                    </Link>
                  </li>
                </ul>
            </div>

        </div>

       

    </div>
  )
}

export default ProjectCard