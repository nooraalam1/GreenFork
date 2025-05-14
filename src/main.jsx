import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Maindiv from './Components/Maindiv';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Contact from './Components/Contact';
import AuthProvider from './Components/firebase/AuthProvider';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Maindiv></Maindiv>,
    children:[{
      path:'/',
      element:<Home></Home>,
    },
  {
    path:'/menu',
    element:<Menu></Menu>
  },
  {
    path:'/signin',
    element:<Signin></Signin>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
]
  },
]);

createRoot(document.getElementById('root')).render(

<AuthProvider>
<StrictMode>
    <RouterProvider router={router} />
</StrictMode>,
</AuthProvider>
)
