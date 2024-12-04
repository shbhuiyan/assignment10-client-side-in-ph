import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../Pages/HomePage";
import AllEquipments from "../Pages/AllEquipments";
import Add from "../Pages/Add";
import MyList from "../Pages/MyList";
import Signin from "../Pages/Auth/Signin";
import Register from "../Pages/Auth/Register";
import AuthPrivateRoute from "./AuthPrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/equipments',
                element:<AllEquipments/>
            },
            {
                path:'/add',
                element:<Add/>
            },
            {
                path:'/myList',
                element:<MyList/>
            },
            {
                path:'/signIn',
                element:<AuthPrivateRoute><Signin/></AuthPrivateRoute>
            },
            {
                path:'/register',
                element:<AuthPrivateRoute><Register/></AuthPrivateRoute>
            },
        ]
    }
])

export default router;