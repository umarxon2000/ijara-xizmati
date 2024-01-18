import React from 'react'
import Main from "./pages/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {createBrowserRouter , RouterProvider} from "react-router-dom"

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
      ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Router