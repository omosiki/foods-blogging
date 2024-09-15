import React, { useState } from 'react'
import food1 from "../assets/food-1.jpeg"
import food2 from "../assets/food_4.jpeg"
import food3 from "../assets/food_4.jpeg"
import food5 from "../assets/food_6.jpeg"
import food7 from "../assets/food_8.jpg"
import PostItem from './PostItem'

const Siki_post = [
  {
    id: "1",
    picture: food1,
    category: "Education",
    title: "This is the very first post of the blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi necessitatibus nulla repudiandae veniam quas ipsa nostrum, quam, earum, perspiciatis deserunt sequi praesentium qui delectus recusandae.",
    authorID: 2
  },
  {id: "2",
    picture: food2,
    category: "Education",
    title: "This is the very first post of the blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi necessitatibus nulla repudiandae veniam quas ipsa nostrum, quam, earum, perspiciatis deserunt sequi praesentium qui delectus recusandae.",
    authorID: 3},
  {id: "3",
    picture: food3,
    category: "Education",
    title: "This is the very first post of the blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi necessitatibus nulla repudiandae veniam quas ipsa nostrum, quam, earum, perspiciatis deserunt sequi praesentium qui delectus recusandae.",
    authorID: 4},
  {id: "4",
    picture: food5,
    category: "Education",
    title: "This is the very first post of the blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi necessitatibus nulla repudiandae veniam quas ipsa nostrum, quam, earum, perspiciatis deserunt sequi praesentium qui delectus recusandae.",
    authorID: 5},
  // {id: "5",
  //   picture: food7,
  //   category: "Education",
  //   title: "This is the very first post of the blog",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi necessitatibus nulla repudiandae veniam quas ipsa nostrum, quam, earum, perspiciatis deserunt sequi praesentium qui delectus recusandae.",
  //   authorID: 6}
]








const Posts = () => {
  const [posts, setPosts] =useState(Siki_post)
  return (
    <section className='posts'>
       <div className=" container posts_container">
        {
            posts.map(({id,picture, category,title,desc ,authorID}) =>
            <PostItem key={id}  postID={id}picture={picture} category={category} title={title} description={desc} authorID={authorID}/>)
        }
      </div>

    </section>
  )
}
// const Posts = ({ posts }) => {
//   return (
//       <section>
//           {posts.map((post) => (
//               <Posts key={post.id} {...post} />
//           ))}
//       </section>
//   );
// };


export default Posts
