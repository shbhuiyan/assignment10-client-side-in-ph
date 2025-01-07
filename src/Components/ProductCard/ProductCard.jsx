/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
AOS.init();

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductCard = ({ product }) => {

  const {darkTheme} = useContext(AuthContext)

    const {photo , itemName , category , price , rating , stock , _id} = product;

    
    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="p-4 border rounded-xl">
                <div className={`${darkTheme ? "dark-theme card shadow-xl border" : "card bg-base-100 shadow-xl border"}`}>
                  <figure className="h-96">
                    <img
                      src={photo}
                      alt={itemName} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold capitalize">{itemName}</h2>
                    <div className="grid grid-cols-2 gap-4 py-4 border-y-2 border-dashed my-2">
                        <p className="font-medium"><span className="text-lg font-bold">category : </span>{category}</p>
                        <p className="font-medium"><span className="text-lg font-bold">rating : </span>{rating}</p>
                        <p className="font-medium"><span className="text-lg font-bold">Available : </span>{stock}</p>
                        <p className="font-medium"><span className="text-lg font-bold">Price : $</span>{price}</p>
                    </div>
                    <div className="card-actions justify-end">
                      <Link to={`/details/${_id}`} className="btn btn-info">View Details</Link>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default ProductCard;