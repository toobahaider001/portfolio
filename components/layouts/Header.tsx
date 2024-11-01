import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import Button from '../ui/Button'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center py-4'>
        <div>
            <Logo />
        </div>
        <div className='text-sm  space-x-5'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
            <Button
                label="Let's chat"
             />
        </div>
    </div>
  )
}

export default Header