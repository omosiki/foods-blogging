import React, { useState } from 'react'
import { Siki_post } from '../data'
import PostItem from '../component/PostItem'


const CategoryPost = () => {
  const [posts, setPosts] = useState(Siki_post)
  return (
    <section className='posts'> 
    {posts.length > 0 ? <div className=" container posts-container">
        {
            posts.map(({id,  thumbnail, category,title,desc ,authorID}) =>
            <PostItem key={id}  postID={id}  thumbnail={ thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
      </div> : <h2 className='center'>No post found</h2>}

    </section>
  )
}

export default CategoryPost

