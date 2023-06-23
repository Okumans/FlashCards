import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Auth/loginPage.tsx'
import Register from './Auth/registerPage.tsx'
import Create from './CreatePage/createPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>
  },
  {
    path: "/login",
    element: <><Login/></>
  },
  {
    path: "/register",
    element: <><Register/></>
  },
  {
    path: "/create",
    element: <><Create/></>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
