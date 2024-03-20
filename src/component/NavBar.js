import React from 'react'
import {Bars3Icon} from "@heroicons/react/16/solid";
import { FaBars, FaSearch ,FaBell, FaUserCircle} from 'react-icons/fa'
function NavBar() {
  return (
    <div className='w-[100%] bg-white'>
        <div className='flex w-[80%] mx-auto items-center justify-between h-[12vh]'>
            <div className='relative w-[70px] cursor-pointer h-[70px] lg:w-[100px] lg:h-[100px] object-contain'>
                <img src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg ' alt='logo'/>
            </div>
            <div className='flex items-center space-x-12'>
                <a href='#'className='nav-link'>Home</a>
                <a href='#'className='nav-link'>About</a>
                <a href='#' className='nav-link'>Course</a>
            
        <a href='#' className='relative hidden lg:inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-lime-600 rounded-lg group'>
            <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-600 rounded-full group-hover:w-56 group-hover:h-56'></span>
            <span className='absolute inswet-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-700'></span>
            <span className='relative'>Buy Now</span>
        </a>
        <Bars3Icon className='w-[2rem] lg:hidden h-[2rem] text-lime-600 font-bold'/>
        </div>
</div>    
    </div>
  )}
export default NavBar
