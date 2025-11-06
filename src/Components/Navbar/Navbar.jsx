
import { Link, Links, NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/bookings'>My-Bookings</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/blogs'>Blogs</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to='/contact'>Contact</NavLink>
    </>
    return (
        <div className='mx-10'>
            <div className="">
                <div className='navbar max-w-[90%] mx-auto'>
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                            <img className='w-10 h-10' src="https://i.postimg.cc/7hPzVbqk/logo.png" alt="" />
                            <a className=" font-bold text-3xl">Phudu</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-[#0f0f0f90] text-lg font-medium menu-horizontal px-1 space-x-12">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='font-semibold bg-blue-600 text-white rounded-full py-2 px-3'>Emergency</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;