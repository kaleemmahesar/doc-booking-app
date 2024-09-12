import { Button } from '@/components/ui/button'
import React from 'react'

function DoctorsFiltersBar() {
    return (
        
        <div className='bg-white shadow-md p-5 mb-10 sticky top-50'>
            <div className="container md:mr-auto flex gap-5">
                <Button type="button" className="text-md p-7" variant="outline">Consultation Method</Button>
                <Button type="button" className="text-md p-7" variant="outline">Date</Button>
                <Button type="button" className="text-md p-7" variant="outline">Speciality</Button>
                <Button type="button" className="text-md p-7 ml-auto" variant="outline">More Filters</Button>
            </div>
        </div>
    )
}

export default DoctorsFiltersBar