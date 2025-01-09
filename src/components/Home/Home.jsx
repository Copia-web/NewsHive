import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../utils/utils";
import {ShowData, splitResponse} from '../utils/utils'
import { IoMdArrowDropright } from "react-icons/io";
import { FcReading } from "react-icons/fc";


import Footer from "../Footer/Footer";
const general_url = process.env.REACT_APP_API_General_Url;
const business_url = process.env.REACT_APP_API_Business_Url;
const entertainment_url = process.env.REACT_APP_API_Entertaimnet_url;
const healthCare_url = process.env.REACT_APP_API_HealthCare_url;
const science_url = process.env.REACT_APP_API_Science_url;
const tech_url = process.env.REACT_APP_API_Tech_url;


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
      <div className="flex flex-col divide-y-4 divide divide-slate-400  gap-8 p-4  ">
        <div className="mt-4 flex-1">
          <span className="text-md font-poppins text-gray-700 font-bold">Top Headlines <IoMdArrowDropright className="inline text-2xl"/><FcReading className="inline text-2xl"/></span>
     <ShowData newsArray={home}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Business Insider <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={business}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Entertainment <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={entertain}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Health Care  <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={healthCare}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Science <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={science}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Technology <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={tech}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">More News<IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={more} more={true}/>
     </div>
     </div> 
     
     <Footer/>
    </div>
  );
}
