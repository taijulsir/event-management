import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../EroorPage/ErrorPage";
import ServiceDetails from "../Home/ServiceDetails";
import Gallery from "../Pages/Gallery";
import Blog from "../Pages/Blog";
import Booking from "../Pages/Booking";
import Portfolio from "../Pages/Portfolio";
import Login from "../Pages/Login";


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
                element:<Blog></Blog>
            },
            {
                path: "/booking",
                element: <Booking></Booking>
            },
            {
                path: "/portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "/login",
                element: <Login></Login>
            }

        ]
    }
])

export default router