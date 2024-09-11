import specialities from '../../../../data/specialities.json'
import DoctorProfile from '@/app/_components/DoctorProfile'

async function page({params, params: {locale}}) {
    const doctor = await specialities?.doctors.find((doc) => {
        if(doc.id == params.id) {
            return doc
        }
    })
    console.log(doctor)
    return(
        <div className='search-results py-16'>
            <div className="container md:mx-auto">
                <DoctorProfile doctor={doctor} locale={locale} />
            </div>
        </div>
    )
}

export default page