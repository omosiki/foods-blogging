import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPages = () => {
  return (
    <section className='error-page'>
      <div className="center">
        <Link to="/" className="btn primary">Go back home</Link>
        <h2>Page not found</h2>
      </div>
    </section>
  )
}

export default ErrorPages

