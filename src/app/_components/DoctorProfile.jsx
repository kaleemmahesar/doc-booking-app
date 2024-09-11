'use client'
import React, { useRef, useState } from 'react'
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
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Link from 'next/link'
const formSchema = z.object({
    phone: z.string().min(13, {
        message: "Please provide a valid number.",
    }),
})

function DoctorProfile({doctor, locale}) {
    const [optSent, setOptSent] = useState(false)
    const optField = useRef(null)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: ''
        },
    })
    function onSubmit(values) {
        if(values.phone) {
            setOptSent(true)
        }
    }
    
    return (
        <div className='flex items-start justify-between'>
            <div className='flex items-start'>
                <Image src={doctor.image_url}  width={130} height={130} alt='doc' className='mt-5 rounded-full' />
                <Card className={`bg-transparent border-0 p-0 flex flex-col shadow-none ${locale === 'en' ? 'mr-auto ml-6' : 'ml-auto mr-6'}`}>
                    <CardHeader className="p-0 flex flex-row gap-5">
                        <div className='mt-8 flex gap-y-1 flex-col justify-between'>
                            <CardTitle className='text-2xl mb-3'>{doctor.label}</CardTitle>
                            <p className='text-lg'>{doctor.speciality}</p>
                            <p className='text-lg'>M.B.B.S., F.C.P.S. (Gynecology and Obstetrics)</p>
                            <p className='text-lg capitalize'>{doctor.city}</p>
                        </div>
                    </CardHeader>
                    <div className='mt-8 flex gap-y-1 flex-row gap-16'>
                        <h2 className='flex flex-col text-lg'>
                            <b>15 - 30 Min</b>
                            <span>Wait Time</span>
                        </h2>
                        <hr className='border-r mt-2 border-gray-200 h-[46px]' />
                        <h2 className='flex flex-col text-lg'>
                            <b>16 Years</b>
                            <span>Experience</span>
                        </h2>
                    </div>
                </Card>
            </div>
            <div className='flex flex-col gap-5 mt-6'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="button" className='w-48 text-lg p-6 rounded-md'>Book Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Please provide number to continue</DialogTitle>
                            <DialogDescription>
                                Make sure number is active. An OTP will be sent for verification.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <FormField
                                ref={optField}
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input className='bg-slate-100 w-full' placeholder="+91" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                {optSent &&
                                    <InputOTP maxLength={4}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} className='bg-slate-100' />
                                            <InputOTPSlot index={1} className='bg-slate-100' />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={2} className='bg-slate-100' />
                                            <InputOTPSlot index={3} className='bg-slate-100' />
                                        </InputOTPGroup>
                                    </InputOTP>
                                }
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                        
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default DoctorProfile