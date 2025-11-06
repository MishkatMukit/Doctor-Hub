import React from 'react';
import { AiOutlineTrademark } from "react-icons/ai";
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className=" p-5 pb-0 rounde">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-[250px] w-[400px] rounded-xl  object-cover"
                    />
                </div>
                <div className="p-5 pt-3">
                    <div className="flex gap-3 mb-4">
                        <span className="px-4 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-full">
                            Available
                        </span>
                        <span className="px-4 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                            {doctor.experience} Experience
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {doctor.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        {doctor.education}
                    </p>

                    <div className="border-t border-2 border-dashed border-gray-200 my-2"></div>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-gray-400 "><AiOutlineTrademark size={20} /></span>
                        <span className="text-gray-700">Reg No: {doctor.registration_number}</span>
                    </div>

                    <Link to={`/details/${doctor.id}`}>
                        <button className="w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors">
                        View Details
                    </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Doctor;