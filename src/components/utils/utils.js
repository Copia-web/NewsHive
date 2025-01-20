import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Component to display news
export const ShowData = ({ newsArray }) => {



  // Render the filtered news or fallback component
  return  (
    <div className="pl-2 pt-2 flex flex-wrap gap-4 justify-center ">
      {newsArray.map((item, index) => (
        <div
          className="flex-auto font-poppins border-2 shadow-md rounded-lg p-2 w-72 max-w-[410px]"
          key={index}
        >
          {item.urlToImage && (
            <img
              src={item.urlToImage}
              alt={item.title || "News image"}
              className="object-cover"
            />
          )}
          {item.title && (
            <Link to={`/newshive/news-content/${encodeURIComponent(item.title)}`}
            state={{news: item}}
            
              className="text-black hover:underline inline-block mb-1 font-semibold font-serif"
            >
              {item.title}
            </Link>
          )}
          {item.description && (
            <p className="text-gray-600 mt-2 text-sm font-serif">
              {item.description}
            </p>
          )}
          <span className="text-gray-400 text-xs">
            {new Date(item.publishedAt).toLocaleDateString()} |{" "}
            {item.source?.name || "Unknown Source"}
          </span>
        </div>
      ))}
    </div>
  )
};

// Component to show when no news is available
const NoNews = () => {
  return (
    <div className="mt-24 text-center text-3xl text-slate-900 bg-slate-500">
      No News Today, come back tomorrow.
    </div>
  );
};

//Slice news for Genearl News and More
    export const splitResponse = (articles) => {
      const div = Math.ceil(articles.length / 3);
      const firstResponse = articles.slice(0, div);
      const secondResponse = articles.slice(div);
      return { firstResponse, secondResponse };
    };
    

    // Function to filter news
  const filterNews = (newsArray) => {
    return newsArray.filter((i) => 
      Boolean(i.urlToImage) &&
      Boolean(i.title) &&
      Boolean(i.url) &&
      Boolean(i.description) &&
      Boolean(new Date(i.publishedAt)) &&
      Boolean(i.source)
    );
  };
 

 //Fetch news function
 export   const fetchNews = async(url,setState,all)=>{
     try{
         const response = await fetch(url);
         if (!response.ok) throw new Error("unable to fetch  news");

         let article;
         const data = await response.json();
         if (data.articles && data.articles.length > 0){
          const filteredNews = filterNews(data.articles);
          if (all){
            article =filteredNews;
            setState(article);
          }
            else if (!all){
              article = filteredNews.slice(0,8);
            setState(article);
            }
         }

         else{
         return(<NoNews/>) //Produce a component for this 
         }
     }catch(err){
       console.log(err);
     }
   }