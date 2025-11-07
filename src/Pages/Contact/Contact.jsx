import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';
import { Helmet } from 'react-helmet';
import MyMap from '../../Components/Map/MyMap.jsx';



const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>DoctorHub | Contact</title>
            </Helmet>
            <div className='space-y-3 text-center md:p-16'>
                <h1 className='font-extrabold text-4xl md:text-5xl max-w-[900px] mx-auto text-black'>Find Us at Your Doorstep</h1>
                <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='py-12'>
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <MyMap />
            </APIProvider>
            </div>
        </div>
    );
};

export default Contact;