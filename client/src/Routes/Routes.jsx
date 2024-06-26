import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main.jsx';
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            }
        ]
    }
])
