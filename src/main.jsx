import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Compress from './pages/Compress'
import Upscale from './pages/Upscale'
import Home from './pages/Home'
import About from './pages/About'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/compress",
    element : <Compress/>
  },
  {
    path : "/upscale",
    element : <Upscale/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)