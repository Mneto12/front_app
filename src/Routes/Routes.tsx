import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

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
                path: '/:pocketId',
                element: <h1>Detalle del pokemon</h1>
            }
        ]
    }
])