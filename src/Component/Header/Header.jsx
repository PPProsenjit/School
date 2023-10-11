import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import About from '../../Pages/About/About';
import Courses from '../../Pages/Courses/Courses';

const Header = () => {
    return (
        <div className='mx-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <About></About>
            <Courses></Courses>
        </div>
    );
};

export default Header;