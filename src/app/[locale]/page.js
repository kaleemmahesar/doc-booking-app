import {useTranslations} from 'next-intl';
import specialities from '../data/specialities.json'
import Banner from '../_components/Banner';

export default function Index() {
    const translations = useTranslations('HomePage');
    return (
        <div className='flex flex-col justify-center '>
            <Banner specialities={specialities} translations={translations} />
        </div>
        
    )
}

