import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="space-y-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center"><span className="border-b-2 pb-3 border-blue-600">Our Official Partners</span></h1>
            <Marquee className="bg-base-100 p-4 border-y ">
                <img className="max-w-20 mr-60" src="https://i.postimg.cc/B66RCdjP/adidas.png" alt="" />
                <img className="max-w-20 mr-60" src="https://i.postimg.cc/SN6qjbCm/Air-Jordan-Symbol.png" alt="" />
                <img className="max-w-20 mr-60" src="https://i.postimg.cc/ryW2Y2h5/nb.png" alt="" />
                <img className="max-w-20 mr-60" src="https://i.postimg.cc/fRW4LtMv/Nike-Logo.png" alt="" />
                <img className="max-w-20 mr-60" src="https://i.postimg.cc/R0qj7k66/puma.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default Partners;