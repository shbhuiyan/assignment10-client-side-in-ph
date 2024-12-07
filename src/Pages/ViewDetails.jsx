import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [productDetails , setProductDetails] = useState([])

    const {id} = useParams()
    const allProducts = useLoaderData()

    useEffect(()=> {
        const filteredDetails = allProducts.find(product => product._id === id)
        setProductDetails(filteredDetails);

    },[allProducts, id])

    const {photo , itemName , description , category , rating , stock , price} = productDetails

    return (
        <div className="card image-full max-w-4xl p-4 border-2 mx-auto shadow-xl my-10">
        <figure>
          <img className="w-full p-4" src={photo} alt={itemName} />
        </figure>
        <div className="card-body block my-auto space-y-10 text-center">
          <h2 className="text-6xl font-bold text-white">{itemName}</h2>
          <div className="text-lg font-medium text-white">
            <p>{description}</p>
            <div className="grid grid-cols-2 gap-4 py-4 my-2">
                <p className="font-medium"><span className="text-lg font-bold">category : </span>{category}</p>
                <p className="font-medium"><span className="text-lg font-bold">rating : </span>{rating}</p>
                <p className="font-medium"><span className="text-lg font-bold">Available : </span>{stock} P</p>
                <p className="font-medium"><span className="text-lg font-bold">Price : $</span>{price}</p>
            </div>
            <div className="card-actions justify-center">
                      <button className="btn btn-info">Buy Now</button>
                    </div>
          </div>
          </div>
          </div>
    );
};

export default ViewDetails;