import React from 'react'
import specialities from '../../../data/specialities.json'
import Banner from '@/app/_components/Banner';
import {useTranslations} from 'next-intl';

function Profile() {
    const translations = useTranslations('HomePage');
    return (
        <div className='flex flex-col justify-center '>
            <Banner specialities={specialities} translations={translations} />
        </div>
        
    )
}

export default Profile