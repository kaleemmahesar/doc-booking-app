import Image from 'next/image'
import React from 'react'
import BannerImg from '../../../public/images/banners.jpg'
import SearchField from './SearchField'
import ComboSearchBox from './ComboSearchBox'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function Banner({translations, specialities}) {
    console.log(specialities)
    return (
        <div className='flex flex-col justify-center items-center home-banner'>
            <h2 className='text-3xl font-bold text-white mb-3'>{translations('title')}</h2>
            <h3 className='text-2xl text-white mb-3'>{translations('slug')}</h3>
            <div className='flex gap-5 mt-6'>
                <ComboSearchBox title={translations('cityFieldValue')} specialities={specialities?.cities} />
                <ComboSearchBox title={translations('docFieldValue')} specialities={specialities?.doctors} />
                <Button><Search /></Button>
            </div>
        </div>
    )
}

export default Banner