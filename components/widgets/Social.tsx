import React from 'react'
import SocialCard from '../ui/SocialCard'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'

const Social = () => {
  return (
    <div className='py-20 flex flex-col items-center'>
        <div className='text-2xl md:text-5xl font-bold'>Social Activities</div>
        <div className='  md:flex-row flex-col flex justify-center gap-5 py-7 '>
            <SocialCard 
            icon={<FaLinkedin size={50} color='#0077ff'/>}
            text={"Linkedin"}/>
             <SocialCard
            icon={<FaGithub size={50} color='#000'/>}
            text={"Github"}/>
             <SocialCard 
            icon={<FaThreads size={50} color='#000'/>}
            text={"Linkedin"}/>
             <SocialCard 
            icon={<FaTwitter size={50} color='#000'/>}
            text={"Linkedin"}/>
        </div>
    </div>
  )
}

export default Social