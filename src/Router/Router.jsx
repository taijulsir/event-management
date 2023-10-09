import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../EroorPage/ErrorPage";
import ServiceDetails from "../Home/ServiceDetails";
import Gallery from "../Pages/Gallery";
import Blog from "../Pages/Blog";
import Booking from "../Pages/Booking";
import Login from "../Pages/Login";
import BlogDetails from "../Pages/BlogDetails";
import AboutUs from "../Pages/AboutUs";


const router = createBrowserRouter ([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/service.json')
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path:"/blog",
                element:<Blog></Blog>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: "/booking",
                element: <Booking></Booking>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            }

        ]
    }
])

export default router