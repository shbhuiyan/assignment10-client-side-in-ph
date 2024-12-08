import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Add = () => {
  const { user } = useContext(AuthContext);

  const handleProductAdd = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const userEmail = form.get("userEmail");
    const userName = form.get("userName");
    const photo = form.get("photo");
    const itemName = form.get("itemName");
    const category = form.get("category");
    const description = form.get("description");
    const price = form.get("price");
    const rating = form.get("rating");
    const customize = form.get("customize");
    const processing = form.get("processing");
    const stock = form.get("stock");

    const newProduct = {
      userEmail,
      userName,
      photo,
      itemName,
      category,
      description,
      price,
      rating,
      customize,
      processing,
      stock,
    };

    fetch("https://sports-hub-server-side.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congrats!",
            text: "Successfully added your product",
            icon: "success",
          });
        }
      });
    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-5xl font-bold mb-14 text-center">Add Product</h1>
      <form onSubmit={handleProductAdd} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Photo URL
          </label>
          <input
            name="photo"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter photo URL"
            required
          />
        </div>

        {/* Item Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Item Name
          </label>
          <input
            name="itemName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter item name"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Category Name
          </label>
          <input
            name="category"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product description"
            required
            rows="4"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Price ($)
          </label>
          <input
            name="price"
            type="number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Rating</label>
          <input
            name="rating"
            type="number"
            step="0.1"
            max="5"
            min="0"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter rating (0-5)"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Customization
          </label>
          <input
            name="customize"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter customization details"
            required
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Processing Time (days)
          </label>
          <input
            name="processing"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter delivery time"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Stock Status
          </label>
          <input
            name="stock"
            type="number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter available product quantity"
            required
          />
        </div>

        {/* User Email (read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            User Email
          </label>
          <input
            name="userEmail"
            type="email"
            className="w-full p-2 border border-gray-300 rounded bg-gray-200 font-medium cursor-not-allowed"
            value={user?.email}
            readOnly
          />
        </div>

        {/* User Name (read-only) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            User Name
          </label>
          <input
            name="userName"
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
