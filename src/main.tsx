import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.tsx'
import Login from './components/Login.tsx'
import Register from './components/Register.tsx'
import Dashboard from './components/Dashboard.tsx'
import VerifyEmail from './components/VerifyEmail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/verify-email',
        element: <VerifyEmail />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
