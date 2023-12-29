"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import Button from '@mui/material/Button';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='flex gap-5'>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width={40} height={40} />
              </a>
            </li>
            {/* <li>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width={40} height={40} />
              </a>
            </li> */}
          </ul>
          
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>
                <img src="https://www.iku.edu.tr/sagbanner/logo/logofooter.png" alt="Free Code Camp Logo Transparent@pngkey.com" width={100} height={100} />
                </li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='flex gap-5'>
                <li>
                    <img src="https://fcccolumbus.com/free-code-camp-logo.svg" alt="Free Code Camp Logo Transparent@pngkey.com" width={60} height={60} />
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Linux_Kullan%C4%B1c%C4%B1lar%C4%B1_Derne%C4%9Fi_Logosu.svg" alt="Free Code Camp Logo Transparent@pngkey.com" width={80} height={80} />
                </li>
              
            </ul>
        )
    }
]

function AboutSection() {
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition( () => {
            setTab(id);
        })
    }

  return (
    <section className="text-white">
        
        
          
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/hero/eren-tin-php-photo-new.jpg" className='rounded-lg' width={500} height={400}/>
       

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-md'>
                    I am a graduate with a bachelor's degree in Mathematics and Computer Science from Istanbul Kültür University. Commencing my career as a frontend intern, I discovered my potential for growth, ultimately assuming the role of a Junior Backend Developer at a prominent software company.
                    <br /> <br />
                    Proficient in PHP, Laravel, Livewire, Tailwind, React, and JavaScript, I actively contribute to a diverse range of projects including web applications, B2B solutions, and e-commerce platforms. 
                </p>

                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={ () => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                    <TabButton selectTab={ () => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                    <TabButton selectTab={ () => handleTabChange("certification")} active={tab === "certification"}> Certifications </TabButton>
              
                </div>

                <div className='mt-8'>  {TAB_DATA.find( (data) => data.id === tab).content}

                </div>


            </div>
        </div>

    </section>
  )
}

export default AboutSection