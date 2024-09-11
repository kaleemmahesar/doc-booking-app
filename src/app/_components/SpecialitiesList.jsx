'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SpecialitiesList({specializations}) {
    const drspecialization = specializations.specialization
    const pathname = usePathname()
    const handleClick = () => {
        console.log('works')
    }
    return (
        <div className='ps-grid py-10'>
            <div className='container md:m-auto'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-3xl font-bold mb-6'>Consult best doctors online</h2>
                    <Button variant="outline" onClick={()=>handleClick()}>View All</Button>
                </div>
                <div className='grid grid-cols-9 gap-x-4 text-center'>
                    {drspecialization.map((drspeciali) => {
                        return (
                            <Link href={`${pathname}/search?specialization=${drspeciali.value}`} className='flex justify-start items-center flex-col rounded-full'>
                                <Image src={drspeciali.image_url} className='rounded-full mb-2 border-4 border-primary-500' alt='specialities image' width={100} height={100} />
                                <h2 className='text-lg'>{drspeciali.label}</h2>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SpecialitiesList