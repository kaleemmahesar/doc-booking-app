import Image from 'next/image'
import React from 'react'

function DefaultLanguage() {
    return (
        <div className="flex gap-3">
            <Image src={`/images/us.svg`} alt="en" width={25} height={25} />
            <span>English</span>
        </div>
    )
}

export default DefaultLanguage