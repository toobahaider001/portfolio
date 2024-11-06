import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import HeroImage from '@/public/Hero.jpg'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center w-full md:pt-3 md:pb-20 py-10'>
        <div className='md:w-1/2 w-full flex flex-col gap-2'>
            <div className='font-semibold text-black text-xs md:text-lg'>Welcome to my Portfolio</div>
            <div className='text-2xl md:text-6xl font-bold tracking-tighter leading-16'>Hi     I'am <br /><span className='text-blue-600'>Tooba Haider</span><br />Frontend developer</div>
            <div className=' text-xs md:text-lg tracking-tight'>Collaborating with highly skilled individuals, <br />I delivers top-quality services.</div>
            <div className='flex gap-5 '>
                <Button
                    label='Hire Me!'
                 />
                <Button
                    label='Download CV'
                    secondary
                />
            </div>
        </div>
        <div className='md:w-1/2 w-full'>
            <Image
                alt=''
                src={HeroImage}
                height={500}
                width={500}
             />
        </div>
    </div>
  )
}

export default Hero