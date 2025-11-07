import React from 'react';

const Banner = () => {
    return (
        <div className='px-5 py-16 bg-linear-to-t from-[#ffffff] to-transparent border-4 border-white rounded-3xl' >
            <div className='text-center flex flex-col justify-center items-center gap-4'>
                <div className='space-y-2 '>
                    <h1 className='font-extrabold text-3xl md:text-5xl max-w-[900px] mx-auto text-black'>Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className='text-black1 max-w-[1000px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div>
                    <div className=" flex gap-2">
                        <div>
                            <label className="input input-sm md:input-lg validator rounded-full md:w-[500px]">

                                <input   type="text" placeholder="Search your doctor" />
                            </label>
                        </div>
                        <button className="btn btn-sm md:btn-lg text-white shadow-none rounded-full bg-primaary border-none">Search Now</button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src="https://i.postimg.cc/cC13m6dG/banner-img-1.png" alt="Banner image" />
                    <img className='hidden md:flex' src="https://i.postimg.cc/cC13m6dG/banner-img-1.png" alt="Banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;