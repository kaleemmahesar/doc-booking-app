"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretDownIcon, CaretRightIcon, CaretSortIcon } from "@radix-ui/react-icons"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { CheckIcon, LocateFixedIcon, MapPin, Search } from "lucide-react"
import { useRef, useState } from "react"
import { redirect, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    city: z.string(),
    doctor: z.string()
})








function BasicForm({cityField, docField, specialities, specialLabel, docsLabelValue}) {
    console.log(specialities)
    const pathname = usePathname()
    const router = useRouter()
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            city: '',
            doctor: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        const doctorLabel = myRef.current.id
        console.log(values)
        if (values.city !== '' && doctorLabel !== '') {
            router.push(`${pathname}/search?city=${values.city}&doctor=${doctorLabel}`)
        } else if (values.city !== '') {
            router.push(`${pathname}/search?city=${values.city}`)
        } else if (doctorLabel !== '') {
            router.push(`${pathname}/search?doctor=${doctorLabel}`)
        } else {
            router.push(`${pathname}/search`)
        }
        
    }
    const [openLanguage, setopenLanguage] = useState(false)
    const [openSpeciality, setOpenSpeciality] = useState(false)
    const [fieldFocused, setFieldFocused] = useState(false)
    const [docFieldValue,setDocFieldValue] = useState('')
    const [doctorsList, setDoctorsList] = useState(specialities.doctors)
    const [specializationList, setSpecializationList] = useState(specialities.specialization)
    
    const handleInputChange = (value) => {
        const filteredDocs = specialities.doctors.filter((doc) => {
            return doc && doc.label && doc.label.toLowerCase().includes(value);
        })
        setDoctorsList(filteredDocs)
        const filteredSpecialization = specialities.specialization.filter((spe) => {
            return spe && spe.label && spe.label.toLowerCase().includes(value);
        })
        setSpecializationList(filteredSpecialization)
        setFieldFocused(true)
    }
    const handleInputBlur = () => {
        setFieldFocused(false)
    }
    const handleInputFieldValue = ({label, value}) => {
        console.log('working')
        setDocFieldValue(value)
        myRef.current.value = label;
        myRef.current.id = value
        setFieldFocused(false)
    }
    const openDocMenu = () => {
        setFieldFocused(true)
    }
    // Create a ref using the useRef hook
    const myRef = useRef(null);
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 relative">
                <FormField
                    className="space-y-0"
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover open={openLanguage} onOpenChange={setopenLanguage}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[225px] border-0 bg-slate-100 h-16 justify-between text-md",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? specialities?.cities.find(
                                                    (city) => city.value === field.value
                                                )?.label
                                                : cityField}
                                            <CaretDownIcon className="ml-2 h-6 w-6 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[235px] p-0">
                                    <Command>
                                        <CommandInput placeholder={cityField} />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {specialities?.cities.map((city) => (
                                                    <CommandItem
                                                        value={city.label}
                                                        key={city.value}
                                                        onSelect={() => {
                                                            form.setValue("city", city.value)
                                                            setopenLanguage(false)
                                                        }}
                                                    >
                                                        <CheckIcon
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                city.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {city.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
                    control={form.control}
                    name="doctor"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover open={openSpeciality} onOpenChange={setOpenSpeciality}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? specialities?.doctors.find(
                                                    (doctor) => doctor.value === field.value
                                                )?.label
                                                : "Select Speciality"}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search speciality..." />
                                        <CommandList>
                                            <CommandEmpty>No doctor found.</CommandEmpty>
                                            <CommandGroup>
                                                {specialities?.doctors.map((doctor) => (
                                                    <CommandItem
                                                        value={doctor.label}
                                                        key={doctor.value}
                                                        onSelect={() => {
                                                            form.setValue("doctor", doctor.value)
                                                            setOpenSpeciality(false)
                                                        }}
                                                    >
                                                        <CheckIcon
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                doctor.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {doctor.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <div className="relative">
                    <Input ref={myRef} className='outline-none text-md focus:outline-none focus:ring-0 rounded-md h-16 border-0 px-5 ring-0 bg-slate-100 w-[400px]' placeholder={docField} onBlur={handleInputBlur} onFocus={openDocMenu} onChange={(e) => handleInputChange(e.target.value)} />
                    
                    <div className={`flex flex-col absolute h-[300px] overflow-y-auto right-0 top-20 rounded-md shadow-lg bg-white w-[400px] ${fieldFocused ? 'opacity-100' : 'opacity-0'}`}>
                    
                            <h2 className="text-xl mt-5 mb-3 px-5 text-slate-400">{specialLabel}</h2>
                
                {specializationList.length > 0 ?
                    
                    specializationList?.map((doctor) => {
                        const {label, value }  = doctor
                        return (
                            <div className={``}>
                                <Button type="button"
                                    className={`w-full capitalize text-black p-6 text-lg border-0 bg-transparent hover:bg-transparent text-left justify-start`}
                                    onClick={() => handleInputFieldValue({label, value })}
                                >
                                    {doctor?.label}
                                </Button>
                            </div>
                        )
                    })
                : 
                    <div className='w-full capitalize text-primary p-6 text-lg border-0 bg-transparent hover:bg-transparent text-left justify-start'>No Specialization Found</div>
                }
                <h2 className="text-xl mt-5 mb-3 px-5 text-slate-400">{docsLabelValue}</h2>
                    {doctorsList.length > 0 ?
                    
                                doctorsList?.map((doctor) => {
                                    const {label, value }  = doctor
                                    return (
                                        <div className={`doc-name`}>
                                            <Button type="button"
                                                className={`w-full capitalize text-black p-6 text-lg border-0 bg-transparent hover:bg-transparent text-left justify-start`}
                                                onClick={() => handleInputFieldValue({label, value })}
                                            >
                                                {doctor?.label}
                                            </Button>
                                        </div>
                                    )
                                })
                            : 
                                <div className='w-full capitalize text-primary p-6 text-lg border-0 bg-transparent hover:bg-transparent text-left justify-start'>No Doctors Found</div>
                            }
                        </div>
                    {/* {fieldFocused && 
                        <div className="flex flex-col absolute right-0 top-20 rounded-md shadow-md bg-white w-[450px]">
                            {doctorsList.length > 0 ?
                                doctorsList?.map((doctor) => {
                                    return (
                                        <DocName doctor={doctor} />
                                    )
                                })
                            : 
                                <div className='w-full capitalize text-red-500 p-6 text-lg border-0 bg-transparent hover:bg-transparent text-left justify-start'>No Records Found</div>
                            }
                        </div>
                    } */}
                </div>
                <Button type="submit" className="h-16"><Search className="h-8 w-10 text-xl" /></Button>
            </form>
        </Form>
    )
}

export default BasicForm