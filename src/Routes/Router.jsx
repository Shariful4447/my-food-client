
import {
    createBrowserRouter,
    
   } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        // {
        //   path: "Login",
        //   element: <Login/>,
        // },
      ],
    },
   ]);


export default Router;