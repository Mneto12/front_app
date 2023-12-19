import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { PokeDetails } from "../pages/Details";
import ErrorMSG from "../components/ErrorMSG";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/:name',
                element: <PokeDetails />
            },
            {
                path: '/error',
                element: <ErrorMSG />
            }
        ]
    }
])