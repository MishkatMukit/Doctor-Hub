import React from 'react';
import { useAppointments } from '../../Context/AppointmentContext';

const BookedDoctor = ({doctor}) => {
    console.log("from bookedDoctor " , doctor)
    const {bookedDoctors, setBookedDoctors} = useAppointments()
    const handleCancelAppointment=()=>{
        const remBookedDoctors = bookedDoctors.filter(d => d.id !==doctor.id)
        setBookedDoctors(remBookedDoctors)
    }
    return (
        <div>
            <div className="bg-white flex flex-col rounded-2xl shadow-sm p-6 my-4 ">
                <div className="flex justify-between items-center mb-2">
                    <div className='space-y-2'>
                        <div className="font-bold text-2xl text-black">{doctor.name}</div>
                        <div className="text-gray-500 text-lg font-medium">{doctor.education}</div>
                    </div>
                    <div className="text-gray-500 text-lg font-medium">
                        Appointment Fee : {doctor.fees} + Vat
                    </div>
                </div>
                <span className='flex-1 border-t-2 border-gray-300 border-dashed my-5'></span>

                <button onClick={handleCancelAppointment}
                    className="w-full py-3 border-2 border-red-400 text-red-600 font-semibold rounded-full text-center text-base hover:bg-red-50 transition-colors"
                >
                    Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default BookedDoctor;