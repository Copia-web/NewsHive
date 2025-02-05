import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store, Store} from './Store/Store'
import { Provider } from 'react-redux';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import TopHeadlines from './components/Business/TopHeadlines';
import NewsContent from './components/utils/NewsContent';
import StockMarket from './components/Business/StockMarket';
import Startups from './components/Business/Startups';
import News from './components/News/News'

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
   },
   {
    path:'startups',
    element:<Startups/>
   },
   {
    path:':header',
    element:<News/>
   }
  ]
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

