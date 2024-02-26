import "./NavbarStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import Sanicon from "../route/Sanicon"

function Navbar() {
  return (
    <div className="header">
      <Link to="/"><h1>DailyHire.</h1></Link>
      <ul className="nav-menu">
       <li id="loginbtn">
        <Link to="/">Login</Link>
       </li>
       <li>
        <Link to="/">Sign up</Link>
       </li>
       <li to="/"><Sanicon/></li>
      </ul>
      
    </div>
  )
}

export default Navbar
