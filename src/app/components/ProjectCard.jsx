import React from 'react'

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
            <a href="https://flowbite.com">https://flowbite.com</a>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>

    </div>
  )
}

export default ProjectCard