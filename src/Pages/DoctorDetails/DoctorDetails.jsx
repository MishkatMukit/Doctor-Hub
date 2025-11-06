import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoctorInfo from '../../Components/DoctorInfo/DoctorInfo';
import { BiMessageSquareError } from "react-icons/bi";

const DoctorDetails = () => {
    const { id } = useParams()
    const doctorID = parseInt(id)

    const data = useLoaderData()
    const doctor = data.find(doc => doc.id === doctorID)

    return (

        <div >
            <div>
                <div className='space-y-3 text-center p-16 bg-white my-5 rounded-xl shadow-sm'>
                    <h1 className='font-extrabold text-5xl max-w-[900px] mx-auto text-black'>Doctor’s Profile Details</h1>
                    <p className='text-black1 max-w-[1000px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat. </p>

                </div>
            </div>

            <DoctorInfo doctor={doctor}></DoctorInfo>

            <div>
                <div className='space-y-3 flex flex-col text-center p-16 bg-white my-5 rounded-xl shadow-sm'>
                    <h1 className='font-extrabold text-3xl max-w-[900px] mx-auto text-black'>Book an Appointment</h1>
                    <span className='border-b-2 flex-1 border-gray-300 border-dashed p-2'></span>
                    <div className='flex flex-col gap-2 md:flex-row justify-between items-center'>
                        <span className='text-lg font-bold'>Availability</span>
                        <span className='bg-[#09982F20] py-1 px-3 text-sm text-[#09982F] rounded-full'>Doctor Available Today</span>
                    </div>
                    <span className='border-t-2 flex-1 border-gray-300 border-dashed p-2'></span>
                    <div className='flex justify-start'>
                        <span className='bg-[#FFA00020] text-lg flex items-center gap-2 px-3 py-1 rounded-full text-[#FFA000]'>
                            <BiMessageSquareError /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </span>
                        
                    </div>
                    <button className='btn btn-lg bg-primaary text-lg font-bold text-white rounded-full my-4'>Book Appointment Now</button>


                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;