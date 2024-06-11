import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Yoga } from './Yoga.jsx'
import { RegistrationForm } from './components/register.jsx'
import Pricing from './components/pricing.jsx'
import Blog from './components/blog.jsx'
import { DailyDoseComponent } from './components/dailyDose.jsx'
import { AboutUsPage } from './components/aboutUs.jsx'

const router = createBrowserRouter([
  {
    path:"",
    element: <Yoga />,
  },
  {
    path:"/register",
    element:<RegistrationForm/>
  },
  {
    path:"/price",
    element:<Pricing />

  },{
    path:"/blog",
    element:<Blog />
  },{
    path:"/dailyDose",
    element: <DailyDoseComponent />
  },
  {
    path:"/aboutUs",
    element:<AboutUsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
