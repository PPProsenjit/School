import React from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarCheck } from 'react-icons/bs';
const FacultyCard = ({ course }) => {
    console.log(course);
    const { department_name, faculty, course_duration, picture } = course;
    return (
        <button type='button' className='0'>
            <div className="rounded overflow-hidden shadow-lg md:h-[390px] hover:bg-gray-300 bg-white">
                <img className="w-full sm:h-" src={picture} alt="Forest" />
                <div className='mx-2'>
                    <div className='pt-5'>
                        <div className="font-bold text-xl text-left">{department_name}</div>
                    </div>
                    <div className='flex gap-20 pt-5'>
                        <Link>{faculty}</Link>
                        <h3 className='flex items-center'><BsCalendarCheck className='mr-2'/>{course_duration}</h3>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default FacultyCard;

{/* <div className="rounded overflow-hidden shadow-lg">
<img className="w-full" src={picture} alt="Forest"/>
<div >
    <div className="font-bold text-xl mb-2">{department_name}</div>
    <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
</div>
<div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
</div>
</div> */}