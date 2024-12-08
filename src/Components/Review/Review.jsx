import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Review = () => {
    return (
        <div className="space-y-20 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center"><span className="border-b-2 pb-3 border-blue-600">Our Customers Review</span></h1>
            <ReviewCard/>
            <Link to={'/review'} className="btn btn-active text-xl w-1/2">Give Review</Link>
        </div>
    );
};

export default Review;