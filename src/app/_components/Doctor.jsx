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

function Doctor({doctor, locale}) {
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
        <div className='flex w-full rounded-md p-6 bg-white shadow-lg items-start'>
            <Link href={`/${locale}/doctors/profile/${doctor.id}`}><Image src={doctor.image_url}  width={115} height={115} alt='doc' className='mt-5 rounded-full' /></Link>
            <Card className={`border-0 p-0 flex flex-col shadow-none ${locale === 'en' ? 'ml-6 mr-20' : 'mr-6 ml-20'}`}>
                <CardHeader className="p-0 flex flex-row gap-5">
                    <div className='mt-8 flex gap-y-1 flex-col justify-between'>
                        <CardTitle className='text-3xl mb-2 font-bold'><Link href={`/${locale}/doctors/profile/${doctor.id}`}>{doctor.label}</Link></CardTitle>
                        <p className='text-lg'>{doctor.speciality}</p>
                        <p className='text-lg'>21 Years of Experience</p>
                    </div>
                </CardHeader>
            </Card>
            <div className='flex flex-col'>
                <h2 className='mb-5 font-bold text-2xl'>Specializations</h2>
                <div className='gap-2 flex w-96 flex-wrap mb-8'>
                    { doctor?.practical_experience?.map(person => <Button type="button" variant="secondary" className='font-bold py-0 px-3'>{person}</Button>) }
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="button" className='w-full text-lg p-6 rounded-md'>Book Now</Button>
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
            <div className='flex flex-col gap-5 mt-6'>
                
            </div>
        </div>
    )
}

export default Doctor