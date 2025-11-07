import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../../Components/Services/Services';
import { Helmet } from 'react-helmet';

const Home = () => {
    const doctors = useLoaderData()
    // console.log("from home",data)
    return (
        <div>
            <Helmet>
                <title>DoctorHub | Home</title>
            </Helmet>
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
            <Services></Services>
        </div>
    );
};

export default Home;