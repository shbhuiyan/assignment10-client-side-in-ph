import { data, Link, useLoaderData } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";

const AllEquipments = () => {

    const [showProduct , setShowProduct] = useState([])
    const allProducts = useLoaderData()

    useEffect(() => {
      setShowProduct(allProducts.map(product => product))
    },[allProducts])

    const handleSortBtn = () => {
      fetch('http://localhost:5000/products?sort=true')
      .then(res => res.json())
      .then(data => {
        setShowProduct(data);
      })
    } 

    return (
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center my-6 px-6">
          <h2 className="text-2xl font-bold">Sports Equipment</h2>
          <button onClick={handleSortBtn} className="btn btn-neutral text-lg">Sort by Price</button>
          </div>
          <div className="overflow-x-auto">
            <table className="hidden sm:table min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">Image</th>
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">Name</th>
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">Category</th>
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">In Stock</th>
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">Price</th>
                  <th className="text-left px-6 py-4 font-semibold text-lg text-gray-800">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    allProducts.length <= 0 ? <Loader/> : showProduct.map((item) => (
                        <tr key={item._id} className="border-t hover:bg-gray-50">
                          <td>
                            <img
                              className="w-16 h-16 border-2 rounded-lg"
                              src={item.photo}
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4 text-gray-700">{item.itemName}</td>
                          <td className="px-6 py-4 text-gray-700">{item.category}</td>
                          <td className="px-6 py-4 text-gray-700">{item.stock} P</td>
                          <td className="px-6 py-4 text-gray-700">{item.price} $</td>
                          <td className="px-6 py-4">
                            <Link
                              to={`/details/${item._id}`}
                              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      ))
                }
              </tbody>
            </table>
            
            {/* Mobile View */}
            <div className="block sm:hidden space-y-4">
                {
                    allProducts.length <= 0 ? <Loader/> : showProduct.map((item) => (
                        <div
                          key={item._id}
                          className="border border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                          <div className="flex space-x-4">
                            <img
                              className="w-16 h-16 border-2 rounded-lg"
                              src={item.photo}
                              alt={item.itemName}
                            />
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">
                                {item.itemName}
                              </h3>
                              <p className="text-sm text-gray-600">Category: {item.category}</p>
                              <p className="text-sm text-gray-600">In Stock: {item.stock} P</p>
                              <p className="text-sm text-gray-600">Price: {item.price} $</p>
                            </div>
                          </div>
                          <div className="mt-4 text-right">
                            <Link
                              to={`/details/${item._id}`}
                              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      ))
                }
            </div>
          </div>
        </div>

      );
    };

export default AllEquipments;