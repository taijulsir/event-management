const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");
const { default: Home } = require("../Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:  <Home></Home>
            }
        ]
    }
]);

export default router;