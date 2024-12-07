import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const MyList = () => {

    const [products , setProducts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[user?.email])




    return (
            <div className="max-w-5xl mx-auto my-16 space-y-4">
                {
                    products.length <= 0 ? <Loader/> : products.map((item) => (
                        <div key={item._id} className="p-2 border-2 rounded-lg">
                            <div
                          className="border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-center backdrop-blur-md"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              className="w-16 h-16 border-2 rounded-lg"
                              src={item.photo}
                              alt={item.itemName}
                            />
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">
                                {item.itemName}
                              </h3>
                              <p className="text-gray-600"><span className="font-bold">Category:</span> {item.category}</p>
                              <p className="text-gray-600"><span className="font-bold">In Stock:</span> {item.stock}P</p>
                            </div>
                          </div>
                            <div className="flex flex-col gap-2">
                            <Link to={'/update'} className="btn btn-accent">Update <GrDocumentUpdate className="text-lg"/></Link>
                            <Link className="btn btn-error">Delete <MdOutlineDeleteForever className="text-xl"/></Link>
                            </div>
                        </div>
                        </div>
                      ))
                }
            </div>
    );
};

export default MyList;