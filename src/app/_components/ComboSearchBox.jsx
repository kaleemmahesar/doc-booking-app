"use client"

import * as React from "react"
import { Check, ChevronsUpDown, MapPin, Pin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CommandSeparator } from "cmdk"



function ComboSearchBox({boxwidth, title, specialities}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const text = 'search city'
    // console.log(specialities.specialities)
    // console.log(value)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-[400px] justify-between`}
            >
          {value
            ? specialities.find((city) => city.value === value)?.label
            : title}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-[400px] p-0`}>
                <Command>
                    <CommandInput placeholder="Search ..." />
                    <CommandList>
                        <CommandEmpty>No doctor / specialities found.</CommandEmpty>
                        <CommandGroup>
                            {specialities?.map((city) => (
                                <CommandItem key={city.id} value={city.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check className={cn(
                                            "mr-2 h-4 w-4",
                                            value === city.value ? "opacity-100" : "opacity-0"
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
    )
}

export default ComboSearchBox