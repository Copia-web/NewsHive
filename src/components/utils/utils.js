// array function for fetched data
export const ShowData =({newsArray, more})=>{
    return(
    <div className={` pl-2 pt-2 flex flex-wrap gap-4 xs:justify-center  lg:justify-start ${more ? '' :null}`}  >
    {newsArray &&
      newsArray.map((item, index) => (
        <div className={`flex-auto font-poppins border-2 shadow-md rounded-lg p-2 w-60  `}  key={index}>
          {item.urlToImage && (
            <img
              src={item.urlToImage}
              alt={item.title || "News image"}
              className="object-cover "
            />
          )}
          {item.title && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline inline-block mb-1 font-semibold font-serif"
             
            >
              {item.title}
            </a>
          )}
          {item.description && (
            <p className="text-gray-600 mt-2 text-sm font-serif">{item.description}</p>
          )}
          <span className="text-gray-400 text-xs">
            {new Date(item.publishedAt).toLocaleDateString()} |{" "}
            {item.source?.name || "Unknown Source"}
          </span>
        </div>
      ))}
  </div>
    )}



    export const splitResponse = (articles) => {
      const div = Math.ceil(articles.length / 3);
      const firstResponse = articles.slice(0, div);
      const secondResponse = articles.slice(div);
      return { firstResponse, secondResponse };
    };
    

 //Fetch news function
 export   const fetchNews = async(url,setState,all)=>{
     try{
         const response = await fetch(url);
         if (!response.ok) throw new Error("unable to fetch  news");

         let article;
         const data = await response.json();
         if (data.articles && data.articles.length > 0){
          if (all){
            article = data.articles;
            setState(article);
          }
            else{
              article = data.articles.slice(0,8);
            setState(article);
            }
         }

         else{
          article = "No news here" //Produce a component for this 
         }
     }catch(err){
       console.log(err);
     }
   }