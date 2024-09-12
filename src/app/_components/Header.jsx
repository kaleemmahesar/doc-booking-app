import Image from 'next/image'
import LanguageSwticher from './LanguageSwticher'
import BasicForm from './BasicForm'
import AutoSearchField from './AutoSearchField'
import Link from 'next/link'

function Header({locale}) {
    return (
        <div className='border-b-2 justify-between sticky top-0 z-50 bg-white p-5'>
            <div className="container mx-auto">
                <div className='flex gap-4'>
                    <Link href='/'><Image src='/images/logo1.png' alt='logo' width={150} height={150} /></Link>
                    <div className='mr-auto ml-auto'>
                        {/* <BasicForm specialities={specialities} /> */}
                        {/* <AutoSearchField doctors={specialities.doctors} /> */}
                    </div>
                    <LanguageSwticher locale={locale} />
                </div>
            </div>
        </div>
    )
}

export default Header