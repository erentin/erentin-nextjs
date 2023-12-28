import React from 'react'
import BrandSection from '../components/BrandSection'
import Navbar from '../components/Navbar'

function page() {
  return (
    <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
      <div className='container mx-auto px-12 py-4 mt-[0px] sm:mt-[92px]'>
        <Navbar />
        <BrandSection />
      </div>
    </main>
  )
}

export default page