import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayOut = () => {
    const navigation = useNavigation()
    return (
        <div className=' bg-[#EFEFEF]'>
            <ToastContainer className='text-left' />
            <Navbar></Navbar>
            {
                navigation.state === "loading" && (
                    <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>  
                )
            }
            <div className=' max-w-[90%] mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;