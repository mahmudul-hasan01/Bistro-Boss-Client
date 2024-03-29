/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import useAdmin from "./Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()

    if (loading || isLoading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;