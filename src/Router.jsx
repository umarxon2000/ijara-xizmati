import React from 'react'
import Main from "./pages/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Auth from './pages/Auth'
import Profile from './pages/Profile'

function Router() {

    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main />,
        },
        {
          path: "/about",
          element:<About/>,
        },
        {
          path: "/contact",
          element:<Contact/>,
        },
        {
            path: "/auth",
            element:<Auth/>,
          },
          {
            path: "/profile",
            element:<Profile/>,
          },
      ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Router