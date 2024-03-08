
import {
    createBrowserRouter,
    
   } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/ManageItems/UpdateItem";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "menu",
          element: <Menu></Menu>,
        },
        {
            path: "shop/:category",
            element: <Shop></Shop>,
        },
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "register",
            element: <SignUp></SignUp>,
        },
        {
            path: "secret",
            element: <PrivateRoutes><Secret></Secret></PrivateRoutes>,
        },
      ],
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
          //normal user routes
            {
            path: "cart",
            element: <Cart></Cart>,
            },

            // admin only Routes
            {
              path: "addItems",
              element: <AdminRoute><AddItems></AddItems></AdminRoute>,
              },
            {
              path: "users",
              element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
              path: "manageItems",
              element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
            },
            {
              path: "updateItem/:id",
              element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
              loader: ({params}) => fetch(`http://localhost:8000/menu/${params.id}`),
            },

        ]
    },
   ]);


export default Router;