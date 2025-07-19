import Image from 'next/image'
import React from 'react'
import leaf from '@/assets/header/rotate-leaf.png'
const OurFreshProducts = () => {
  return (
    <div>
        {/* leaf image  for decoration*/}
        <div className='flex justify-between'>
            <div className='lg:ml-32 lg:mt-24'><Image src={leaf} alt='decoration with green leaf' width={100} height={100} className='rotate-145'/></div>
            <div className='lg:mr-52 mt-8'><Image src={leaf} alt='decoration with green leaf' width={100} height={100} className='rotate-90'/></div>
        </div>
        {/* title for fresh product container  */}
        <div className='w-fit px-10 py-6 mx-auto text-center'>
            <p className='text-[#749b3f] text-sm font-medium '>Our Products</p>
            <h1 className='text-5xl font-medium my-5'>Our Fresh Products</h1>
            <p className='max-w-xl'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
            <div>
                <button className='border-1 border-gray-300 shadow-lg lg:mx-4 px-4 py-1.5 rounded-md'>All</button>
                <button className='border-1 border-gray-300 shadow-lg lg:mx-4 px-4 py-1.5 rounded-md'>Fruits</button>
                <button>Vegetables</button>
                <button>Salad</button>
            </div>
        </div>
    </div>
  )
}

export default OurFreshProducts