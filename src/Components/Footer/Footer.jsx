import React from 'react';
import { NavLink } from 'react-router';
import { FaYoutube,FaGithub,FaFacebook } from "react-icons/fa";

const Footer = () => {
    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/bookings'>My-Bookings</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/blogs'>Blogs</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/contact'>Contact</NavLink>
    </>
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
                <div className='flex items-center'>
                    <img className='w-8 h-8' src="https://i.postimg.cc/7hPzVbqk/logo.png" alt="logo" />
                    <h3 className='text-3xl font-bold'>DoctorHub</h3>
                </div>
                <nav className="text-lg grid grid-flow-col gap-4">
                    {
                        links
                    }
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className='cursor-pointer' href='https://youtu.be/ZP8QyCIUeIA?si=oeZu0JMU2cNhrJJn'>
                            <FaYoutube size={40}/>
                        </a>
                        <a className='cursor-pointer' href='https://github.com/MishkatMukit'>
                            <FaGithub  size={40}/>
                        </a>
                        <a className='cursor-pointer' href='https://www.facebook.com/mishkatmahabub.mukit'>
                            <FaFacebook size={40}/>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by DoctorHub</p>
                </aside>
            </footer>   
        </div>
    );
};

export default Footer;