// array function for fetched data
export const ShowData =({newsArray})=>{
    return(
    <div className=" pl-2 pt-2 flex flex-wrap gap-4  lg:justify-start ">
    {newsArray &&
      newsArray.map((item, index) => (
        <div className="flex-auto font-poppins border-2 w-48 rounded-lg p-2 max-w-48 " key={index}>
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
              className="text-blue-500 underline"
            >
              {item.title}
            </a>
          )}
          {item.description && (
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
          )}
          <span className="text-gray-400 text-xs">
            {new Date(item.publishedAt).toLocaleDateString()} |{" "}
            {item.source?.name || "Unknown Source"}
          </span>
        </div>
      ))}
  </div>
    )}