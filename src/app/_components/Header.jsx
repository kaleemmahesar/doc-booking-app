import Image from 'next/image'
import LanguageSwticher from './LanguageSwticher'

function Header() {
    return (
        <div className='p-5 shadow-md justify-between'>
            <div className='flex items-center justify-between gap-8'>
                <Image src='/images/logo.png' alt='logo' width={150} height={150} />
                <LanguageSwticher />
            </div>
        </div>
    )
}

export default Header