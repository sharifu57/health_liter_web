import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import HomePage from "../pages/navigation/home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    },
])