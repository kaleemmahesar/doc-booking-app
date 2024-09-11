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

function SearchResults({searchParams, params: {locale}}) {
    
    return (
        <div className='search-results py-16 bg-slate-100'>
            <div className="container md:mx-auto">
                <Doctors searchQuery={searchParams} locale={locale} doctors={specialities.doctors} />
            </div>
        </div>
    )
}

export default SearchResults