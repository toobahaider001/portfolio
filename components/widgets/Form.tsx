import React from 'react'

const Form = () => {
  return (
    <div className='w-full md:py-20 flex flex-col py-20 items-center gap-6'>
        <div className='md:text-6xl font-bold  justify-center flex'>Get in Touch</div>
        <div className=''>
            <div className='md:flex justify-center md:gap-7'>
            <div className='w-full '>
                <input type="text" placeholder='First Name' className='border-[0.5px] text-xs md:text-lg rounded-lg  placeholder:text-zinc-600 border-zinc-600/50 w-full text-black px-4 py-2' />
            </div>
            <div className='py-4 md:py-0'> <input type="text" placeholder='Last Name' className='border-[0.5px] text-xs md:text-lg rounded-lg  placeholder:text-zinc-600 border-zinc-600/50 text-black px-4 py-2' /></div>
        </div>
            <div className='py-4'>
            <input type="text" placeholder='Email' className='border-[0.5px] w-full rounded-lg text-xs md:text-lg  placeholder:text-zinc-600 border-zinc-600/50 text-black px-4 py-2' />
            </div>
            <div className='py-4'>
            <textarea placeholder='Let me know how I can help you...' className='border-[0.5px] text-xs md:text-lg rounded-lg md:h-[10vw]  w-full placeholder:text-zinc-600 border-zinc-600/50 text-black px-4 py-2' />
            </div>
        </div>
    </div>
  )
}

export default Form