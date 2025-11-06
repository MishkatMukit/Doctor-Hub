import React from 'react';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
const Service = ({ service }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <div>

            <div className='space-y-3 p-5 bg-white rounded-xl w-3xs' ref={ref}>
                <img src={service.img} alt="" />
                <span className='text-6xl font-extrabold'>{inView && <CountUp className='text-5xl font-extrabold' delay={0} start={0} end={service.count}></CountUp>}
                    +</span>
                <p className='font-semibold text-2xl text-[#0f0f0f70] pt-4'>{service.name}</p>
            </div>
        </div>


    );
};

export default Service;