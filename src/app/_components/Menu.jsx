import Image from 'next/image'
import React from 'react'

function Menu() {
    return (
        <div>
            <h2>Welcome</h2>
            <Image src='/images/logo.png' alt='logo' width={150} height={150} />
        </div>
    )
}

export default Menu