import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import Analytics from './Components/Analytics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: "/dashboard",
      element: <Dashboard/>
    }]
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
    
  },
  {
      path:"/coursedetails",
      element: <CourseDetailsPage />
    },
  {
      path:"/analytics",
      element: <Analytics />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
