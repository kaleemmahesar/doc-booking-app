import {useTranslations} from 'next-intl';
import specialities from '../data/specialities.json'
import Banner from '../_components/Banner';
import Doctors from '../_components/Doctors';


export default function Index({params, searchParams}) {
    const translations = useTranslations('HomePage');
    return (
        <div className='flex flex-col justify-center '>
            <Banner specialities={specialities} translations={translations} />
            <Doctors doctors={specialities.doctors} />
        </div>
        
    )
}

