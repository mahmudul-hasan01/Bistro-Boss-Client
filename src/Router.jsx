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
import AllUsers from "./Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "./Dashboard/Admin/AddItems";
import ManageItems from "./Dashboard/Admin/ManageItems";
import UpdateItem from "./Dashboard/Admin/UpdateItem"
import Payment from "./Dashboard/Payment";
import PaymentHistory from "./Dashboard/User/PaymentHistory";

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
            // user
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // admin
            {
                path: 'allUsers',
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute> <AddItems></AddItems> </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
            },
            {
                path: 'UpdateItem/:id',
                element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menuItem/${params?.id}`)
            },
        ]
    }
]);