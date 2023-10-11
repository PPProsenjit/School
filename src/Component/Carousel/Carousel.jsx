import React, { useEffect, useState } from 'react';
import navImg1 from '../../../images/Nav/cover1.jpg'
import navImg2 from '../../../images/Nav/cover2.jpg'
import navImg3 from '../../../images/Nav/cover3.jpg'
const Carousel = () => {

    const images = [
        navImg1,
        navImg2,
        navImg3
    ]

    const [backgroundImage, setBackgroundImage] = useState(images[0])

    useEffect(() => {
        let currentIndex = 0;

        const changeBackgroundImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            setBackgroundImage(images[currentIndex])
        }

        const interval = setInterval(changeBackgroundImage, 5000)
        return () => {
            clearInterval(interval);
        }
    },[])

    return (
        <div className='overflow-hidden'>
            <div className=' bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})`, transition: '1s' }}>
                <div className='h-[800px] flex align-middle items-center  bg-black bg-opacity-50' >
                    {/* <div className='absolute inset-0 bg-black bg-opacity-50'></div> */}
                    <div className='m-[30%] text-white relative z-10 p-18'>
                        <h3 className='text-2xl' >Welcome To Study</h3>
                        <h1 className='text-5xl '>The Best Learning Institution</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga, quos architecto dolorum dignissimos quod magni quam voluptatem molestias numquam odit in sit repudiandae sunt saepe illum. Ratione, ex mollitia!</p>
                        <button className='border rounded-md p-3 m-2 hover:bg-yellow-600'>VIEW COURSES</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;