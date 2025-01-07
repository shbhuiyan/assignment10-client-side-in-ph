import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const About = () => {

    const {darkTheme} = useContext(AuthContext)

  return (
    <div className={darkTheme ? "dark-theme py-12 px-4 sm:px-6 lg:px-8" : "bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          About Us
        </h1>
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Sports Hub</span>, your ultimate destination for premium sports equipment and accessories. 
          We are passionate about helping athletes and fitness enthusiasts achieve their best performance with high-quality, reliable gear.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="">
            Our mission is to provide top-notch sports products that inspire confidence and enhance performance for athletes of all levels.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="">
            We envision a world where every athlete, from amateur to professional, has access to the best gear to unlock their full potential.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Our Commitment</h2>
          <p className="">
            We are committed to exceptional customer service, offering premium products, fast shipping, and reliable support for all your sporting needs.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="max-w-xl mx-auto mb-6">
          We offer a curated selection of top-quality products from trusted brands. Our team of sports enthusiasts ensures you get expert advice and the best value for your money.
        </p>
      </div>
    </div>
  );
};

export default About;
