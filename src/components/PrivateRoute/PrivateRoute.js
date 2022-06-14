import { Navigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

const PrivateRoute = ({ children}) => {

    const {user} = useAuth();

    return  user.displayName ? children: <Navigate to='/login'/>


}

export default PrivateRoute;