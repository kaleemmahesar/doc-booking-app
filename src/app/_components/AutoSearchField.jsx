'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function AutoSearchField({title, doctors}) {
    
    const [doctorsList, setDoctorsList] = useState(doctors)
    
    const handleInputChange = (value) => {
        const filteredDocs = doctors.filter((doc) => {
            return doc && doc.label && doc.label.toLowerCase().includes(value);
        })
        setDoctorsList(filteredDocs)
        console.log(value)
    }
    return (
        <div>
            <Input/>
            {
                doctorsList?.map((doctor) => {
                    return <h2 key={doctor.id}>{doctor.label}</h2>
                })
            }
        </div>
    )
}

export default AutoSearchField