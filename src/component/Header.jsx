import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/food-1.jpeg"
import { FaBars } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";

const Header = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="navLogo">
                <img src={logo} alt="" />
            </Link>
            <ul className="nav_">
                <li><Link to="/profile">Zikrah </Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/author">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            <button className="navToggle-btn">
            <FaBars />
            <IoIosCheckboxOutline />
            </button>
        </div>
    </nav>
  )
}

export default Header   
