'use client'
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'

function Slider({sliderList}) {
    return (
        <Carousel>
            <CarouselContent>
                {sliderList?.map((slide) => {
                    return ( 
                        <CarouselItem key={slide.id}>
                            <Image src={slide.acf.slide_image} width={1000} height={500} alt='slider' className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl' />
                        </CarouselItem>
                    )
                })}            
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Slider