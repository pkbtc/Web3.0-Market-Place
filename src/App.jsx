import { useState,useEffect } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Addproducts from './components/Addproducts';
import HandleWallet from './components/HandleWallet';
import Products from './components/Products';
import Home from './components/Home';
import BuyProduct from './components/BuyProduct';

function App() {
  
  const router = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/addproducts', element:<Addproducts/>},
    {path:'/buy', element:<BuyProduct/>},
    {path:'/products', element:<Products />},


    
  ])
  


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
