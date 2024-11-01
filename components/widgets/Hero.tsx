import React from 'react'
import Button from '../ui/Button'
import SkillScore from '../ui/SkillScore'

const Hero = () => {
  return (
    <div className='flex justify-between w-full py-20'>
        <div className='w-1/2 flex flex-col gap-2'>
            <div className='font-semibold text-black'>Welcome to my Portfolio</div>
            <div className='text-6xl font-bold tracking-tighter leading-16'>Hi     I'am <br /><span className='text-blue-600'>Tooba Haider</span><br />Frontend developer</div>
            <div className='tracking-tight'>Collaborating with highly skilled individuals, <br />I delivers top-quality services.</div>
            <div className='flex gap-5'>
                <Button
                    label='Hire Me!'
                 />
                <Button
                    label='Download CV'
                    secondary
                />
            </div>
        </div>
        <div className='w-1/2'></div>
    </div>
  )
}

export default Hero