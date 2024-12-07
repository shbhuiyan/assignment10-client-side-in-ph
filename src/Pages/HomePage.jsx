import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Partners from "../Components/Partners/Partners";
import Review from "../Components/Review/Review";



const HomePage = () => {


    return (
        <div className="space-y-20">
            <Banner/>
            <Outlet/>
            <Review/>
            <Partners/>
            <Footer/>
        </div>
    );
};

export default HomePage;