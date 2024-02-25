import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
 } from "react-router-dom";
import Router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';


 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-2xl mx-auto'>
          <RouterProvider router={Router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
