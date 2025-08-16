import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Component/Layout/Layout.jsx';
import Home from './Component/Home/Home.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import BooksDB from './Component/BooksDB/BooksDB.jsx';
import BookDetail from './Component/BookDetail/BookDetail.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';
import { ToastContainer} from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path :'/',
        element:<Home/>
      },
      {
       path:'books/:bookId',
       element:<BookDetail/>,
       loader : () => fetch('/booksData.json')
      },
      {
       path :'/listedBook',
       element: <ListedBooks/>,
       loader : () => fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element: <BooksDB/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
