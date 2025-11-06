import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div className=' bg-[#EFEFEF]'>
            <Navbar></Navbar>
            <div className=' max-w-[90%] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;