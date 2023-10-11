import React, { useEffect, useState } from 'react';
import FacultyCard from '../../Carts/FacultyCard/FacultyCard';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('faculty.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='bg-gray-200'>
            <div className='text-center py-20'>
                <h1 className='text-3xl'>OUR DEPARTMENTS</h1>
                <p className='text-xl'>There are many variations of passages of Lorem Ipsum</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 mx-[12%]'>
                {
                    courses.map((course, index) =><FacultyCard
                            key={index}
                            course={course}
                        ></FacultyCard>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;