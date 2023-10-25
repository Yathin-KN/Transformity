import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VerifyWrite from './pages/Verify.tsx';
import Blog from './pages/Blog.tsx';
import BlogCustom from './components/custom/CustomBlog.tsx';
import SignUp from './pages/SignUp.tsx';
import About from './pages/About.tsx';
import Events from './pages/Events.tsx';
import SignIn from './pages/signIn.tsx';
import Team from './pages/Team.tsx';
import Event from "./pages/Event.tsx"
import Podcast from './pages/podcast.tsx';
import ComposePodcast from './pages/ComposePodcast.tsx';

// import EventForm from './pages/EventForm.tsx';
// import EventForm from './pages/CreateEvent.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path:"/blog/:blogId",
    element:<BlogCustom />
  },{
    path:"/blog",
    element:<Blog/>
  },{
    path:"/blog/write",
    element:<VerifyWrite type={'write'}/>,
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
    path:"/events/:event_id",
    element:<Event/>
  },{
    path:"/team",
    element:<Team/>
  },{
    path:"/eventCompose",
    element:<VerifyWrite type={'EventCompose'}/>
  },{
    path:"/podcast",
    element:<Podcast/>
  },{
    path:"/podcastCompose",
    element:<ComposePodcast/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
