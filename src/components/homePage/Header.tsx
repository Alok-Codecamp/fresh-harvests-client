import React from 'react'
import Navbar from '../shared/Navbar'
import Image from 'next/image'
import rotateLeaf from '@/assets/header/rotate-leaf.png'
import girl from '@/assets/header/header-banner-girl.png'
import mobileGirl from '@/assets/header/croped-girl.png'
import arrow from '@/assets/header/arrow.png'
import plate from '@/assets/header/header-banner-plate.png'
import playStore from '@/assets/header/playStore.png'
import appleStore from '@/assets/header/apple-store.png'

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-[#f6f6f6] from-70% to-[#749b3f] to-70% lg:bg-gradient-to-r lg:from-[#f6f6f6] lg:from-74% lg:to-[#749b3f] lg:to-74%'>
      <Navbar />
      <div className='mt-8 md:flex justify-between'>
        <div className='md:flex'>
          <div className='hidden md:block'><Image src={rotateLeaf} alt='leaf' width={150} height={150} className='-ml-10 ' /></div>
          <div className='lg:mt-16 mx-4'>
            <h4 className='bg-[#ebefe5] px-2 text-[#749b3f] text-md lg:text-lg font-medium my-6 w-fit'>Welcome to Fresh Harvests</h4>
            <div className='w-fit ml-24 -mt-[44px] md:hidden'><Image src={rotateLeaf} alt='leaf' width={70} height={70} className='rotate-90' /></div>
            <h1 className='text-gray-800 text-5xl lg:text-7xl font-medium -mt-6 relative z-0 md:max-w-xl'>Fresh Fruits and  Vegitables</h1>
            <p className='text-xs font-light md:max-w-sm lg:max-w-[420px] mt-4'>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <button className='bg-[#ff6a19] text-white w-28 lg:w-36 h-12 rounded-sm mt-8'>Shop Now</button>
            <div className='flex lg:justify-center'>
              <div className='hidden md:block'><Image src={arrow} alt='arrow' width={70} height={70} /></div>
              <div className='bg-[#ebebeb] flex justify-evenly items-center h-fit mt-6'>
                <div className='min-w-30'>
                  <h2 className='text-[#176d38] text-sm  lg:font-medium'>Special Offer</h2>
                  <h2 className='text-md lg:text-xl font-medium'>Fresh Salad</h2>
                  <div><span className='text-[#176d38]'>Up to</span><span className='text-md lg:text-xl border-t-1 border-b-1 border-orange-700 rounded-br-4xl rounded-tl-4xl'>70%</span><span>off</span></div>
                  <div className='w-fit px-2 lg:px-6 py-0.5 bg-[#176d38] rounded-4xl mt-2 text-[12px] lg:text-[14px]'><span className='text-white'>Code:</span> <span className='text-yellow-500'>Fresh25</span></div>
                </div>
                <div><Image src={plate} alt='plate' width={80} height={80} /></div>
              </div>
            </div>
            <div className='mt-20 lg:mt-4'>
              <p className='text-sm font-light'>Download app</p>
              <div className='flex items-center absolute z-0'>
                <Image src={appleStore} alt='appleStore' width={120} height={120} className='mr-4' />
                <Image src={playStore} alt='playStore' width={120} height={120} className='ml-4' />
              </div>
            </div>
          </div>

          <div className='hidden md:block mt-16 ml-20'><Image src={rotateLeaf} alt='leaf' width={50} height={50} className='rotate-90 ' /></div>
        </div>
        <div>
          <div className='hidden lg:block mt-10 mr-16'>
            <Image src={girl} alt='girl' width={550} height={500} />
          </div>
          <div className='hidden  md:block lg:hidden mt-52'>
            <Image src={girl} alt='girl' width={550} height={550} />
          </div>
          <div className='md:hidden -mt-68'>
            <Image src={mobileGirl} alt='girl' width={200} height={200} className='ml-auto'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header