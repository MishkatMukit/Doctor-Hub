import React from 'react';

const DoctorInfo = ({ doctor }) => {
    return (
        <div>
            <div className=" bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 border border-gray-100 my-5">
                {/* Doctor Image */}
                <div className="">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover rounded-xl mx-auto md:mx-0"
                    />
                </div>

                {/* Doctor Info */}
                <div className="flex flex-col justify-center flex-1 space-y-2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{doctor.name}</h2>
                    <div>
                        <p className="text-xl text-gray-700">{doctor.education}</p>
                    <p className="text-xl text-gray-600 font-medium">{doctor.speciality}</p>
                    </div>

                    <div className="mt-3">
                        <p className="text-xl text-gray-600">Working at</p>
                        <p className="text-xl font-semibold text-gray-900">
                            {doctor.workplace}
                        </p>
                    </div>
                    <span className='border-b-2 border-gray-300 border-dashed p-2'></span>
                    <p className="mt-3 text-lg text-gray-600">
                        Reg No: <span className="text-gray-800">{doctor.registration_number}</span>
                    </p>
                    <span className='border-b-2 border-gray-300 border-dashed p-2'></span>
                    {/* Availability */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        <p className="text-black1 font-bold  mr-2">Availability:</p>
                        {doctor.availability.map((day, index) => (
                            <span
                                key={index}
                                className="bg-[#FFA00020] text-[#FFA000] px-3 py-1 text-sm rounded-full font-medium"
                            >
                                {day}
                            </span>
                        ))}
                    </div>

                    {/* Fee */}
                    <div className="mt-4  text-gray-700">
                        <p className='text-black1 font-bold'>
                            Consultation Fee: <span className="font-semibold text-blue-600"> Taka {doctor.fees} </span>
                            <span className="text-sm text-gray-500">(including VAT)</span> <span className='font-semibold text-blue-600'>Per Consultation</span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;