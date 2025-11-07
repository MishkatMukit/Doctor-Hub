import React from 'react';
import Blog from '../../Components/Blog/Blog'
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';
const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>DoctorHub | Blogs</title>
            </Helmet>
            <div className='space-y-3 text-center md:p-16  my-5'>
                <h1 className='font-extrabold text-4xl md:text-5xl max-w-[900px] mx-auto text-black'>Welcome to our blogs</h1>
                <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='flex flex-col gap-6 pb-10'>
                {
                    blogs.map(blog=>(
                        <Blog blog={blog}></Blog>
                    ))
                }
            </div>

        </div>
    );
};

export default Blogs;