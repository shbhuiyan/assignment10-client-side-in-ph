import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const HomePage = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            {
                user?.email 
            }
        </div>
    );
};

export default HomePage;