import React, { useState } from 'react';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const menuList = [
 
  { id: 1, label: "Business", sub_options: [{label:'Top headlines',url:"/newshive/top_headlines"},
    {label:'Stock Market',url:"/newshive/stock_market"},
    {label:'Startups',url:"/newshive/startups"},
    {label:'Trade & Commerce',url:"/newshive/trade_commerce"},
    ] },
  { id: 2, label: "Entertainment", sub_options: [
    {label:"Top Headlines",url:"/newshive/entertainment"},
    {label:"Football",url:"/newshive/football"},
    {label:"Basketball",url:"/newshive/basketball"},
    {label:"Olympics",url:"/newshive/olympics"},
  ] },
  { id: 3, label: "Health Care", sub_options:[
    {label:"Top Headlines",url:"/newshive/health_care"},
    {label:"Mental Health",url:"/newshive/mental_health"},
    {label:"Medical Research",url:"/newshive/medical_research"},
    {label:"Fitness",url:"/newshive/fitness"},
  ] },
  { id: 4, label: "Science", sub_options:[
    {label:"Top Headlines",url:"/newshive/science"},
    {label:"Space Exploration",url:"/newshive/space"},
    {label:"Climate Change",url:"/newshive/climate"},
    {label:"Research Studies",url:"/newshive/research"},
  ] },
  { id: 5, label: "Technology",  sub_options:[
    {label:"Top Headlines",url:"/newshive/technology"},
    {label:"Gadgets",url:"/newshive/gadgets"},
    {label:"AI & Robotics",url:"/newshive/ai_robotics"},
    {label:"Software & Apps",url:"/newshive/softwares"},
  ] },
  { id: 6, label: "Regional News",sub_options:[
    {label:"Africa",url:"/newshive/africa"},
    {label:"Asia",url:"/newshive/Asia"},
    {label:"Europe",url:"/newshive/europe"},
    {label:"North America",url:"/newshive/north_america"},
    {label:"South America",url:"/newshive/south_america"},
  ] },
  { id: 7, label: "Lifestyle",sub_options: [
    {label:"Travel",url:"/newshive/travel"},
    {label:"Food & Recipes",url:"/newshive/food_recipes"},
    {label:"Fashion",url:"/newshive/fashion"},
  ] },
];



export default function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const toggleSubMenu = (label) => {
    setShowSubMenu((prev) => (prev === label ? null : label) );
  };

  const navigate = useNavigate();


  return (
    <div className="bg-slate-300 flex h-screen z-50">
      <div className="w-72">
        {/* Search Bar */}
        <div className="flex items-center justify-center gap-5 ">
          <div className="flex flex-row items-center w-full p-2 rounded-e-full h-10">
            <input
              type="text"
              className="outline-none w-full bg-slate-200 rounded-l-full pl-2 h-8 focus:ring-1"
              placeholder="Search news"
            />
            <IoIosSearch className="text-3xl bg-slate-400 rounded-r-full p-1 w-14 text-slate-600 h-8 focus:ring-1" />
          </div>
        </div>

        {/* Menu List */}
        <div className='text-lg font-poppins text-slate-700 font-semibold pl-2 mt-2'>Categories</div>
        <div className="mt-3 flex flex-col gap-8 bg-slate-300  ">
          <Link  to={()=> navigate('/')} className={`pl-3 items-center font-poppins cursor-pointer p-2justify-between font-semibold text-slate-700   ${showSubMenu === 'home' ? 'border-l-8 border-blue-600 bg-slate-200 p-2':''}`} onClick={() => toggleSubMenu("home")}>
            Home
          </Link>
          {menuList.map((i) => (
            <div key={i.id} className="menu-item">
              <div className={`flex items-center font-poppins justify-between font-semibold text-slate-700   ${showSubMenu === i.label ? 'border-l-8 border-blue-600 bg-slate-200 p-2':''}`} onClick={() => toggleSubMenu(i.label)}>
                <div className='pl-2 cursor-pointer'>{i.label}</div>
                {i.sub_options && (
                  <IoMdArrowDropdownCircle
                    className="text-2xl mr-2 cursor-pointer text-slate-600"
                   
                  />
                )}
              </div>
              {i.sub_options && (
                <div
                  className={`submenu ${
                    showSubMenu === i.label ? 'max-h-screen' : 'max-h-0'
                  } overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-2 text-slate-700 bg-slate-100 text-sm`}
                >
                  {i.sub_options.map((a, index) => (
                    <div key={index} className="font-poppins pl-4 ">
                      <Link to={a.url}>{a.label}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
