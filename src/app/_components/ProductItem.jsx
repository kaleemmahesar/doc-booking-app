'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
    return (
        <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out'>
            {product.acf.product_image && <Image src={product.acf.product_image} width={500} height={200} alt='product item' className='w-full h-[200px] object-cover' /> }
            <h2>{product.title.rendered}</h2>
            <div className='flex gap-2'>
                <h2 className='font-bold'>Rs. {product.acf.sale_price}</h2>
                <h2 className={`font-bold ${product.acf.regular_price && 'line-through'} `}>Rs. {product.acf.regular_price}</h2>
            </div>
            <Button variant="outline" className="text-primary font-bold hover:text-white hover:bg-primary">Add to Cart</Button>
        </div>
    )
}

export default ProductItem