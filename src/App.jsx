import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Navbar from './assets/Compondnts/navebar/Navbar';
import Layout from './assets/Compondnts/Layout/Layout';
import Home from './assets/Compondnts/Home/Home';
import Portfolio from './assets/Compondnts/Portfolio/Portfolio';
import Contact from './assets/Compondnts/Contact/Contact'
import About from './assets/Compondnts/About/About';

const router = createHashRouter([
  {path: "",element: <Layout/>, children: [
    {path: "", element: <Home/>},
    {path: "home", element: <Home/>},
    {path: "about", element: <About/>},
    {path: "portfolio", element: <Portfolio/>},
    {path: "contact", element: <Contact/>},
    {path: "*", element: <Home/>},
  ]},
]);

export default function App() {
  return (
    <RouterProvider router={ router }/>
  )
}
