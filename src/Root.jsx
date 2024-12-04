import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="container md:w-11/12 mx-auto px-4">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;