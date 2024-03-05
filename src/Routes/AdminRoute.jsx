import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = (children) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdmin){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdminLoading){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default AdminRoute;