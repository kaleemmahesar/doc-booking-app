import {useTranslations} from 'next-intl';
import specialities from '../data/specialities.json'
import specialitiesar from '../data/specialitiesar.json'
import Banner from '../_components/Banner';
import Doctors from '../_components/Doctors';
import SpecialitiesList from '../_components/SpecialitiesList';


export default function Index({params, searchParams}) {
    const translations = useTranslations('HomePage');
    return (
        <div className='flex flex-col justify-center '>
            <Banner specialities={params.locale === 'en' ? specialities : specialitiesar} translations={translations} />
            <SpecialitiesList specializations={specialities} />
        </div>
        
    )
}

