import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import TopHeadlines from './components/Business/TopHeadlines';
import NewsContent from './components/utils/NewsContent';
import StockMarket from './components/Business/StockMarket';

const router = createBrowserRouter([{
  path:"newshive/",
  element:<App/>,
  children:[
    { index: true, element: <Home /> },
   {
    path:"business-top-headlines",
    element:<TopHeadlines/>
   },
   {
    path:'news-content/:title',
    element:<NewsContent/>
   },
   {
    path:'stock-market',
    element:<StockMarket/>
   }
  ]
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

