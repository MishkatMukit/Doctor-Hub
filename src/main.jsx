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
import { ToastContainer, toast } from 'react-toastify';
import { AppointmentProvider } from './Context/AppointmentContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,

      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/bookings",
        Component: Bookings
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/details/:id",
        loader: () => fetch("/doctors.json"),
        Component: Details
      }
    ]
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
