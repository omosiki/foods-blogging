import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


import Layout from "./component/Layout";
import ErrorPages from "./pages/ErrorPages";
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import Lougout from './pages/Lougout'
// import DeletePost from './pages/DeletePost.jsx'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import CreatePost from './pages/CreatePost'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CategoryPost from './pages/CategoryPost'
import AuthorPosts from './pages/AuthorPosts'



const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>,
    errorElement: <ErrorPages/>,

    children: [
      { index: true, element: <Home/> },
      {path: "posts/:id", element: <PostDetail/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "author", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "posts/categories/:category", element: <CategoryPost/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "logout", element: <Lougout/>},

    ]
  }
]) 

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <App />
    <RouterProvider  router={router}/>
  </StrictMode>,
)
