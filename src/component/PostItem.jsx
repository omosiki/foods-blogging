import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
const PostItem = ({postID, category, title, description  , authorID, picture}) => {
  return (
    <article className="post">
        <div className="post_picture">
            <img src={picture} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/posts/${postID}`}>
            <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <div className="post_footer">
              <PostAuthor/>
              <Link to={`/posts/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
   