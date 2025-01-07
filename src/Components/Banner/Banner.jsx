import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Banner = () => {
    return (
            <>
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={2000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {/* slider - 1 */}
                    <SwiperSlide>
                        <div className="bg-hero-1 bg-no-repeat bg-center bg-cover rounded-md">
                            <div className=" text-white text-center px-10 p-48 rounded-md bg-gradient-to-t from-black/75 to-black/75 space-y-10">
                                <h1 className="text-5xl font-bold">Gear Up for Every Game!</h1>
                                <p className="text-lg font-medium text-gray-200">Discover the best in sports accessories, from gear to apparel.</p>
                                <button><a href="#allProducts" className="text-xl font-bold px-6 py-2 border-2 hover:bg-transparent hover:text-white border-blue-500 rounded-md bg-blue-500 text-black duration-500">Shop Now</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider - 2 */}
                    <SwiperSlide>
                        <div className="bg-hero-2 bg-no-repeat bg-center bg-cover rounded-md">
                            <div className=" text-white text-center px-10 rounded-md p-48 bg-gradient-to-t from-black/75 to-black/75 space-y-10">
                                <h1 className="text-5xl font-bold">Play Hard, Shop Smart!</h1>
                                <p className="text-lg font-medium text-gray-200">Your one-stop store for all sports equipment and apparel.</p>
                                <button><a href="#allProducts" className="text-xl font-bold px-6 py-2 border-2 hover:bg-transparent hover:text-white border-blue-500 rounded-md bg-blue-500 text-black duration-500">Explore Now</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider - 3 */}
                    <SwiperSlide>
                        <div className="bg-hero-3 bg-no-repeat bg-center bg-cover rounded-md">
                            <div className=" text-white text-center px-10 rounded-md p-48 bg-gradient-to-t from-black/75 to-black/75 space-y-10">
                                <h1 className="text-5xl font-bold">Fuel Your Passion for Sports!</h1>
                                <p className="text-lg font-medium text-gray-200">Premium gear for champions at unbeatable prices.</p>
                                <button><a href="#allProducts" className="text-xl font-bold px-6 py-2 border-2 hover:bg-transparent hover:text-white border-blue-500 rounded-md bg-blue-500 text-black duration-500">Start Shopping Today</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider - 4 */}
                    <SwiperSlide>
                        <div className="bg-hero-4 bg-no-repeat bg-center bg-cover rounded-md">
                            <div className=" text-white text-center px-10 rounded-md p-48 bg-gradient-to-t from-black/75 to-black/75 space-y-10">
                                <h1 className="text-5xl font-bold">Elevate Your Game!</h1>
                                <p className="text-lg font-medium text-gray-200">Shop top-quality accessories for every sport, all in one place.</p>
                                <button><a href="#allProducts" className="text-xl font-bold px-6 py-2 border-2 hover:bg-transparent hover:text-white border-blue-500 rounded-md bg-blue-500 text-black duration-500">Browse Sports Essentials</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    
              </Swiper>
            </>
    );
};

export default Banner;