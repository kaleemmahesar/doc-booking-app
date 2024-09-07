import Image from 'next/image'
import LanguageSwticher from './LanguageSwticher'
import BasicForm from './BasicForm'
import specialities from '../data/specialities.json'
import AutoSearchField from './AutoSearchField'

function Header() {
    return (
        <div className='p-5 shadow justify-between sticky top-0 z-50 bg-white'>
            <div className="container md:mx-auto">
                <div className='flex gap-4'>
                    <Image src='/images/logo1.png' alt='logo' width={150} height={150} />
                    <div className='mr-auto ml-auto'>
                        {/* <BasicForm specialities={specialities} /> */}
                        {/* <AutoSearchField doctors={specialities.doctors} /> */}
                    </div>
                    <LanguageSwticher />
                </div>
            </div>
        </div>
    )
}

export default Header