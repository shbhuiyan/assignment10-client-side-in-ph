import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AllEquipments from "../Pages/AllEquipments";
import Add from "../Pages/Add";
import MyList from "../Pages/MyList";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";
import OurProducts from "../Components/OurProducts/OurProducts";
import AllProducts from "../Components/HomeLayeout/AllProducts";
import RenderByCategory from "../Components/HomeLayeout/RenderByCategory";
import ViewDetails from "../Pages/ViewDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import ReviewField from "../Pages/ReviewField";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          fetch("https://sports-hub-server-side.vercel.app/usersReview"),
        children: [
          {
            path: "/",
            element: <OurProducts />,
            loader: () =>
              fetch("https://sports-hub-server-side.vercel.app/products"),
            children: [
              {
                path: "/",
                element: <AllProducts />,
                loader: () =>
                  fetch(
                    "https://sports-hub-server-side.vercel.app/products?limit=true"
                  ),
              },
              {
                path: "/category/:category",
                element: <RenderByCategory />,
                loader: () =>
                  fetch("https://sports-hub-server-side.vercel.app/products"),
              },
            ],
          },
        ],
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://sports-hub-server-side.vercel.app/products"),
      },
      {
        path: "/equipments",
        element: <AllEquipments />,
        loader: () =>
          fetch("https://sports-hub-server-side.vercel.app/products"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sports-hub-server-side.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/review",
        element:<PrivateRoute><ReviewField /></PrivateRoute>
      },
    ],
  },
]);

export default router;
