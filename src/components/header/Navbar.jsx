import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><header className='header'>
      <div><h1>
        Logo</h1></div>
    <div className="header_links">
      <Link to={"/"} >
        home
      </Link>
      <Link to={"/about"} >
        about
      </Link>
      <Link to={"/contact"} >
        contact
      </Link>
    </div>
    <div>
      <button>login</button>
    </div>
</header></div>
  )
}

export default Navbar