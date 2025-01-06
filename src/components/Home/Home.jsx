import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ShowData} from '../utils/utils'
import { IoMdArrowDropright } from "react-icons/io";
import { FcReading } from "react-icons/fc";


import joe from './joe.webp'
import Footer from "../Footer/Footer";
import Register from "../Register/Rgister";

const url =
  "https://newsapi.org/v2/everything?from=2024-12-27&to=2024-12-27&apiKey=b5e10ec443364cd2b8fb34980ede53ce";

export default function Home() {
  const [source, setSource] = useState({
    source: "",
    author: "",
    title: "",
    description: "",
    url: "",
    content: "",
    publishedAt: "",
    urlToimg:""
  });

 

  const newsArray = [
    {
      urlToImage: joe,
      title: "Breaking News: Major Tech Breakthrough",
      description: "A revolutionary technology promises to change the world.",
      url: "https://example.com/news/1",
      publishedAt: "2024-12-28T10:30:00Z",
      source: { name: "Tech Daily" },
    },
    {
      urlToImage: joe,
      title: "Global Market Updates",
      description: "Markets show significant growth amidst global uncertainties.",
      url: "https://example.com/news/2",
      publishedAt: "2024-12-28T11:00:00Z",
      source: { name: "Finance Times" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
    {
      urlToImage: null,
      title: "No Image News",
      description: "This is a sample news article without an image.",
      url: "https://example.com/news/4",
      publishedAt: "2024-12-28T08:00:00Z",
      source: { name: "Daily Updates" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
    {
      urlToImage: joe,
      title: "Health Tips for the New Year",
      description: "Experts share their top health tips to kickstart 2025.",
      url: "https://example.com/news/3",
      publishedAt: "2024-12-28T09:15:00Z",
      source: { name: "Health World" },
    },
  
  ];
  
 /*  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(" https://newsapi.org/v2/everything?q=politics&from=2024-12-27&to=2024-12-27&sortBy=popularity&apiKey=b5e10ec443364cd2b8fb34980ede53ce");
        if (!response.ok) throw new Error("Unable to fetch news");

        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          const article = data.articles[0];
          console.log(article) // Fetch the first article
          setSource({
            source: article.source.name,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            content: article.content,
            publishedAt: article.publishedAt,
            urlToimg:article.urlToImage
          });
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []); */

  return (
    <div className="mt-24 bg-gray-100 w-full "> 
      <div className="flex flex-col divide-y-4 divide divide-slate-400  gap-8  ">
        <div className="mt-4">
          <span className="text-md font-poppins text-gray-700 font-bold">Top Headlines <IoMdArrowDropright className="inline text-2xl"/><FcReading className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Business Insider <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Entertainment <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Health Care  <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Science <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">Technology <IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     <div>
          <span className="text-md font-poppins text-gray-700 font-bold">More News<IoMdArrowDropright className="inline text-2xl"/></span>
     <ShowData newsArray={newsArray}/>
     </div>
     </div> 
     
     <Footer/>
    </div>
  );
}
