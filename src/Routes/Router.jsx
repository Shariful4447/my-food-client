
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
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";

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
            path: "userHome",
            element: <UserHome></UserHome>,
            },
            {
            path: "cart",
            element: <Cart></Cart>,
            },
            {
              path: "payment",
              element: <Payment></Payment>,
            },
            {
              path: "paymentHistory",
              element: <PaymentHistory></PaymentHistory>,
            },

            // admin only Routes
            {
              path: "adminHome",
              element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
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