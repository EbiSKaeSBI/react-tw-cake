import {createBrowserRouter} from 'react-router-dom';
import MainPage from '../pages/main-page.jsx';
import AboutUs from '../pages/about-us.jsx';
import Catalog from '../pages/catalog.jsx';
import Contact from '../pages/contacts.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
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