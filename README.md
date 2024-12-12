This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

'use client'
import React, { useState } from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import Button from '../ui/Button';
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-between items-center py-4 px-6'>
      {/* Logo Section */}
      <div>
        <Logo />
      </div>

      {/* Inline Links for Medium and Larger Screens */}
      <nav className='hidden md:flex gap-4  space-x-6'>
        <Link href="/" className="text-sm text-gray-800 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-sm text-gray-800 hover:text-blue-500">
          About
        </Link>
        <Link href="/contact" className="text-sm text-gray-800  hover:text-blue-500">
          Contact
        </Link>
        <Button label='Hire Now' />
      </nav>

      {/* Hamburger Menu Button for Small Screens */}
      <div className='md:hidden'>
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block transform transition-transform
              `}
            ><IoMdMenu onClick={toggleMenu} size={30}/></span>
          </div>
        </button>
      </div>
      

      <div
        className={`absolute top-14 right-4 bg-white shadow-md rounded-md h-[1000px] w-[300px] p-4 space-y-2 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Home
        </Link>
        <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          About
        </Link>
        <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Contact
        </Link>
        <Button label="Hire now" />
      </div>
    </div>
  );
};

export default Header;
