"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>education.js</li>
                <li>education</li>
                <li>education</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul>
                <li>certification.js</li>
                <li>certification</li>
                <li>certification</li>
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