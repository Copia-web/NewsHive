import React, { useState } from 'react';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newsType } from '../../MenuSlice/MenuSlice';

const menuList = [
  { id: 1, label: "Business", sub_options: [
    { label: 'Top headlines', header: 'business-top-news' },
    { label: 'Stock Market', header: 'stocks' },
    { label: 'Startups', header: 'startups' },
  ] },
  { id: 2, label: "Entertainment", sub_options: [
    { label: "Top Headlines", header: "Entertainment-top-news" },
    { label: "Football", header: "Football-news" },
    { label: "Basketball", header: "Basketball-news" },
    { label: "Olympics", header: "Olympics-news" },
  ] },
  { id: 3, label: "Health Care", sub_options: [
    { label: "Top Headlines", header: "Health-care-top-news" },
    { label: "Mental Health", header: "Mental-health-news" },
    { label: "Medical Research", header: "Medical-research-news" },
    { label: "Fitness", header: "Fitness-news" },
  ] },
  { id: 4, label: "Science", sub_options: [
    { label: "Top Headlines", header: "Science-top-news" },
    { label: "Space Exploration", header: "Space-news" },
    { label: "Climate Change", header: "Climate-news" },
    { label: "Research Studies", header: "Research-news" },
  ] },
  { id: 5, label: "Technology", sub_options: [
    { label: "Top Headlines", header: "Technology-top-news" },
    { label: "Gadgets", header: "Gadgets-news" },
    { label: "AI & Robotics", header: "AI-Robotics-news" },
    { label: "Software & Apps", header: "Software-news" },
  ] },
];

export default function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSubMenu = (label) => {
    setShowSubMenu((prev) => (prev === label ? null : label));
  };

  const handleNavigation = (header) => {
    dispatch(newsType({ label: header }));  // Update Redux state
    navigate(`/newshive/${header}`); // Navigate to dynamic route
  };

  return (
    <div className='z-50 h-screen bg-slate-300 w-72'>
      <div className="flex items-center justify-center gap-5 mb-5">
        <div className="flex flex-row items-center w-full p-2 rounded-e-full h-10">
          <input type="text" className="outline-none w-full bg-slate-200 rounded-l-full pl-2 h-8 focus:ring-1" placeholder="Search news" />
          <IoIosSearch className="text-3xl bg-slate-400 rounded-r-full p-1 w-14 text-slate-600 h-8 focus:ring-1" />
        </div>
      </div>

      <Link to='/newshive' className={`pl-2 mb-5 inline-block items-center cursor-pointer p-2 font-semibold text-slate-700 w-full ${showSubMenu === 'home' ? 'border-l-8 border-blue-600 bg-slate-200 p-2' : ''}`} onClick={() => toggleSubMenu("home")}>
        Home
      </Link>

      <div className='flex flex-col gap-6'>
        {menuList.map((category) => (
          <div key={category.id} className="menu-item">
            <div className={`flex items-center justify-between font-semibold text-slate-700 cursor-pointer ${showSubMenu === category.label ? 'border-l-8 border-blue-600 bg-slate-200 p-2' : ''}`} onClick={() => toggleSubMenu(category.label)}>
              <div className='pl-2'>{category.label}</div>
              {category.sub_options && (
                <IoMdArrowDropdownCircle className="text-2xl mr-2 text-slate-600" />
              )}
            </div>

            {category.sub_options && (
              <div className={`submenu ${showSubMenu === category.label ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in flex flex-col gap-2 text-slate-700 bg-slate-100 text-sm`}>
                {category.sub_options.map((sub, index) => (
                  <div key={index} className="font-serif pl-4">
                    <button onClick={() => handleNavigation(sub.header)} className="w-full text-left hover:text-blue-600">
                      {sub.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
