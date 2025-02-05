import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: '',
    label: ''
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        newsType(state, action) {
            switch (action.payload.label) {
                case 'business-top-news':
                    state.label = 'Business Top News';
                    state.url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'startups':
                    state.label = 'StartUps';
                    state.url = `https://newsapi.org/v2/everything?q=startups&domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;

                    break;
                case 'stocks':
                    state.label = 'Stock Market';
                    state.url = `https://newsapi.org/v2/everything?q=stock&domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Entertainment-top-news':
                    state.label = 'Entertainment Top News';
                    state.url = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Football-news':
                    state.label = 'Football News';
                    state.url = `https://newsapi.org/v2/everything?q=football&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Basketball-news':
                    state.label = 'Basketball News';
                    state.url = `https://newsapi.org/v2/everything?q=basketball&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Olympics-news':
                    state.label = 'Olympics News';
                    state.url = `https://newsapi.org/v2/everything?q=olympics&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Health-care-top-news':
                    state.label = 'Health Care Top News';
                    state.url = `https://newsapi.org/v2/top-headlines?category=health&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Mental-health-news':
                    state.label = 'Mental Health News';
                    state.url = `https://newsapi.org/v2/everything?q=mental+health&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Medical-research-news':
                    state.label = 'Medical Research News';
                    state.url = `https://newsapi.org/v2/everything?q=medical+research&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Fitness-news':
                    state.label = 'Fitness News';
                    state.url = `https://newsapi.org/v2/everything?q=fitness&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Science-top-news':
                    state.label = 'Science Top News';
                    state.url = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Space-news':
                    state.label = 'Space Exploration News';
                    state.url = `https://newsapi.org/v2/everything?q=space&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Climate-news':
                    state.label = 'Climate Change News';
                    state.url = `https://newsapi.org/v2/everything?q=climate+change&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Research-news':
                    state.label = 'Research Studies News';
                    state.url = `https://newsapi.org/v2/everything?q=research&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Technology-top-news':
                    state.label = 'Technology Top News';
                    state.url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Gadgets-news':
                    state.label = 'Gadgets News';
                    state.url = `https://newsapi.org/v2/everything?q=gadgets&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'AI-Robotics-news':
                    state.label = 'AI & Robotics News';
                    state.url = `https://newsapi.org/v2/everything?q=artificial+intelligence+robotics&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                case 'Software-news':
                    state.label = 'Software & Apps News';
                    state.url = `https://newsapi.org/v2/everything?q=software+apps&apiKey=${process.env.REACT_APP_API_KEY}`;
                    break;
                default:
                    state.label = 'Unknown Category';
            }
        }
    }
});

export const { newsType } = menuSlice.actions;
export default menuSlice.reducer;
