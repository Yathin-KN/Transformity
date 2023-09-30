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
import Write from './components/custom/write.tsx';

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
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
