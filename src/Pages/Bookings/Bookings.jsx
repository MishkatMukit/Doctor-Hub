import React from 'react';
import { useAppointments } from '../../Context/AppointmentContext';
import BookedDoctor from '../../Components/BookedDoctor/BookedDoctor';
import Rechart from '../../Components/Rechart/Rechart';

const Bookings = () => {
    const {bookedDoctors} = useAppointments()
    console.log("from bookings", bookedDoctors)

    return (
        <div>
            <div>
                <h1>Rechart section</h1>
                <Rechart bookedDoctors={bookedDoctors}></Rechart>

            </div>
            <div className='space-y-3 text-center p-16  my-5'>
                <h1 className='font-extrabold text-5xl max-w-[900px] mx-auto text-black'>My Today Appointments</h1>
                <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

            </div>

            <div>
                {
                    bookedDoctors.map(doctor=> (
                        <BookedDoctor doctor={doctor}></BookedDoctor>
                    ))
                }
            </div>

        </div>
    );
};

export default Bookings;