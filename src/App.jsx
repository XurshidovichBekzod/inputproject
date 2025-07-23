import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './page/layout/Layout'
import Home from './page/home/Home'
import Inp from './page/inp/Inp'
import "./App.css"

const App = () => {
  return (
    useRoutes([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: "/input",
            element: <Inp/>
          }
        ]
      }
    ])
  )
}

export default App