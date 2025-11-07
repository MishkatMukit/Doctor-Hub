import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json").then(res => res.json()).then(data => setServices(data))
    }, [])
    return (
        <div className='pb-16'>
            <div className='space-y-3 text-center pb-5'>
                <h1 className='font-extrabold text-5xl max-w-[900px] mx-auto text-black'>We Provide Best Medical Services</h1>
                <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

            </div>
            <div className='flex items-center flex-col md:flex-row gap-10 justify-center'>
                {
                    services.map(service=>(
                        <Service key={service.id} service={service}></Service>
                    ))
                }
            </div>
        </div>

    );
};

export default Services;