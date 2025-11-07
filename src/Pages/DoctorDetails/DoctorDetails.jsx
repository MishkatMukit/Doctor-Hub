import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoctorInfo from '../../Components/DoctorInfo/DoctorInfo';
import BookAppointment from '../../Components/BookAppointment/BookAppointment';
import { Helmet } from 'react-helmet';

const DoctorDetails = () => {
    const { id } = useParams()
    const doctorID = parseInt(id)
    const data = useLoaderData()
    const doctor = data.find(doc => doc.id === doctorID)

    return (

        <div >
            <Helmet>
                <title>Details | {doctor.name}</title>
            </Helmet>
            <div>
                <div className='space-y-3 text-center p-16 bg-white my-5 rounded-xl shadow-sm'>
                    <h1 className='font-extrabold text-5xl max-w-[900px] mx-auto text-black'>Doctor’s Profile Details</h1>
                    <p className='text-black1 max-w-[1000px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat. </p>

                </div>
            </div>

            <DoctorInfo doctor={doctor}></DoctorInfo>

            <BookAppointment doctor={doctor}> </BookAppointment>
        </div>
    );
};

export default DoctorDetails;