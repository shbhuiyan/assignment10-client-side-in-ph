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
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>,
                children:[
                    {
                        path:'/',
                        element:<OurProducts/>,
                        loader:()=> fetch('http://localhost:5000/products'),
                        children:[
                            {
                                path:'/',
                                element:<AllProducts/>,
                                loader:()=> fetch('http://localhost:5000/products?limit=true'),
                            },
                            {
                                path:'/category/:category',
                                element:<RenderByCategory/>,
                                loader:()=> fetch('http://localhost:5000/products'),
                            },
                        ]
                    }
                ]
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><ViewDetails/></PrivateRoute>,
                loader:()=> fetch('http://localhost:5000/products'),
            },
            {
                path:'/equipments',
                element:<AllEquipments/>,
                loader:()=> fetch('http://localhost:5000/products'),
            },
            {
                path:'/add',
                element:<PrivateRoute><Add/></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/product/${params.id}`),
            },
            {
                path:'/myList',
                element:<PrivateRoute><MyList/></PrivateRoute>,
            },
            {
                path:'/signIn',
                element:<Signin/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/review',
                element:<PrivateRoute><ReviewField/></PrivateRoute>
            },
        ]
        
    }
])

export default router;