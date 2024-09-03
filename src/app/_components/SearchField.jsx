import { Search } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input'

function SearchField() {
    return (
        <>
            <Search />
            <Input type="text" placeholder="Search Dr." className='focus:ring-transparent focus:ring-0 focus:border-0 border-0 w-72' />
        </>
    )
}

export default SearchField