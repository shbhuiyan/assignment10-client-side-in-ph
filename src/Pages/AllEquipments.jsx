import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";

const AllEquipments = () => {
  const [showProduct, setShowProduct] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
    setShowProduct(allProducts.map((product) => product));
  }, [allProducts]);

  const handleSortBtn = () => {
    fetch("https://sports-hub-server-side.vercel.app/products?sort=true")
      .then((res) => res.json())
      .then((data) => {
        setShowProduct(data);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center my-6 px-6">
        <h2 className="text-2xl font-bold">Sports Equipment</h2>
        <button onClick={handleSortBtn} className="btn btn-neutral text-lg">
          Sort by Price
        </button>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {
                showProduct.map(product => <ProductCard key={product._id} product={product} />)
            }
            
        </div>
    </div>
  );
};

export default AllEquipments;
