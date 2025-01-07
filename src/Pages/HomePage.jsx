import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Partners from "../Components/Partners/Partners";
import Review from "../Components/Review/Review";
import Contact from "../Components/HomeLayeout/Contact/Contact";



const HomePage = () => {


    return (
        <div className="space-y-20">
            <Banner/>
            <Outlet/>
            <Review/>
            <Partners/>
            <Contact />
        </div>
    );
};

export default HomePage;