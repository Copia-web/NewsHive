import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../utils/utils";
import {ShowData, splitResponse} from '../utils/utils'
import { IoMdArrowDropright } from "react-icons/io";
import { FcReading } from "react-icons/fc";


import Footer from "../Footer/Footer";
const general_url =`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;
const business_url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.REACT_APP_API_KEY}`
const entertainment_url = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${process.env.REACT_APP_API_KEY}`
const healthCare_url =  `https://newsapi.org/v2/top-headlines?category=health&apiKey=${process.env.REACT_APP_API_KEY}`
const science_url = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${process.env.REACT_APP_API_KEY}`
const tech_url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.REACT_APP_API_KEY}`


export default function Home() {
  // General news states
  const [home, setHome] = useState([]);

 //Business news states
 const [business, setBusiness] = useState([]);

// Entertainment news states
const [entertain, setEntertain] = useState([]);

// Health care news states
const [healthCare, setHealthCare] = useState([]);

// Science news states 
const [science, setScience] = useState([]);

// Technology news states
const [tech, setTech] = useState([]);

//More news states
const [more, setMore] = useState([]);


  //fetch general news
  const fetchGeneralNews = async()=>{
    try{
        const response = await fetch(general_url);
        if (!response.ok) throw new Error("unable to fetch general news");

        const data = await response.json();
        if (data.articles && data.articles.length > 0){
         
          
          let article = data.articles.splice(0,20); // Default assignment

          const {firstResponse,secondResponse} = splitResponse(article);
          setHome(firstResponse);
          setMore(secondResponse)
        }
    }catch(err){
      console.log(err);
    }
  }



  

  useEffect(() => {
    fetchGeneralNews();
    const fetchAllNews = async () => {
      try {
        await Promise.all([
          fetchNews(business_url, setBusiness),
          fetchNews(entertainment_url, setEntertain),
          fetchNews(healthCare_url, setHealthCare),
          fetchNews(science_url, setScience),
          fetchNews(tech_url, setTech),
        ]);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchAllNews();
  }, []);

  return (
    <div className="mt-24 bg-gray-100 w-full  "> 
      <div className="flex flex-col    gap-8 p-4  ">
        <div className="mt-4 flex-1">
          <span className="inline-block text-lg text-gray-700 font-semibold mb-5">Top Headlines</span>
          <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={home}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">Business Insider </span>
          <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={business}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">Entertainment</span> <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={entertain}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">Health Care</span> <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={healthCare}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">Science </span> <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={science}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">Technology</span> <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={tech}/>
     </div>
     <div>
          <span className="ineline- block text-lg text-gray-700 font-semibold  mb-5">More News</span> <div className="border-b-2 mb-4 border-slate-400 shadow-2xl"></div>
     <ShowData newsArray={more} more={true}/>
     </div>
     </div> 
     
     <Footer/>
    </div>
  );
}
