import React from 'react'
import Button from '../ui/Button'

const Footer = () => {
  return (
    <div className='w-full py-10 sm:py-16 lg:py-20 bg-blue-600'>
        {/* text */}
        <div className='text-center px-4'>
            <div className='uppercase font-light text-sm text-white'>contact me</div>
            <div className='text-lg sm:text-xl md:text-2xl font-bold text-white'>Request Free Consultancy</div>
        </div>
        {/* inputs */}
        <div className='flex flex-col md:flex-row justify-center gap-5 py-10 px-4'>
            {/* address */}
            <div className='w-full md:w-[300px] bg-white rounded-2xl py-6 px-5 text-center md:text-left'>
                <h6 className='text-xs font-bold'>Hotline 24/7</h6>
                <h6 className='text-xs font-bold'>+923237384</h6>
                <h4 className='text-xs font-bold pt-3'>Address:<span className='text-zinc-500'> 297 Gulshan-e-Iqbal</span></h4>
                <h4 className='text-xs font-bold'>Email:<span className='text-zinc-500'> abc@gmail.com</span></h4>
                <h4 className='text-xs font-bold'>Fax:<span className='text-zinc-500'>(702) 555-0212</span></h4>
                <h4 className='text-xs font-bold'>Work Hour:<span className='text-zinc-500'> Mon-Sat 9:00 -18:00</span></h4>
            </div>
            {/* input */}
            <div className='flex flex-col gap-4 w-full md:w-auto'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <input type="text" placeholder='Name' className='h-10 rounded-md text-xs px-3 border border-gray-300'/>
                    <input type="text" placeholder='Email Address' className='h-10 rounded-md text-xs px-3 border border-gray-300' />
                </div>
                <input type="text" placeholder='How can we help you?' className='h-10 w-full rounded-md text-xs px-3 border border-gray-300'/>
                <textarea placeholder='Your message here...' className='h-24 w-full py-3 text-xs rounded-md px-3 border border-gray-300' />
            </div>
        </div>
        {/* button */}
        <div className='flex justify-center px-4'>
            <button className='bg-blue-900 text-white text-xs h-10 w-32 rounded-md'>Request Now</button>
        </div>
    </div>
  )
}

export default Footer
