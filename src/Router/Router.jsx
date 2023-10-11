import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Carousel from '../Component/Carousel/Carousel';
import About from '../Pages/About/About';
import FacultyCard from '../Carts/FacultyCard/FacultyCard';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Header></Header>,
        children:([
            {
                path: '/',
                element:<Carousel></Carousel>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'faculty',
                element:<FacultyCard></FacultyCard>
            }

        ])
    }
])
export default router;