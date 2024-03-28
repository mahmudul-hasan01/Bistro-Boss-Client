import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Dashboard/User/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivateRoute> <Order></Order> </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    }
]);