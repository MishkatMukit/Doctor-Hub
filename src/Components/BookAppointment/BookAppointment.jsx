import React, { useState } from 'react';
import { BiMessageSquareError } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
const BookAppointment = () => {

    const [appointed, setAppointed] =useState(false)
    const notify = (appointed) => {
        if(!appointed){
            toast("Appointment Scheduled")
        }
        else{
            toast("Appointment cancelled")
        }
        
    };

    return (
        <div>
            <div>
                <div className='space-y-3 flex flex-col text-center p-10 py-16 bg-white my-5 rounded-xl shadow-sm'>
                    <h1 className='font-extrabold text-3xl max-w-[900px] mx-auto text-black'>Book an Appointment</h1>
                    <span className='border-b-2 flex-1 border-gray-300 border-dashed p-2'></span>
                    <div className='flex flex-col gap-2 md:flex-row justify-between items-center'>
                        <span className='text-lg font-bold'>Availability</span>
                        <span className='bg-[#09982F20] py-1 px-3 text-sm text-[#09982F] rounded-full'>Doctor Available Today</span>
                    </div>
                    <span className='border-t-2 flex-1 border-gray-300 border-dashed p-2'></span>
                    <div className='flex justify-start'>
                        <span className='bg-[#FFA00020] text-lg flex items-center gap-2 p-4 md:px-3 md:py-1 md:rounded-full text-[#FFA000]'>
                            <BiMessageSquareError /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </span>

                    </div>
                    <button onClick={()=>{setAppointed(!appointed), notify(appointed)}} className='btn btn-lg bg-primaary text-lg font-bold text-white rounded-full my-4'>{
                            appointed? <span>Cancel Appointment</span> : <span >Book Appointment Now</span>
                        }</button>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default BookAppointment;