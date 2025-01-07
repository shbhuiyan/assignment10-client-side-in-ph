import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Review = () => {

    const usersReview = useLoaderData()

  return (
    <div className="my-20 space-y-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center"><span className="border-b-2 pb-3 px-6 border-blue-600">Our Customers Review</span></h1>

      {/* Review Card */}
      <div className="max-w-4xl mx-auto p-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            675:{
              slidesPerView: 2
            }}
          }
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Autoplay, Pagination]}
        >
          {
            usersReview.map(singleReview => (
                <SwiperSlide key={singleReview._id}>
                    <ReviewCard singleReview={singleReview} />
                </SwiperSlide>
            ))
          }

        </Swiper>
        {/* Pagination */}
        <div className="custom-pagination mt-6 flex justify-center space-x-4"></div>
      </div>
      <Link to={'/review'} data-tooltip-id="user-tooltip"
              data-tooltip-place="top"
              data-tooltip-variant="info" data-tooltip-content={"Click this button to drop your review"} className="btn btn-neutral w-1/2 md:w-1/3 text-base">Give Us Your Feedback</Link>
    </div>
  );
};

export default Review;