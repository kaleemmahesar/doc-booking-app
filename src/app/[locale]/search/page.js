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
import DoctorsFiltersBar from '@/app/_components/DoctorsFiltersBar'

function SearchResults({searchParams, params: {locale}}) {
    
    return (
        <div className='search-results bg-slate-100'>
            <DoctorsFiltersBar />
            <div className="container md:mr-auto">
                <Doctors searchQuery={searchParams} locale={locale} doctors={specialities.doctors} />
            </div>
        </div>
    )
}

export default SearchResults