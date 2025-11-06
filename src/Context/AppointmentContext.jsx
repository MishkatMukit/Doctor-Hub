import { createContext, useContext, useState } from "react";

export const AppointmentContext = createContext()

export const AppointmentProvider = ({children})=>{
    const [bookedDoctors, setBookedDoctors] = useState([])
    const bookAppointment = (doctor)=>{
            setBookedDoctors([...bookedDoctors, doctor])
            
    }
    
    const isBooked = (doctor)=>{
        return bookedDoctors.some(bookedDoctor => bookedDoctor.id === doctor.id)
    }

    return(
        <AppointmentContext.Provider value={{bookedDoctors, bookAppointment, isBooked, setBookedDoctors}}>
            {children}
        </AppointmentContext.Provider>
    );
}
export const useAppointments = ()=>{
    const context = useContext(AppointmentContext)
    if (!context) {
        throw new Error('useAppointments must be used inside AppointmentProvider');
    }
    return context;
}