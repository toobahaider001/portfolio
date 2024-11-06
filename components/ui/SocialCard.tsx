import React from 'react'
interface Socail{
    icon:any;
    text:string
}
const SocialCard:React.FC<Socail> = ({
    icon,
    text
}) => {
  return (
    <div className='flex flex-col hover:scale-125 transition-transform cursor-pointer justify-between items-center gap-4 rounded-2xl py-5 px-5 w-[250px] md:w-[260px] border-[0.9px] border-zinc-600/20'>
        <div >{icon}</div>
        <div className='text-2xl'>{text}</div>

    </div>
  )
}

export default SocialCard