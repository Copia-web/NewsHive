import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spin from '../../Assets/Fidget-spinner.gif'
export const ShowData = ({ newsArray = [] }) => {
  return (
    <div className="pl-2 pt-2 flex flex-wrap gap-3 justify-center">
      {Array.isArray(newsArray) && newsArray.length > 0 ? (
        newsArray.map((item, index) => (
          <div
            className="flex-auto font-poppins border rounded-md shadow-sm w-60 max-w-[320px] p-2"
            key={index}
          >
            {item.urlToImage && (
              <div className="h-32 w-full overflow-hidden rounded-md">
                <img
                  src={item.urlToImage}
                  alt={item.title || "News image"}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            )}
            {item.title && (
              <Link
                to={`/newshive/news-content/${encodeURIComponent(item.title)}`}
                state={{ news: item }}
                className="text-black hover:underline inline-block mt-2 text-sm font-semibold font-serif"
              >
                {item.title.length > 60
                  ? `${item.title.substring(0, 60)}...`
                  : item.title}
              </Link>
            )}
            {item.description && (
              <p className="text-gray-600 mt-1 text-xs font-serif">
                {item.description.length > 80
                  ? `${item.description.substring(0, 80)}...`
                  : item.description}
              </p>
            )}
            <span className="text-gray-400 text-xs block mt-1">
              {item.publishedAt &&
                new Date(item.publishedAt).toLocaleDateString()}{" "}
              | {item.source?.name}
            </span>
          </div>
        ))
      ) : (
        <NoNews />
      )}
    </div>
  );
};



// Component to show when no news is available
const NoNews = () => {
  return (
    <div className="mt-24 text-center border-2 shadow-lg text-md font-serif p-2 rounded-md ">
     <img src={spin} className=""/>
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
      Boolean(i.source.name)
    );
  };
 

 // Fetch news function
export const fetchNews = async (url, setState, all) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch news");
    }

    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      // Filter the news articles
      const filteredNews = filterNews(data.articles);

      // Handle empty filtered news
      if (!filteredNews || filteredNews.length === 0) {
        console.log("No filtered news found.");
        setState([]); // Set state to an empty array
        return;
      }

      // Set the state based on the 'all' flag
      const articles = all ? filteredNews : filteredNews.slice(0, 8);
      setState(articles);
    } else {
      console.log("No articles found in the response.");
      setState([]); // Set state to an empty array
    }
  } catch (err) {
    console.error("Error fetching news:", err);
  }
};
