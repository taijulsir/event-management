import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../EroorPage/ErrorPage";

const router = createBrowserRouter ([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router