import Board from 'pages/Board'
import Login from 'pages/Login'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import 'tailwindcss/tailwind.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Board />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
