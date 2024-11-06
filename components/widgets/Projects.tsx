import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import SaasImage from "@/public/saas.png"
import EduImg from "@/public/edu.png"
import PanaverseImg from "@/public/panImg.png"
import ElernImg from "@/public/elern.png"
import LinearImg from "@/public/linear.png"
import PortfolioImg from "@/public/portfolio.png"
const Projects = () => {
  return (
    <div className='flex flex-col items-center w-full py-20'>
        {/* text */}
        <div className='flex flex-col text-center gap-4'>
            <div className='uppercase text-blue-600 tracking-tighter font-semibold text-xs'>our projects</div>
            <div className='text-xl md:text-4xl font-bold tracking-tighter'>Presenting My Design Portfolio <br /> And Case Studies</div>
            <div className='grid grid-cols-2 md: gap-4  '>
                <Button label='   All' />
                <Button label='UI/UX Design' secondary/>
                <Button label='Branding Designs' secondary/>
                <Button label='Word Press' secondary/>
            </div>
        </div>
        {/* images */}
        <div className='w-full grid md:grid-cols-3 gap-6 py-20'>
            <div>
                <Image 
                src={SaasImage}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
            <div>
            <Image 
                src={EduImg}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
            <div>
            <Image 
                src={PanaverseImg}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
            <div>
            <Image 
                src={ElernImg}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
            <div>
            <Image 
                src={LinearImg}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
            <div>
            <Image 
                src={PortfolioImg}
                alt=''
                className='h-[200px] w-[300px] rounded-xl'/>
            </div>
        </div>
          
           
        </div>
  )
}

export default Projects