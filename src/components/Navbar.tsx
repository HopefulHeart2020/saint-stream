import React from 'react'
import logo from '../assets/logo.png'
import {AiOutlineSearch ,AiOutlineBell,AiOutlineDown} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className="absolute flex justify-between w-full py-5 bg-transparent px-10 items-center z-10">
            <div className="cursor-pointer flex items-center">
                <img src={logo} alt="logo"  />
            </div>
            <ul className="font-[Inter]  flex gap-5 ">
                <li className='cursor-pointer  text-white text-opacity-70 transition-all hover:text-white text-lg'>Home</li>
                <li className='cursor-pointer  text-white text-opacity-70 transition-all hover:text-white text-lg'>Discover</li>
                <li className='cursor-pointer  text-white text-opacity-70 transition-all hover:text-white text-lg'>Movie Releases</li>
                <li className='cursor-pointer  text-white text-opacity-70 transition-all hover:text-white text-lg'>Forum</li>
                <li className='cursor-pointer  text-white text-opacity-70 transition-all hover:text-white text-lg'>About</li>
            </ul>
            <div className="flex gap-5 items-center">
                <AiOutlineSearch className="cursor-pointer text-white text-2xl" />
                <AiOutlineBell className="cursor-pointer text-white text-2xl" />
                <div className="cursor-pointer flex items-center gap-1">
                    <MdOutlineAccountCircle className="text-white text-3xl" />
                    <AiOutlineDown className="text-white text-md" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar