"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/assets/logo/logo.png'
import Image from 'next/image'
import { Heart, Home, LogIn, Menu, Rss, ShoppingBag, ShoppingCart, Users } from 'lucide-react'
import Login from '../authentication/Login'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleDropdown=()=>setOpen(!open);
    
  return (
    <nav className="">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={logo} alt="Logo" width={160} height={100} />
    </Link>
    <div className='flex items-center justify-center'>
      
      <Link href="/cart" className='flex justify-center items-center md:hidden mx-1'> <ShoppingCart size={16} color='white'/> <span className='ml-1 text-[12px] text-white'>Cart</span></Link>
    
    <button onClick={handleDropdown} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <Menu size={16} color='white' fill='white' />
    </button>
    </div>
    <div className="hidden w-full md:block md:w-auto text-sm" id="navbar-default ">
      <ul className="text-gray-600 flex justify-center items-center">
         <li>
          <Link className='mx-2 lg:mx-6' href='/'>Home</Link>
        </li>
        <li>
          <Link className='mx-2 lg:mx-6' href='/shop'>Shop</Link>
        </li>
        <li>
          <Link className='mx-2 lg:mx-6' href="/about">About us</Link>
        </li>
        <li>
          <Link className='mx-2 lg:mx-6' href="/blog" >Blog</Link>
        </li>
      </ul>
    </div>
    <div className='hidden md:flex justify-center items-center  text-white text-sm lg:mr-14 '>
        <button className='flex items-center mx-1'> <Heart color='white' fill='white'/> <span className='lg:ml-1'>Favorite</span></button>
        <button className='flex items-center mx-1'> <ShoppingCart fill='white' color='white' /> <span className='lg:ml-1'>Cart</span></button>
        
        <div className='border-1 border-white mx-1 py-1.5 px-2 lg:px-4 rounded-sm'><Login/></div>
    </div>
  </div>
  {/* mobile menu  */}
   <div className={`md:hidden ${open?'block':'hidden'} bg-amber-50 w-40  ml-auto py-2 absolute right-0 z-10`}>
    
    <div className="md:hidden">
      <ul className="font-medium md:hidden pl-6">
        <li>
            <Link href="/home" className='flex items-center mx-1 my-3'> <Home color='black'/> <span className='ml-1'>Home</span></Link>
          </li>
        <li>
            <Link href="/shop" className='flex items-center mx-1 my-3'> <ShoppingBag color='black'/> <span className='ml-1'>Shop</span></Link>
          </li>
        <li>
            <Link href="/about-us" className='flex items-center mx-1 my-3'> <Users color='black'/> <span className='ml-1'>About us</span></Link>
          </li>
        <li>
            <Link href="/blog" className='flex items-center mx-1 my-3'> <Rss color='black' /> <span className='ml-1'>blog</span></Link>
          </li>
          <li>
            <Link href="/favorite" className='flex items-center mx-1 my-3'> <Heart color='black'/> <span className='ml-1'>Favorite</span></Link>
          </li>
          
          <li>
            <Link href="/sign-in" className='flex items-center mx-1 my-3'> <LogIn color='black'/> <span className='ml-1'>Sign in</span></Link>
          </li>
      </ul>
    </div>
   
  </div>
</nav>
  )
}

export default Navbar
