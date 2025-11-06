import React, { Suspense, useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(()=>{
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            {
            fetch('doctors.json').then(res=>res.json()).then(data=>setDoctors(data))
            }

        </Suspense>
    },[])
    const half = Math.ceil(doctors.length/2)
    const displayDoctors = showAll? doctors : doctors.slice(0, half)
    console.log(doctors)
    return (
        <div className='py-16'>
            <div className='space-y-3 text-center pb-5'>
                <h1 className='font-extrabold text-5xl max-w-[900px] mx-auto text-black'>Our Best Doctors</h1>
                <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-[1200px] mx-auto'>
                {
                    displayDoctors.map(doctor=>(
                        
                        <Doctor doctor={doctor}></Doctor>

                    ))
                }
            </div>
            <div className='flex justify-center py-5'>
                <button onClick={()=>setShowAll(!showAll)} className=' btn text-lg btn-lg bg-primaary text-white font-bold rounded-full'>{showAll?<span>Show Less</span>: <span>Show All</span>}</button>
            </div>

        </div>
    );
};

export default Doctors;