/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Blogsee from './pages/Blogsee.jsx';
import Home from './pages/Home.jsx';
import PostBlog from './pages/Dashboard/PostBlog.jsx';
import Authprobider from './Components/Authprobider.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:  <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {path:'/login',
       element:<Login/>    
      },
      {path:'/dashboard',
      element:<Dashboard/>    
     },
     {path:'/register',
     element:<Register/>    
    },
    {path:'/allblog',
    element:<Blogsee/>    
   },
   {
     path:'/addblog',
     element:<PostBlog/>
   }
    ]
      
       
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprobider>
       <RouterProvider router={router} />
       </Authprobider>
  </React.StrictMode>,
)
