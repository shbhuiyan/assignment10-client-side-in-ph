import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Add = () => {

    
    const {user} = useContext(AuthContext)


    
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-5xl font-bold mb-14 text-center">Add Product</h1>
        <form className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter photo URL"
            />
          </div>
  
          {/* Item Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Item Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter item name"
            />
          </div>
  
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter category name"
            />
          </div>
  
          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product description"
              rows="4"
            ></textarea>
          </div>
  
          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price"
            />
          </div>
  
          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              max="5"
              min="0"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter rating (0-5)"
            />
          </div>
  
          {/* Customization */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Customization</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter customization details"
            />
          </div>
  
          {/* Processing Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Processing Time (days)</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter delivery time"
            />
          </div>
  
          {/* Stock Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Stock Status</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter available product quantity"
            />
          </div>
  
          {/* User Email (read-only) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 font-medium cursor-not-allowed"
              value={user?.email}
              readOnly
            />
          </div>
  
          {/* User Name (read-only) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 font-medium cursor-not-allowed"
              value={user?.displayName}
              readOnly
            />
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Add;