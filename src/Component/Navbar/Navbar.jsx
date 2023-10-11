import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    const items = [
        <Link to='/'>HOME</Link>,
        <Link to='/courses'>COURSES</Link>,
        <Link to='/event'>EVENT</Link>,
        <Link to='/gallery'>GALLERY</Link>,
        <Link to='/pages'>PAGES</Link>,
        <Link to='/news'>NEWS</Link>,
        <Link to='/contact'>CONTACT</Link>,
    ]
    return (
        <div style={{position:'relative'}}>
            <div className='p-10 rounded-md bg-slate-300 text-xl' style={{'display':'flex', 'justifyContent': 'space-between', position:'sticky'}}>
            <div>STUDY</div>
            <div className='items' style={{'display':'flex' }}>
                {
                    items.map((item, index) =>
                        <li key={index}>{item}</li>
                        
                        )
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;