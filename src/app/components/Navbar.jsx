"use client";
import React, { useState, useEffect  } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const NavLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Clients",
        path: "clients"
    },
    {
        title: "About",
        path: "about"
    },
    {
        title: "Contact",
        path: "contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleResize = () => {
        // Sayfa çözünürlüğü değiştiğinde yapılacak işlemleri buraya ekleyin
        console.log('Sayfa çözünürlüğü değişti!');
      };

    useEffect(() => {
        // Component ilk render edildiğinde bir kere çalışacak olan kod
        handleResize();
    
        // window nesnesinin 'resize' olayını dinleyen event listener ekleniyor
        window.addEventListener('resize', handleResize);
    
        // Component unmount olduğunda event listener'ı temizle
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Bu etkileşim sadece bir kere gerçekleşir, sadece component ilk render olduğunda
    

  return (
    <nav className='fixed  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8 py-2'>
            <Link href={"/"} className='text-lg md:text-5xl text-white font-semibold'>
              
            </Link>

            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen 
                    ? 
                        (
                            <button onClick={() => setNavbarOpen(true)} className='flexitems-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        )
                    :
                        (
                            <button onClick={() => setNavbarOpen(false)} className='flexitems-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
                    {
                        NavLinks.map( (link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {
            navbarOpen ? 
            (
                <MenuOverlay links={NavLinks}/>
            )
            : null
        }
    </nav>
  )
}

export default Navbar