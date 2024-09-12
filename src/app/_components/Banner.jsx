
import Image from 'next/image'
import React from 'react'
import BannerImg from '../../../public/images/banners.jpg'
import SearchField from './SearchField'
import ComboSearchBox from './ComboSearchBox'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import AutoSearchField from './AutoSearchField'
import SearchButton from './SearchButton'
import BasicForm from './BasicForm'
import Link from 'next/link'

function Banner({translations, specialities}) {
    function handleDataFromChild(data) {
        setDataFromChild(data);
    }
    
    return (
        <div className='flex flex-col justify-center align-middle content-center home-banner'>
            <div className='container mx-auto'>
                    <h2 className='text-3xl text-center leading-9 w-[740px] font-extrabold mb-3 uppercase'>{translations('title')}</h2>
                    <h3 className='text-2xl text-center w-[740px] leading-9 mb-14'>{translations('slug')}</h3>
                    {/* <Link href="/" className='inline-flex p-8 text-2xl items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12'>ALL DOCTORS</Link> */}
                    <div className='flex w-[740px] justify-center gap-5 mt-6'>
                        <BasicForm docsLabelValue={translations('docsLabelValue')} specialLabel={translations('specialLabel')} cityField={translations('cityFieldValue')} docField={translations('docFieldValue')} specialities={specialities} />
                        {/* <ComboSearchBox title={translations('cityFieldValue')} cities={specialities?.cities} /> */}
                        {/* <ComboSearchBox title={translations('docFieldValue')} cities={specialities?.doctors} />
                        <SearchButton sendDataToParent={handleDataFromChild} /> */}
                    </div>
            </div>
        </div>
    )
}

export default Banner