import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:block hidden">
      {/* Hamburger Icon */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <span
            className={`block h-0.5 w-6 bg-black transform transition-transform ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transform transition-transform ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </button>

      {/* Menu Items */}
      <div
        className={`absolute top-10 right-0 bg-white shadow-md rounded-md w-48 p-4 space-y-2 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Contact
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
{/* <div className='text-sm md:block hidden space-x-5'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
        <div> 
          <div className='md:block hidden'>
            <Button
                label="Let's chat"
             />
             </div> */}