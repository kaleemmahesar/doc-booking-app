'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
function Appointment({ searchParams, params: { locale } }) {
    const appointmentDetails = JSON.parse(sessionStorage.getItem('appointment'));
    return (
        <div className='ps-grid py-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col mb-5 p-3'>
                    <h2 className='text-3xl font-bold mb-6'>Thank You for the appointment</h2>
                    <h4>Your appointment details are shown below.</h4>
                </div>
                <Table className='text-md max-w-[600px]'>
                    <TableBody>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell><b>{appointmentDetails?.fullName}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phone Number</TableCell>
                            <TableCell><b>{appointmentDetails?.phone}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email Address</TableCell>
                            <TableCell><b>{appointmentDetails?.emailAddress}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Appointment Doctor</TableCell>
                            <TableCell><b>{appointmentDetails?.selectedDoc}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell><b>{appointmentDetails?.selectedDate}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Appointment Time</TableCell>
                            <TableCell><b>{appointmentDetails?.selectedTime}</b></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Appointment