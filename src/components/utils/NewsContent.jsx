import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchNews, ShowData } from './utils';
import Footer from '../Footer/Footer';


const moreNews_url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;

export default function NewsContent() {
    const [more,setMore] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const news = location.state?.news;

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll animation
          });
         try{
            fetchNews(moreNews_url, setMore);
         }catch(err){
            console.log(err);
         }
    },[location]);
    if (!news){ navigate(-1)}
    else{
  return (
    <div className='mt-28 p-2 bg-white '>
        <div className='ml-5 mb-9'>
        <div className='mb-8 '>
            <span className='text-3xl text-slate-700 font-serif'>{news.title}</span>
            <span className='text-sm font-poppins text-slate-900'>Published Date {new Date(news.publishedAt).toLocaleDateString()}</span>
        </div>
        <diV className="border-b-2 mb-5"></diV>
        <div>
         <img src=  { news.urlToImage} alt={news.title } className='h-96'/>
        </div>
        <div className='font-serif text-slate-700'>
            {news.content}
        </div>
        </div>
        <div className=''>
            <div className='  mb-4 text-gray-700 font-semibold'>MORE FOR YOU</div>
            <div className='border-b-2 mb-6'></div>
           <ShowData newsArray={more}/>
        </div>
        <Footer/>
    </div>
  )
}
}
