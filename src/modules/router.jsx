import {createBrowserRouter} from 'react-router-dom';
import Mainpage from '../pages/mainpage.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Catalog from '../pages/Catalog.jsx';
import Contact from '../pages/Contacts.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainpage />,
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/contacts',
        element: <Contact />
    }
])