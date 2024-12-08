import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ReviewField = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleReviewForm = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const review = form.get('review')
        const userEmail = form.get('userEmail')
        const userName = form.get('userName')
        const photo = form.get('photo')

        const newReview = { userEmail , userName , photo , review }
        console.log(newReview);

        fetch('http://localhost:5000/products' , {
            method:'POST',
            headers:{
              "content-type": "application/json"
            },
            body:JSON.stringify(newReview)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              toast.success("Thanks For Your Feedback" , {position:"top-center"});
              navigate('/')
            }
          })

        e.target.reset();
    }


    return (
        <form onSubmit={handleReviewForm} className="space-y-6 max-w-4xl mx-auto my-20 px-4">
            <div>
            <label className="block text-gray-700 font-bold mb-2 text-4xl">Drop Your Feedback</label>
            <textarea
              name="review"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="freely drop your feedback"
              required
              rows="4"
            ></textarea>
          </div>

          {/* User photo (read-only) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Photo URL</label>
            <input
              name="photo"
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 font-medium cursor-not-allowed"
              value={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              readOnly
            />
          </div>

          {/* User Email (read-only) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">User Email</label>
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
            <label className="block text-gray-700 font-medium mb-2">User Name</label>
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
    );
};

export default ReviewField;