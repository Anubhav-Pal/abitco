import Image from 'next/image'
import React from 'react'
import herosection from '../public/assets/herosection.svg'
import band from '../public/assets/band.svg'
import dan from '../public/assets/dan.svg'

const HeroSection = () => {
    return (
        <div className=''>
            <div className=''>
                <Image src={herosection} className='herosection-img bg-bottom bg-cover w-full' />
            </div>
            <div>
                <Image src={band} className='bg-bottom	' />
            </div>
        </div>
    )
}

export default HeroSection