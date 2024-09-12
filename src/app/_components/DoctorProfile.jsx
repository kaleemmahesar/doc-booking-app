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
        <div className='doc-profile py-16 bg-slate-100'>
            <div className='container mx-auto flex items-start justify-between'>
                <div className='flex flex-col flex-auto w-64 gap-10'>
                    <div className='flex items-start bg-white p-8 rounded-md shadow-md mr-16'>
                        <Image src={doctor.image_url}  width={200} height={100} alt='doc' className='border-2' />
                        <Card className={`bg-transparent border-0 p-0 flex flex-col shadow-none ${locale === 'en' ? 'mr-14 ml-6' : 'mr-6 ml-6'}`}>
                            <CardHeader className="p-0 flex flex-row gap-5">
                                <div className='flex gap-y-1 flex-col justify-between'>
                                    <CardTitle className='text-3xl mb-3 font-bold'>{doctor.label}</CardTitle>
                                    <p className='text-xl'>{doctor.speciality}</p>
                                    <p className='text-xl'>21 Years of Experience</p>
                                </div>
                            </CardHeader>
                        </Card>
                        <div className='flex flex-col'>
                            <h2 className='mb-5 font-bold text-2xl'>Specializations</h2>
                            <div className='gap-2 flex w-96 flex-wrap mb-8'>
                                { doctor?.practical_experience?.map(person => <Button type="button" variant="secondary" className='font-bold py-0 px-3'>{person}</Button>) }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>About</h2>
                        <p>{doctor?.about}</p>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>Education</h2>
                        <ul className='list-disc px-12'>
                            { doctor?.education?.map(edu => <li className='list-disc mb-2'>{edu}</li>) }
                        </ul>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>Practical Experiences</h2>
                        <ul className='list-disc px-12'>
                            { doctor?.practical_experience?.map(prac => <li className='list-disc mb-2'>{prac}</li>) }
                        </ul>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>Awards</h2>
                        <ul className='list-disc px-12'>
                            { doctor?.awards?.map(award => <li className='list-disc mb-2'>{award}</li>) }
                        </ul>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>Memberships</h2>
                        <ul className='list-disc px-12'>
                            { doctor?.memberships?.map(member => <li className='list-disc mb-2'>{member}</li>) }
                        </ul>
                    </div>
                    <div className='flex items-start flex-col bg-white p-8 rounded-md shadow-md mr-16'>
                        <h2 className='text-2xl font-bold mb-5'>Languages</h2>
                        <ul className='list-disc px-12'>
                            { doctor?.languages?.map(language => <li className='list-disc mb-2'>{language}</li>) }
                        </ul>
                    </div>
                </div>
                
                <div className='flex flex-col gap-5 mt-6'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="button" className='w-[270px] text-lg uppercase font-bold p-8 rounded-md'>Book Now</Button>
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
        </div>
    )
}

export default DoctorProfile