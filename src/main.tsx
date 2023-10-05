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
import SignIn from './pages/signIn.tsx';
import Team from './pages/Team.tsx';
import EventForm from './pages/EventForm.tsx';
// import EventForm from './pages/CreateEvent.tsx';

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
    path:"/signin",
    element:<SignIn/>
  },{
    path:"/about",
    element:<About/>
  },{
    path:"/events",
    element:<Events/>
  },{
    path:"/team",
    element:<Team/>
  },{
    path:"/eventCompose",
    element:<EventForm/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
