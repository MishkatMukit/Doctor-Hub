import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx'
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Bookings from './Pages/Bookings/Bookings.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import { Suspense } from 'react';
import Details from './Pages/DoctorDetails/DoctorDetails.jsx';
import { ToastContainer} from 'react-toastify';
import { AppointmentProvider } from './Context/AppointmentContext.jsx';
import Error from './Pages/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,

    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 300));
          const response = await fetch('/doctors.json');
          return response.json();
        },
        element: <Home></Home>

      },
      {
        path: "/blogs",

        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 300));
          const response = await fetch('/blogs.json');
          return response.json();
        },
        Component: Blogs,
      },
      {
        path: "/bookings",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 300));
          return null;
        },
        Component: Bookings
      },
      {
        path: "/contact",
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 300));
          return null;
        },
        Component: Contact
      },
      {
        path: "/details/:id",
        loader: async () => {
          const response = await fetch("/doctors.json");
          return response.json();
        },
        Component: Details
      }

    ]
  },
  {
    path: '*',
    Component: Error
  }
])
createRoot(document.getElementById('root')).render(
  <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
    <AppointmentProvider>
      <ToastContainer className='text-left' />
      <RouterProvider router={router} />
    </AppointmentProvider>

  </Suspense>
)
