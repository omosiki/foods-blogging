import React from 'react'
import { Link } from 'react-router-dom'
import Avater from "../assets/food_8.jpg"
const PostAuthor = () => {
  return (
    <Link to={`posts/users/sdfsdf`} className='post_author'>
      <div className="post__author-avater">
      <img src={Avater} alt="" />
      </div>
      <div className="post__author-detail">
        <h5>By: Abdullateef Zikrah</h5>
        <small>Just Now!</small>
      </div>

    </Link>
  )
}

export default PostAuthor
