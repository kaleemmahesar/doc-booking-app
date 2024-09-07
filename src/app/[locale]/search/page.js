import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import specialities from '../../data/specialities.json'
import Doctors from '@/app/_components/Doctors'

function SearchResults({searchParams}) {
    return (
        <div className='search-results mt-16'>
            <div className="container md:mx-auto">
                <Doctors searchQuery={searchParams} doctors={specialities.doctors} />
            </div>
        </div>
    )
}

export default SearchResults