import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LanguageSwticher() {
    return (
        <header className='p-5 fixed z-30 w-full'>
            <nav className='flex justify-end gap-4 p-5'>
                <Link href="/ku">
                    <Image src="/images/iq.svg" alt="en" width={25} height={25} />
                </Link>
                <Link href="/ar">
                    <Image src="/images/ae.svg" alt="en" width={25} height={25} />
                </Link>
                <Link href="/en">
                    <Image src="/images/us.svg" alt="en" width={25} height={25} />
                </Link>
            </nav>
        </header>        
    )
}

export default LanguageSwticher