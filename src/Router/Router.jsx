import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Carousel from '../Component/Carousel/Carousel';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Header></Header>,
        children:([
            {
                path: '/',
                element:<Carousel></Carousel>
            }

        ])
    }
])
export default router;