'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowDown, Check, CheckIcon, ChevronsUpDown, LocateIcon } from "lucide-react"
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter } from "next/navigation"

const languages = [
    { id: 1, value: "en", label: "English" },
    { id: 2, value: "ku", label: "Kurdish"},
    { id: 3, value: "ar", label: "Arabic" }
]

function LanguageSwticher({locale, params}) {
    console.log(locale)
    const pathName = usePathname()
    console.log(params)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const router = useRouter();

    return (

        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[225px] justify-between text-lg h-12"
                >
                    {value
                    ? languages.find((framework) => framework.value === value) ? 
                        <div className="flex gap-3">
                                <Image src={`/images/${locale}.svg`} alt="en" width={25} height={25} />
                                <span>{value}</span>
                            </div> : ''  
                    : 
                        <div className="flex gap-3">
                            <Image src={`/images/${locale}.svg`} alt="en" width={25} height={25} />
                            <span>
                                {locale === 'en' && "English"}
                                {locale === 'ar' && "Arabic"}
                                {locale === 'ku' && "Kurdish"}
                            </span>
                        </div>
                    }
                    { open ? <CaretDownIcon className="ml-2 h-6 w-6 shrink-0 opacity-70" /> : <CaretUpIcon className="ml-2 h-6 w-6 shrink-0 opacity-70" /> }
                    {/* {value
                        ? 
                            languages.find((framework) => framework.value === value) ?  
                            <div className="flex gap-3">
                                <Image src={`/images/${value}.svg`} alt="en" width={25} height={25} />
                                <span>{value}</span>
                            </div> : ''  
                        : 
                            <div className="flex gap-3">
                                <Image src={`/images/us.svg`} alt="en" width={25} height={25} />
                                <span>English</span>
                            </div>
                    }
                    */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[225px] p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                        router.push(`/${framework.value}`)
                                        // console.log(value)
                                        // router.push(`${framework.langValue}`)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <Link href="/en" className="flex gap-3">
                                        <Image src={`/images/${framework.value}.svg`} alt="en" width={25} height={25} />
                                        <span>{framework.label}</span>
                                    </Link>
                
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
export default LanguageSwticher