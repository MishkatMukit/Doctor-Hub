import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../../Components/Services/Services';

const Home = () => {
    const doctors = useLoaderData()
    console.log(doctors)
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Services></Services>
        </div>
    );
};

export default Home;