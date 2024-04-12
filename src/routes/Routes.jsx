import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import News from "../page/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/news.json'),
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <News></News>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);

export default router;