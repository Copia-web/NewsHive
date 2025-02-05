import React, { useState } from 'react';
import { SiGooglenews } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Register from '../Register/Rgister';
import { useDispatch } from 'react-redux';
import { newsType } from '../../MenuSlice/MenuSlice';

const menuList = [
  { id: 2, label: "Business", header: 'business-top-news' },
  { id: 3, label: "Entertainment", header: 'Entertainment-top-news' },
  { id: 4, label: "Health Care", header: 'Health-care-top-news' },
  { id: 5, label: "Science", header: 'Science-top-news' },
  { id: 6, label: "Technology", header: 'Technology-top-news' },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalDisplay, setModalDisplay] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenu = () => setShowMenu(!showMenu);

  const handleNavigation = (header) => {
    dispatch(newsType({ label: header })); // Update Redux state
    navigate(`/newshive/${header}`); // Navigate to dynamic route
  };

  return (
    <div className='fixed top-0 z-50 w-full'>
      <div className='h-16 flex gap-4 w-full justify-between items-center bg-slate-400'>
        <div className='flex items-center gap-5 ml-2'>
          {showMenu ? (
            <IoClose className='text-4xl text-slate-700 cursor-pointer' onClick={handleMenu} />
          ) : (
            <FiMenu className='text-4xl text-slate-700 cursor-pointer' onClick={handleMenu} />
          )}
          <div className='xs:hidden sm:flex flex-row items-center bg-slate-200 h-8 rounded-full focus-within:ring-2'>
            <label htmlFor='search'>
              <IoIosSearch className='text-2xl text-slate-600' />
            </label>
            <input
              type='text'
              name='search'
              id='search'
              className='outline-none w-full bg-slate-200 rounded-full pl-2'
              placeholder='Search news'
            />
          </div>
        </div>
        <div>
          <Link to='/' className='flex items-center gap-3'>
            <SiGooglenews className='text-5xl text-cyan-800 cursor-pointer hover:animate-spin' />
            <div className='text-slate-700 text-xl font-poppins font-semibold'>NewsHive</div>
          </Link>
        </div>
        <div className='flex gap-6 pr-4 items-center'>
          <span
            className='inline-block text-zinc-800 bg-red-500 px-2 py-2 rounded-full font-poppins cursor-pointer'
            onClick={() => setModalDisplay(true)}
          >
            Register
          </span>
          <span className='inline-block text-zinc-800 bg-red-500 px-2 py-2 rounded-full font-poppins'>
            Login
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className='fixed top-16 xs:hidden sm:flex bg-slate-200 w-full gap-4 justify-center h-9'>
        <button className='font-poppins text-sm text-slate-700 cursor-pointer' onClick={() => navigate('/newshive')}>
          Home
        </button>
        {menuList.map((i) => (
          <button key={i.id} className='font-poppins text-sm text-slate-700 cursor-pointer' onClick={() => handleNavigation(i.header)}>
            {i.label}
          </button>
        ))}
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed transform ${showMenu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out`}>
        <Navbar />
      </div>

      {/* Register Modal */}
      <Register modalDispaly={modalDisplay} setModalDispaly={setModalDisplay}>
        <div className="absolute top-24">
          <form className="flex flex-col border-2 rounded-md p-4 w-fit gap-3 bg-gray-100">
            <div>
              <label htmlFor="username" className="text-sm font-poppins text-gray-800">
                Enter username:
              </label>
              <input type="text" required id="username" name="username" className="inline-block w-full rounded-md outline-none focus:ring-2 p-1 ring-2" />
            </div>
            <label htmlFor="password" className="text-sm font-poppins text-gray-800">
              Enter password:
            </label>
            <div className="flex bg-white rounded-md items-center ring-2 focus-within:ring-2">
              <input type="password" required id="password" name="password" className="w-full rounded-md outline-none p-1" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-center p-1 rounded-md text-gray-800 font-poppins shadow-md">
              Register
            </button>
          </form>
        </div>
      </Register>
    </div>
  );
}
