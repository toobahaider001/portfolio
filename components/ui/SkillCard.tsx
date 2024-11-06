import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
interface SkillCardProps{
    icon:any,
    text:string,
    exp:string,
    button:string
}
const SkillCard:React.FC<SkillCardProps> = ({
    icon,
    text,
    exp,
    button
}) => {
  return (
    <div className='flex flex-col justify-between gap-4 rounded-2xl py-5 px-5 w-[250px] md:w-[260px] border-[0.9px] border-zinc-600/20'>
        <div className=''>{icon}</div>
        <div className='font-medium tracking-tighter leading-none'>{text}</div>
        <div className='text-xs md:text-sm font-light text-zinc-800 tracking-tighter leading-4'>{exp}</div>
        <div className='text-sm flex items-center gap-1 text-blue-600'>{button}<FaArrowRight size={15} color='#0077ff'/></div>
    </div>
  )
}

export default SkillCard