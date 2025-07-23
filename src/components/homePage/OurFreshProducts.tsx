"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import leaf from '@/assets/header/rotate-leaf.png'
import { useGetAllProductQuery } from '@/redux/rtkQfeatures/products/ProductsApi'
import { Product } from '@/types/product.type'
import { Button } from '../ui/button'
import { useGetAllCategoryQuery } from '@/redux/rtkQfeatures/category/categoryApi'
import { Category } from '@/types/category.types'
const OurFreshProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProduct,setActiveCart] = useState<string>('banana')
  const [filteredProducts,setFilteredProducts] = useState<Product[]>([])
  const categories = ['All', 'fruits', 'Vegetable', 'Salad'];

  const {data:productCategories} = useGetAllCategoryQuery([]);
  const {data:products,isLoading} = useGetAllProductQuery([])
  // console.log(productCategories?.data);

  const handleFilter = (category:string)=>{
    setActiveCategory(category)
    if(category==='All'){
      setFilteredProducts(products?.data)
    }
    else{
      const selectedCategory = productCategories?.data.find((cat:Category)=>category===cat.categoryName)
      const filteredItems = products?.data?.filter((product:Product)=>product.categoryId===selectedCategory.id)
      
      setFilteredProducts(filteredItems)
    }
    
  }
console.log(filteredProducts)
  return (
    <div>
      {/* leaf image  for decoration*/}
      <div className='flex justify-between'>
        <div className='lg:ml-32 lg:mt-24'><Image src={leaf} alt='decoration with green leaf' width={100} height={100} className='rotate-145' /></div>
        <div className='lg:mr-52 mt-8'><Image src={leaf} alt='decoration with green leaf' width={100} height={100} className='rotate-90' /></div>
      </div>
      {/* title for fresh product container  */}
      <div className='w-fit px-10 py-6 mx-auto text-center'>
        <p className='text-[#749b3f] text-sm font-medium '>Our Products</p>
        <h1 className='text-5xl font-medium my-5'>Our Fresh Products</h1>
        <p className='max-w-xl'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
        <div className='my-4'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`border border-gray-300 shadow-lg mx-1 lg:mx-4 px-1.5 lg:px-4 py-1 lg:py-1.5 rounded-md 
            ${activeCategory === category ? 'bg-[#749b3f] text-white' : 'bg-white text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* our fresh product  */}
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mx-auto'>
        {
        filteredProducts?.map((product:Product,idx:number)=>(
          <div key={idx} className=' mx-6 lg:mx-10 my-10'>
        {/* image container  */}
        <div className='w-fit mx-auto h-32'>
          <Image src={product?.images[0]} alt={product?.productName} width={100} height={100}/>
        </div>
        <div className='text-center'>
          <h1>{product?.productName}</h1>
          <h2 className='text-gray-600'>${product?.price}/kg</h2>
          <Button onClick={()=>setActiveCart(product?.productName)} className={`${activeProduct===product?.productName?'bg-[#ff6a19] text-gray-100':'bg-gray-100 text-gray-900'} hover:bg-[#ff6a19] w-full cursor-pointer`}>Add to cart</Button>
        </div>
        
      </div>
        ))
      }
      </div>
      <div className='text-center'>
        <Button className='bg-gray-200 border border-[#ff6a19] text-[#ff6a19]'>See All Products</Button>
      </div>
    </div>
  )
}

export default OurFreshProducts