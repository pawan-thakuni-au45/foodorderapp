import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact'
// import Grocery from './components/Grocery';
import Body from './components/Body'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu';
import { Suspense } from 'react';
import { lazy } from 'react';
import CartPage from './components/CartPage';

 const Grocery=lazy(()=>import("./components/Grocery"))

 const approuter=createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,

    children:[
      {
      path:"/",
      element:<Body/>,
      
    },
    {
      path:"/about",
      element:<About/>,
      

    },
   
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    },
    {
    path:"/cartlist",
    element:<CartPage/>
  }
  
    
    
  
    ],
    errorElement:<Error/>,
  },
  
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={approuter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
