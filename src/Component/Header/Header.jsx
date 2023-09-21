import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import About from '../../Pages/About/About';

const Header = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <About></About>
        </div>
    );
};

export default Header;