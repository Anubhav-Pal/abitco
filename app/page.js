import CreatorSection from '@/components/CreatorSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <CreatorSection/>
      <Footer/>
    </div>
  )
}

export default page