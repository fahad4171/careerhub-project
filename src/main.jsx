import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Root from './component/Root/Root';
import Statistics from './component/Header/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blogs from './component/Blogs/Blogs';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,/* this component is important, as all our components pages arranged in Root.jsx */
    errorElement: <ErrorPage></ErrorPage>,
    /* nesting the routes */
    /* also, if we want show these nested routes in home, We need to tell the home route where we want it to render its child routes, using <outlet></outlet> */
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "Statistic",
        element: <Statistics></Statistics>
      },
      {
        path: "Applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "Blogs",
        element: <Blogs></Blogs>
      },

      /* all the routes above are Fixed routes, it will take us to the specific path mention on it, we can make it dynamic route by adding a semicolon*/
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        /* as we don't have data in backend, we will load the data here (This is NOT an efficient method) */
        loader: () => fetch('../jobs.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
