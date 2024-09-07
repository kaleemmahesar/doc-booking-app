import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from 'next/image'

function Doctor({doctor}) {
    return (
        <Card className={cn("w-[360px]")}>
            <CardHeader className="flex">
                <Image src={doctor.image_url}  width={100} height={100} alt='doc' className='rounded-full' />
                <div className='mt-8'>
                    <CardTitle>{doctor.label}</CardTitle>
                    <CardDescription>{doctor.speciality}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p>{doctor.hospital_name}</p>
            </CardContent>
            <CardFooter>
                <p>{doctor.city}</p>
            </CardFooter>
        </Card>
    )
}

export default Doctor