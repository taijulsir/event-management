import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../EroorPage/ErrorPage";
import ServiceDetails from "../Home/ServiceDetails";

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
            }
        ]
    }
])

export default router