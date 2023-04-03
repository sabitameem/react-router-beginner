import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetail/PostDetails';


// const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
  

// ])

const router =createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/post/:postId',
        element: <PostDetails></PostDetails>,
        loader :({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/posts',
        element : <Posts></Posts>,
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/friends',
        element: <Friends></Friends>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
