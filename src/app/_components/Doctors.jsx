'use client'
import React, { useEffect, useState } from 'react'
import Doctor from './Doctor'

function Doctors({doctors,searchQuery, locale}) {
    return (
        <div className='doctors-list'>
            <div className="py-6">
            <div className="flex flex-col gap-12">
            {
                doctors?.map((doctor, index) => {
                    if(searchQuery?.city !== undefined && searchQuery.doctor !== undefined) {
                        console.log('work both conditions')
                        if(doctor.city === searchQuery?.city && doctor.value === searchQuery?.doctor) {
                            return <Doctor key={doctor.id} doctor={doctor} locale={locale} />
                        }
                    } else if (searchQuery?.city !== undefined) {
                        if(doctor?.city === searchQuery?.city){
                            return <Doctor key={doctor.id} doctor={doctor} locale={locale} />
                        }
                        console.log('work city condition')
                    } else if (searchQuery?.doctor !== undefined) {
                        if(doctor?.value === searchQuery?.doctor) {
                            return <Doctor key={doctor.id} doctor={doctor} locale={locale} />
                        }
                        console.log('work doctor conditions')
                    } else if (searchQuery?.specialization) {
                        if(doctor?.speciality_value === searchQuery?.specialization) {
                            return <Doctor key={doctor.id} doctor={doctor} locale={locale} />
                        }
                    } else {
                        return <Doctor key={doctor.id} doctor={doctor} locale={locale} />
                    }
                })
            }
            </div>
            </div>
        </div>
        
    )
}

export default Doctors