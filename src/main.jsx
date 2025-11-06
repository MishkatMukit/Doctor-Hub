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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:"/blogs",
        Component: Blogs
      },
      {
        path:"/bookings",
        Component: Bookings
      },
      {
        path:"/contact",
        Component: Contact
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
