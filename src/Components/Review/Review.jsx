import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Review = () => {

    const usersReview = useLoaderData()

  return (
    <div className="my-20 space-y-10">
      <h1 className="text-4xl font-bold text-center"><span className="border-b-2 pb-3 border-blue-600">Our Customers Review</span></h1>

      {/* Review Card */}
      <div className="max-w-4xl mx-auto p-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
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
    </div>
  );
};

export default Review;