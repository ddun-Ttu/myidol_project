import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Signup from './pages/Signup/Signup';

const router = createBrowserRouter([
  {path: "/login", element: <Login />},
  {path: "/admin", element: <Admin />},
  {path: "/signup", element: <Signup />},
])

const rootElement = document.getElementById("root");

if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

