import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Container } from 'postcss'
import Navbar from './components/Navbar'
import Achievements from './components/Achievements'

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
      <div className='container mx-auto px-12 py-4 mt-[92px] sm:mt-[0px]'>
        <Navbar/>
        <HeroSection/>
        <Achievements />
      </div>
    </main>
  )
}
