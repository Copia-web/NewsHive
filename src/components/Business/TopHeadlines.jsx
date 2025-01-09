import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import joe from './joe.webp'
import { fetchNews, ShowData } from '../utils/utils'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


const general_url =
`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;

const business_url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.REACT_APP_API_KEY}`


export default function TopHeadlines() {

        const [business,setBusiness] = useState([]);
        const [more,setMore] = useState([]);
      
      useEffect(()=>{
        const fetchBusinessNews = async()=>{
           try{
                 await Promise.all([
                          fetchNews(business_url, setBusiness,true),
                          fetchNews(general_url, setMore),
                        ]);
        }catch(err){
            console.log(err)
           }
        }
        fetchBusinessNews();
      },[])
  return (
    <div className='w-full'>
         <div className='mt-28 p-2'>
            <div className='font-poppins text-3xl font-semibold text-slate-700 border-b-2 border-e-2 border-s-2 text-center mb-4'>Business</div>
                    {/* Fetch Business News */}
             <div className='mb-8' >
                 <ShowData newsArray={business}/>
                 </div>
          {/*  Fetch other types of News */}
          <div >
            <div className='font-poppins text-3xl font-semibold text-slate-700 border-b-2 text-center mb-4'>More News For You </div>
                 <ShowData newsArray={more}/>
                 </div>
        </div>
        <Footer/>
    </div>
  )
}
