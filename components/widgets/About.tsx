import React from 'react'
import Button from '../ui/Button'
import SkillScore from '../ui/SkillScore'
import Image from 'next/image'
import AboutImage from "@/public/About.jpg"

const About = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between w-full md:py-20'>
        <div className='md:w-1/2 w-full'>
            <Image
                alt=''
                src={AboutImage}
                height={400}
                width={400}
             />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-2'>
            <div className='uppercase text-blue-600 tracking-tighter font-semibold text-xs'>About me</div>
            <div className='text-2xl md:text-4xl font-bold tracking-tighter '> <span className='text-blue-600'>06 Month's Experience</span> <br />on Frontend Development. </div>
            <div className='text-xs md:text-sm tracking-tighter'>I'm a skilled Frontend Developer focused on creating clean, responsive interfaces with HTML, CSS, JavaScript, and React. I am passionate about building intuitive and engaging user experiences.</div>
            <div className='flex gap-5'>
                <Button
                    label='Main Skills'
                 />
                <Button
                    label='Download CV'
                    secondary
                />
            </div>
            <div className='flex flex-col gap-4'>
                <SkillScore
                    title='Designing Skills'
                    score={80}
                 />
                <SkillScore
                    title='Code Management'
                    score={95}
                />
                <SkillScore
                    title='React Concepts'
                    score={75}
                />
            </div>
        </div>
    </div>
  )
}

export default About