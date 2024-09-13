import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AppLayout from './layouts/AppLayout';
import Home from './components/Home';
import Login from './components/Login';
import { getDatabase } from 'firebase/database';
import {app} from "./utils/firebase.tsx"
import Accordian from './components/Accordian.tsx';

const db=getDatabase(app)

const AppRouter=createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<div>there is a error</div>,
    children:[
      {
        element:<Home/>,
        path:"/",
      },
      {
        element:<Login/>,
        path:"/login"
      },
      {
        element: <Accordian />,
        path: "/accordian",
      },
      // {
      //   element: <Carousel />,
      //   path: "/carousel",
      // },
      // {
      //   element: <Pagination />,
      //   path: "/pagination",
      // },
      // {
      //   element: <StarRating />,
      //   path: "/star",
      // },
      // {
      //   element: <InfiniteScrolling />,
      //   path: "/infinite",
      // },
    ]
  
  }
])


function App() {
  return <RouterProvider router={AppRouter}/>
    
  
}

export default App
