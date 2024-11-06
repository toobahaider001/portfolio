import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCode } from 'react-icons/fa'
import SkillCard from '../ui/SkillCard'
import { CgWebsite } from 'react-icons/cg'
import { SiReact, SiTailwindcss } from 'react-icons/si'

const Services = () => {
  return (
    <div className='flex flex-col gap-8 items-center w-full py-20'>
        {/* text */}
        <div className='text-center'>
            <div className='uppercase text-blue-600 tracking-tighter font-semibold text-xs'>Services</div>
            <div className='text-2xl md:text-4xl font-bold tracking-tighter'>Exploring My Development <span className='text-blue-600'>Skills</span></div>
            <div className='text-xs md:text-sm tracking-tighter'>We transform your website designs into scalable, maintainable and real world web application.</div>
        </div>
        {/* functioning */}
        <div className='w-full flex justify-end items-center'>
            <div className='md:flex hidden items-center gap-4'>
                <div className='p-2 rounded-full border-[0.2px] border-blue-600 cursor-pointer'><FaArrowLeft size={25} color='#0077ff'/></div>
                <div className='p-2 rounded-full border-[0.2px] border-blue-600 cursor-pointer bg-blue-600 text-white'><FaArrowRight size={25} color='#fff'/></div>
            </div>
        </div>
        {/* cards */}
        <div className='grid md:grid-cols-4 gap-5'>
        <SkillCard 
            icon={<CgWebsite size={45} color='#0077ff'/>}
            text={"Website/App Design UX UI Design"}
            exp={"Creating Engaging Digital Experiences For Websites And Apps through UX/UI Design "}
            button={"Learn More "}
        />
        <SkillCard 
            icon={<FaCode size={45} color='#00cc88'/>}
            text={"Frontend Development"}
            exp={"Building Responsive and Interactive Websites with HTML, CSS, and JavaScript"}
            button={"Explore Projects"}
        />
        <SkillCard 
            icon={<SiReact size={45} color='#61dafb'/>}
            text={"React Development"}
            exp={"Developing Dynamic User Interfaces and SPAs using React.js"}
            button={"See Work"}
        />
        <SkillCard 
            icon={<SiTailwindcss size={45} color='#38b2ac'/>}
            text={"Tailwind CSS"}
            exp={"Creating Styled and Responsive Layouts with Tailwind CSS"}
            button={"Learn More"}
        />
        </div>
    </div>
  )
}

export default Services