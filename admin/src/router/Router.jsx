import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../features/Home/Home";
import Auth from "../features/Auth/Pages/Auth";
import Login from "../features/Auth/Pages/Login";
import ForgotPassword from "../features/Auth/Pages/ForgotPassword";



const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/auth/",
                element: <Auth />,
                children: [
                    {
                        path: "/auth/login",
                        element: <Login />
                    },
                    {
                        path: "/auth/forgot-password",
                        element: <ForgotPassword />
                    }
                ]
            }
        ]
    }
])


export default router