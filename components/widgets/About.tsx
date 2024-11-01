import React from 'react'
import Button from '../ui/Button'
import SkillScore from '../ui/SkillScore'

const About = () => {
  return (
    <div className='flex justify-between w-full py-20'>
        <div className='w-1/2'></div>
        <div className='w-1/2 flex flex-col gap-2'>
            <div className='uppercase text-blue-600 tracking-tighter font-semibold text-xs'>About me</div>
            <div className='text-4xl font-bold tracking-tighter '> <span className='text-blue-600'>06 Month's Experience</span> <br />on Frontend Development. </div>
            <div className='text-sm tracking-tighter'>I'm a skilled Frontend Developer focused on creating clean, responsive interfaces with HTML, CSS, JavaScript, and React. I am passionate about building intuitive and engaging user experiences.</div>
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