import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

//
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <MainPage/>,
            },
            {
                path: "/test", 
                element: <TestPage/>,
            }
        ]
    }
    
]);

const RouterComponent = () => {
    return (
        <RouterProvider router={router} />
    ); 
}
export default RouterComponent;