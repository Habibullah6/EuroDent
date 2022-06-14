import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useAuth();
    return user?.displayName ? children : <Navigate to='/login' replace state={{from: location}} />


}

export default PrivateRoute;