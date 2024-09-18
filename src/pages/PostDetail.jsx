import React from 'react'
import PostAuthor from '../component/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from "../assets/food_2.jpeg"

const PostDetail = () => {
  return (
    <div className="post-detail">
      <div className='container post-detail__container'>
        <div className="post-detail__header">
        <PostAuthor/>
        <div className="post-detail__button">
        <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
        <Link to={`/posts/werwer/delete`} className="btn sm danger">Delete</Link>
        </div>
        </div>
      </div>
      <h1>This is the post title! </h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sint vero, nobis neque, in repudiandae adipisci aut placeat officiis laudantium tempora corrupti eveniet ut ipsa, delectus ducimus commodi! Accusantium amet ipsa, quibusdam labore iure fuga ex laborum, omnis nesciunt consequatur itaque eius, hic tempore. Delectus, cupiditate soluta. Fuga, natus expedita!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsam, molestias officia quis aut incidunt repudiandae corrupti necessitatibus temporibus non. Ipsam, fugiat molestias? Obcaecati praesentium repudiandae labore nam dignissimos, fugiat temporibus, sit suscipit expedita illo tenetur, blanditiis aspernatur possimus! Assumenda nulla laudantium quo illo vel unde, sequi quaerat qui architecto aut impedit in voluptatibus. Obcaecati.</p>
      
      
      
      </div>
  )
}

export default PostDetail
