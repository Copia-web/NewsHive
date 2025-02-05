import React, { useEffect, useState } from 'react'
import { fetchNews, ShowData } from '../utils/utils';
import Footer from '../Footer/Footer';

const stockMarket_url =`https://newsapi.org/v2/everything?q=startupsk&domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;
const general_url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;


export default function Startups() {
     const [stocNews,setStockNews] = useState([]);
        const [generalNews,setGeneralNews] = useState([]);
    
    useEffect(()=>{
        const fetchAllNews = async()=>{
          try{
           await Promise.all([
                fetchNews(stockMarket_url,setStockNews,true),
                fetchNews(general_url,setGeneralNews)
            ])
          }catch(err){
            console.log(err);
          }
        };
        fetchAllNews();
    },[])
  return (
    <div className='mt-28'>
         <div className=' text-gray-700  text-lg border-b-2 border-e-2 border-s-2 text-center mb-4'>Business News</div>
                                   {/* Fetch Business News */}
                            <div className='mb-8' >
                                <ShowData newsArray={stocNews}/>
                                </div>
                         {/*  Fetch other types of News */}
                         <div >
                           <div className=' text-lg  text-gray-700  border-b-2 text-center mb-4'>More For You </div>
                                <ShowData newsArray={generalNews}/>
                                </div>
                       <Footer/>
    </div>
  )
}
