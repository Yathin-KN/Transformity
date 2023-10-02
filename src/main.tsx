import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog.tsx';
import BlogCustom from './components/custom/CustomBlog.tsx';
import Write from './pages/write.tsx';
import SignUp from './pages/SignUp.tsx';
import About from './pages/About.tsx';
import Events from './pages/Events.tsx';
import Event from './pages/Event.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path:"/blog/:blogId",
    element:<BlogCustom/>
  },{
    path:"/blog",
    element:<Blog/>
  },{
    path:"/blog/write",
    element:<Write/>
  },{
    path:"/signup",
    element:<SignUp/>
  },{
    path:"/about",
    element:<About/>
  },{
    path:"/events",
    element:<Events/>
  },{
    path:"/events/:id",
    element:<Event/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
