import React from 'react'
import logo from '../assets/logo.png'
import {AiOutlineSearch ,AiOutlineBell,AiOutlineDown , AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className="absolute flex justify-between w-full py-5 bg-transparent px-10 items-center z-10">
            <div className="cursor-pointer flex items-center">
                <img src={logo} alt="logo"  className="h-8" />
            </div>
            <ul className="font-[Inter] gap-5 lg:flex hidden ">
                <li className='cursor-pointer text-white text-lg '>Home</li>
                <li className='cursor-pointer text-white text-opacity-70 transition-all hover:text-opacity-100 text-lg'>Discover</li>
                <li className='cursor-pointer text-white text-opacity-70 transition-all hover:text-opacity-100 text-lg'>Movie Releases</li>
                <li className='cursor-pointer text-white text-opacity-70 transition-all hover:text-opacity-100 text-lg'>Forum</li>
                <li className='cursor-pointer text-white text-opacity-70 transition-all hover:text-opacity-100 text-lg'>About</li>
            </ul>
            <div className="flex gap-5 items-center">
                <AiOutlineSearch className="cursor-pointer text-white text-4xl" />
                <AiOutlineBell className="cursor-pointer text-white text-2xl lg:inline hidden" />
                <div className="cursor-pointer items-center gap-1 hidden lg:flex">
                    <MdOutlineAccountCircle className="text-white text-3xl" />
                    <AiOutlineDown className="text-white text-md" />
                </div>
                <AiOutlineMenu className="cursor-pointer text-white text-4xl lg:hidden" />
            </div>
        </nav>
    )
}

export default Navbar