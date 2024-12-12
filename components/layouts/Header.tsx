'use client'
import React, { useState } from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import Button from '../ui/Button'
import { IoMdMenu } from 'react-icons/io'

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = ()=>{
    SetIsOpen(!isOpen);
  }
  return (
    <div className='flex gap-5 justify-between p-4'>
      {/* logo */}
      <div><Logo /></div>
      <div className=' gap-6 hidden md:block'>
        <Link href={"/"}> Home</Link>
        <Link href={"/about"}> About</Link>
        <Link href={"/contact"}> Contact</Link>
        <Button label='Sign in' />
      </div>
      <div className='md:hidden'>
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block transform transition-transform
              `}
            ><IoMdMenu onClick={toggleMenu} size={30}/></span>
          </div>
        </button>
      </div>
      
      </div>
  )
}
