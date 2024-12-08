import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import Swal from "sweetalert2";

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

    const handleProductDelete = (id) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/product/${id}` , {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
          });
          setProducts(products.filter(product => product._id !== id))
            }
          })
        }
      });

    }


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
                            <Link to={`/update/${item._id}`} className="btn btn-accent">Update <GrDocumentUpdate className="text-lg"/></Link>
                            <Link className="btn btn-error" onClick={() => handleProductDelete (item._id)}>Delete <MdOutlineDeleteForever className="text-xl"/></Link>
                            </div>
                        </div>
                        </div>
                      ))
                }
            </div>
    );
};

export default MyList;