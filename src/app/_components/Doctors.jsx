'use client'
import React, { useEffect, useState } from 'react'
import Doctor from './Doctor'

function Doctors({doctors,searchQuery}) {
    return (
        <div className='doctors-list'>
            <div className="container md:mx-auto">
                <h2 className='text-3xl font-bold text-center mb-12 mt-12'>List of Doctors</h2>
            <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
            {
                doctors?.map((doctor, index) => {
                    if(searchQuery?.city !== undefined && searchQuery.doctor !== undefined) {
                        console.log('work both conditions')
                        if(doctor.city === searchQuery?.city && doctor.value === searchQuery?.doctor) {
                            return <Doctor key={doctor.id} doctor={doctor} />
                        }
                    } else if (searchQuery?.city !== undefined) {
                        if(doctor?.city === searchQuery?.city){
                            return <Doctor key={doctor.id} doctor={doctor} />
                        }
                        console.log('work city condition')
                    } else if (searchQuery?.doctor !== undefined) {
                        if(doctor?.value === searchQuery?.doctor) {
                            return <Doctor key={doctor.id} doctor={doctor} />
                        }
                        console.log('work doctor conditions')
                    } else {
                        return <Doctor key={doctor.id} doctor={doctor} />
                    }
                })
            }
            </div>
            </div>
        </div>
        
    )
}

export default Doctors