import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

const MainLayOut = () => {
    return (
        <div className=' bg-[#EFEFEF]'>
            <ToastContainer className='text-left' />
            <Navbar></Navbar>
            <div className=' max-w-[90%] mx-auto'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;