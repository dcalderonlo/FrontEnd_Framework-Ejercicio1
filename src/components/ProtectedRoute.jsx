import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/RouteContext";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);
    
    if(!auth){
        return <Navigate to= '/login' />
    }

    return children ? children : <Outlet />;
}