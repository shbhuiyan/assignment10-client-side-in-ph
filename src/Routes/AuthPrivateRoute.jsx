import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

// eslint-disable-next-line react/prop-types
const AuthPrivateRoute = ({children}) => {
  const { user , loading} = useContext(AuthContext);

        if(loading){
            return <Loader />
        }
        if(user && user?.email){
           return <Navigate to="/" />
        }else{
           return children;
        }
};

export default AuthPrivateRoute;
