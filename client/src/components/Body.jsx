import React from 'react'
import Browse from './Browse'; 
import Login from "./Login"; 
import Header from "./Header"; 
import SignUp from './SignUp';
 
 import { useDispatch } from 'react-redux';


import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"; 

export const router = createBrowserRouter([
      {path:"/", element:<Login/>}, 
       {path:"/signup", element:<SignUp/> },
      {path: "/browse", element: <Browse/>}
     
   
    ]); 

function Body() {
  const dispatch  = useDispatch();
 
   
  return (
     
      <RouterProvider router={router}>

      </RouterProvider>
     
  )
}

export default Body