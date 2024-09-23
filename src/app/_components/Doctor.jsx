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
import ProgressBar from './ProgressBar'
import moment from 'moment'
const formSchema = z.object({
    emailAddress: z.string(),
    fullName: z.string(),
    phone: z.string().min(13, {
        message: "Please provide a valid number.",
    })
})

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CarouselContent, Carousel, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import Stepper from './Stepper'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


function Doctor({ doctor, locale }) {
    const [optSent, setOptSent] = useState(false)
    const optField = useRef(null)
    const [pvalue, setPvalue] = useState(33.33)
    const [formStep, setFormStep] = useState(1)
    const [formDay, setFormDay] = useState('')
    const [formTime, setFormTime] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: '',
            emailAddress: '',
            fullName: ''
        },
    })

    const timeSlots = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30']

    async function onSubmit(values) {
        if (values.phone) {
            setOptSent(true)
        }
        if(values.phone && values.fullName && values.emailAddress) {
            const valuesObject = await {...values, selectedTime:activeTime, selectedDate:activeDate, selectedDoc:doctor.label}
            console.log(valuesObject)
            sessionStorage.setItem("appointment", JSON.stringify(valuesObject))
            router.push(`/${locale}/appointment`)
        }
    }

    const handlePrev = () => {
        console.log(form)
        if (formStep > 1) {
            setFormStep((step) => step - 1)
        }
    }

    const handleNext = () => {
        console.log(form.formState)
        if (formStep < 3) {
            setFormStep((step) => step + 1)
        }
    }

    const getDateRange = (firstDate, lastDate) => {
        if (moment(firstDate, 'MM-DD').isSame(moment(lastDate, 'MM-DD'), 'day'))
            return [lastDate];
        let date = firstDate;
        const dates = [date];
        do {
            date = moment(date).add(1, 'day');
            dates.push(date.format('MMM , DD'));
        } while (moment(date).isBefore(lastDate));
        return dates;
    };
    const startDate = moment().format('MMM , DD');
    const endDate = moment().add(1, 'weeks').subtract(1, 'days').format('MM-DD');
    const dates = getDateRange(startDate, endDate);
    const [activeDate, setActiveDay] = useState()
    const [activeTime, setActiveTime] = useState()
    // console.log('dates: ', dates);
    // console.log(startDate)
    // console.log(endDate)

    const showAllTimes = (date) => {
        setFormDay(date);
        setActiveDay(date)
        console.log(formDay)
    }

    const setTime = (time) => {
        setActiveTime(time)
        setFormTime(time);
        console.log(formTime)
    }
    return (
        <div className='flex w-full rounded-md p-6 bg-white shadow-lg items-start'>
            <Link href={`/${locale}/doctors/profile/${doctor.id}`}><Image src={doctor.image_url} width={115} height={115} alt='doc' className='mt-5 rounded-full' /></Link>
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
                    {doctor?.practical_experience?.map(person => <Button key={person} type="button" variant="secondary" className='font-bold py-0 px-3'>{person}</Button>)}
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="button" className='w-full text-lg p-6 rounded-md'>Book Now</Button>
                    </DialogTrigger>
                    <DialogContent className="md:max-w-[50%] md:min-w-[768px]">
                        <DialogHeader>
                            {/* <ProgressBar pvalue={pvalue} /> */}
                            <Stepper formStep={formStep} />
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                {formStep === 1 &&
                                    <>
                                        <h2 className='font-bold'>Select Date</h2>
                                        <Carousel className="">
                                            <CarouselContent className="-ml-1">
                                                {dates.map((date, index) => {
                                                    return (
                                                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                                            <Button type="button" key={date} variant="outline" className={activeDate === date ? 'w-full activeBtn' : 'w-full'} onClick={() =>showAllTimes(date)}>{date}</Button>
                                                        </CarouselItem>
                                                    )
                                                })}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                        <h2 className='font-bold'>Select Time</h2>
                                        <div className='grid grid-cols-4 gap-4'>
                                        {
                                            timeSlots.map((time) => {
                                                return <Button key={time} type="button" variant="outline" className={activeTime === time ? 'activeBtn' : ''} onClick={() =>setTime(time)}>{time}</Button>
                                            })
                                        }
                                        </div>
                                    </>

                                }
                                {formStep === 2 &&
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input className='bg-slate-100' placeholder="+912333333333" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        {optSent && 
                                            <>
                                                <h2>OPT</h2>
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
                                            </>
                                        }        
                                    </>
                                }
                                {formStep === 3 && 
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input className='bg-slate-100' placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="emailAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input className='bg-slate-100' placeholder="john@doe.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                }
                                
                            
                                <DialogFooter className='flex flex-row sm:justify-between gap-0 mt-6 mb-3'>
                                    <Button type="button" className={`${formStep === 1 ? 'opacity-50' : 'active-btn'}`} onClick={handlePrev}>Previous</Button>
                                    <Button type="button" className={`${formStep === 3 || formStep === 2 && !optSent ? 'hidden' : 'show'}`} onClick={handleNext}>Next</Button>
                                    <Button type="submit" className={`${formStep === 3 || formStep === 2 && !optSent ? 'show' : 'hidden'}`}>Submit</Button>
                                </DialogFooter>
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