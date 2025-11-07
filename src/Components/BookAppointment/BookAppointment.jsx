import { BiMessageSquareError } from "react-icons/bi";
import { Link, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useAppointments } from '../../Context/AppointmentContext';
const BookAppointment = ({ doctor }) => {


    const { bookAppointment, isBooked, bookedDoctors } = useAppointments()

    const alreadyBooked = isBooked(doctor)
    console.log(bookedDoctors)
    console.log("booked ? ", alreadyBooked)
    const navigate = useNavigate()
    const notify = () => {
        if (!alreadyBooked) {
            bookAppointment(doctor)  
            toast.success(`Appointment Scheduled for  ${doctor.name} successfully!`)
            setTimeout(() => {
                navigate("/bookings")
            }, 800)

        }
        else {
            toast.warn("already appointed")
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
                    <button onClick={() => notify()} className='btn btn-lg bg-primaary text-lg font-bold text-white rounded-full my-4'>{alreadyBooked ? 'Already Booked' : 'Book Appointment Now'}</button>


                </div>
            </div>
        </div>
    );
};

export default BookAppointment;