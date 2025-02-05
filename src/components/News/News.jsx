import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchNews, ShowData } from '../utils/utils';
import Footer from '../Footer/Footer';

const general_url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;

export default function ShowNews() {
    const [news, setNews] = useState([]);
    const [generalNews, setGeneralNews] = useState([]);

    // Get URL and label from Redux state
    const { url, label } = useSelector((state) => state.menu);

    useEffect(() => {
        const fetchAllNews = async () => {
            try {
                await Promise.all([
                    fetchNews(url, setNews, true),  // Use Redux state URL
                    fetchNews(general_url, setGeneralNews)
                ]);
            } catch (err) {
                console.log(err);
            }
        };
        if (url) fetchAllNews(); // Only fetch if URL is set
    }, [url]);

    return (
        <div className='mt-28'>
            {/* Dynamic Header Name */}
            <div className='text-gray-700 text-lg border-b-2 border-e-2 border-s-2 text-center mb-4'>
                {label || 'News'}  {/* Default to 'News' if label is empty */}
            </div>

            {/* Fetch Business News */}
            <div className='mb-8'>
                <ShowData newsArray={news} />
            </div>

            {/* Fetch other types of News */}
            <div>
                <div className='text-lg text-gray-700 border-b-2 text-center mb-4'>
                    More For You
                </div>
                <ShowData newsArray={generalNews} />
            </div>

            <Footer />
        </div>
    );
}
