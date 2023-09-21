import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Carousel from '../Component/Carousel/Carousel';
import About from '../Pages/About/About';

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
            }

        ])
    }
])
export default router;