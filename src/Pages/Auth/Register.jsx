import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {setUser , createUser , google} = useContext(AuthContext)


  const handleRegisterForm = e => {
    e.preventDefault()

    const form = new FormData(e.target)
    // const name = form.get("name")
    const email = form.get("email")
    const password = form.get("password")

    createUser(email , password)
    .then(result => {
      const user = result.user;
      setUser(user)
    })
    .catch(err => {
      console.log("Error creating user:", err);
    })
    
  }

  const handleGoogleLogin = e => {
    e.preventDefault()

    google()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      console.log("ERROR" , err);
    })

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleRegisterForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm text-sm font-medium"
        >
          Register
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm text-sm font-medium"
      >
        Register with Google
      </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-blue-600 hover:underline font-medium"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

  

export default Register;