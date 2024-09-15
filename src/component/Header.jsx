import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../assets/food-1.jpeg"
// import { FaBars } from "react-icons/fa6";
import { FaForumbee } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo'>
              <FaForumbee  className="navbar logo"/>
            </Link>
            <ul className="nav_meun">
                <li><Link to="/profile">Zikrah </Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/author">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            <button className="navToggle-btn">

            <IoCloseCircleOutline />
            {/* <FaBars /> */}
            </button>
        </div>
    </nav>
  )
}

export default Header   
