import React from 'react'
import { Link } from 'react-router-dom';
import { FaHeartCircleCheck } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer__categories'>
        <li><Link to="posts/categories/:category">Agriculture</Link></li>  
        <li><Link to="posts/categories/Business">Business</Link></li>
        <li><Link to="posts/categories/Education">Education</Link></li>
        <li><Link to="posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="posts/categories/Art">Art</Link></li>
        <li><Link to="posts/categories/Investment">Investment</Link></li>
        <li> <Link to="posts/categories/Uncategories">Uncategories</Link></li>
      </ul>
      <div className='footer__copyright'>
        <small>All right Reserved &copy; Copyright, Zikrah <FaHeartCircleCheck className='footer-icon' /></small>
      </div>
    </div>
  )
}

export default Footer
