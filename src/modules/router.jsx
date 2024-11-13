import {createBrowserRouter} from 'react-router-dom';
import Mainpage from '../pages/mainpage.jsx';
import AboutUs from '../pages/AboutUs.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainpage />,
    },
    {
        path: '/about',
        element: <AboutUs />
    }
])