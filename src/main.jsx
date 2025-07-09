import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './Components/CreatePost.jsx'
// const router=createBrowserRouter([
//   {path:'/', element:<App/>},
//    { path: 'social-media/', element: <App /> }, // add this
//    { path: 'social-media/create-post', element: <CreatePost/> }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
