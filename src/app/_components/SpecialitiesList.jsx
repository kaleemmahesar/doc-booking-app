'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function SpecialitiesList({specializations}) {
    const drspecialization = specializations.specialization
    const pathname = usePathname()
    const handleClick = () => {
        console.log('works')
    }
    return (
        <div className='ps-grid py-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-3xl font-bold mb-6'>Consult best doctors online</h2>
                    <Button variant="outline" onClick={()=>handleClick()}>View All</Button>
                </div>
                <div className='flex text-center flex-wrap gap-4'>
                    {drspecialization.map((drspeciali) => {
                        return (
                            <div className='border rounded-md border-gray-200 pt-4 pb-4 w-1/6'>
                                <Link href={`${pathname}/search?specialization=${drspeciali.value}`} className='flex justify-start items-center flex-col rounded-full'>
                                    <Image src={drspeciali.image_url} className='rounded-full mb-2' alt='specialities image' width={100} height={100} />
                                    <h2 className='text-sm flex justify-center'>{drspeciali.label}</h2>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SpecialitiesList