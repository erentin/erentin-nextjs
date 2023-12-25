"use client";
import { useState, useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    const [opacity, setOpacity] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleDownload = () => {
        // Tarayıcıda dosyayı indirmek için bir bağlantı oluşturuluyor ve tıklanıyor.
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'eren-tin-cv.pdf'; // İndirilen dosyanın adını belirleyebilirsiniz.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      useEffect(() => {
        const interval = setInterval(() => {
          // Opaklık değerini 0.1 birim artır veya azalt
          setOpacity((prevOpacity) => {
            if (prevOpacity >= 1) {
              setDirection(-1);
            } else if (prevOpacity <= 0.1) {
              setDirection(1);
            }
            return prevOpacity + direction * 0.1;
          });
        }, 100); // Her 0.5 saniyede bir opaklık değiri değiştir
    
        return () => clearInterval(interval); // Component unmount olduğunda interval'ı temizle
      }, [direction]);

      const gradientStyle = {
        background: `linear-gradient(to right, rgba(255, 0, 0, ${opacity}), rgba(0, 0, 255, ${1 - opacity})`,
      };


  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white text-4xl lg:text-6xl font-extrabold py-4'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 mb-4'>Hello, Im </span><br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Eren Tin.',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer.',
                            1000,
                            'PHP Developer.',
                            1000,
                            'Laravel Developer.',
                            1000,
                            'Backend Engineer.',
                            1000,
                            'A Coding Enthusiast.',
                            1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg  lg:text-xl mb-6'>
                        I hold a bachelors degree in Mathematics and Computer Science. 
                        <br />
                        My proficiency includes PHP, Laravel, Livewire, Tailwind, React.js, and JavaScript.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-r from-red-400 to-blue-600 hover:bg-slate-200  text-white font-semibold'>Hire Me!</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mb-4 bg-transparent bg-gradient-to-r from-blue-400 to-red-600  text-white' 
                    onClick={handleDownload}>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    
                    </button>
                </div>
            </div>
            <div className="col-span-5 rounded-full place-self-center mt-4 lg:mt-0 bg-white p-[0.5px]" style={gradientStyle}>
                <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative '>
                    <Image 
                        src="/images/hero/eren-memoji-png.png"
                        alt='Eren Tin Memoji Image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={250}
                        height={250}
                    />
                </div>
            </div>

        </div>
       
    </section>
  )
}

export default HeroSection