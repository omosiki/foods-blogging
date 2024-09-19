import React, { useState } from 'react'
import Avater1 from "../assets/avater1.webp"
import Avater2 from '../assets/avater2.webp'
import Avater3 from "../assets/avater3.webp"
import Avater4 from "../assets/avater4.jpeg"
import Avater5 from "../assets/avater5.webp"
import { Link } from 'react-router-dom'

const authorData = [
{id: 1, avater: Avater1, name: "Abdullateef sikirat", posts: 2,},
{id: 1, avater: Avater2, name: "Omolola", posts: 2,},
{id: 1, avater: Avater3, name: "Ummi", posts: 3,},
{id: 1, avater: Avater4, name: "Al-ameen", posts: 1,},
{id: 1, avater: Avater5, name: "Idris", posts: 1,}
]

const Authors = () => {
  const [author, setAuthor] = useState(authorData)
  return (
    <section className='authors'>
      {author.length > 0 ? <div className='container author__container'>
        {
          author.map(({id, avater, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avater">
                <img src={avater} alt={`image of ${name}` } />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            
          
            </Link>
          })
        
        
        }

      </div> : <h2 className='center'>No author found</h2>}
    </section>
  )
}

export default Authors
