import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github  from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
     {
      path:"about",
      element:<About/>
     },
     {
      path :"contact",
      element : <Contact/>
     },
     {
      path : "github",
      element : <Github/>,
      
     },
     {
      path:"user/:userid",
      element : <User/> 
      
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
)
