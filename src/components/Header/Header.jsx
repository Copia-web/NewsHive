import React, { useState } from 'react'
import { SiGooglenews } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Register from '../Register/Rgister';




const menuList = [
  {id: 1, label:"Home", url:"/"},
  {id: 2, label:"Business", url:"/"},
  {id: 3, label:"Entertainment", url:"/"},
  {id: 4, label:"Health Care", url:"/"},
  {id: 5, label:"Science", url:"/"},
  {id: 6, label:"Technology", url:"/"},
]

export default function Header() {
  const [showMenu,setShowMenu] = useState(false);

  const handleMenu = ()=> setShowMenu(!showMenu);

  const [modalDispaly,setModalDispaly] = useState(false);

  

  return (
    <div className='fixed top-0  z-50 w-full'>
      <div className=' h-16 flex gap-4 w-full justify-between items-center bg-slate-400 z-50'>
          <div className='flex items-center gap-5 ml-2 '>
            {
              showMenu ? <IoClose className=' text-4xl text-slate-700 cursor-pointer' onClick={handleMenu} /> : <FiMenu className=' text-4xl text-slate-700 cursor-pointer' onClick={handleMenu} />
            }
            <div className='xs:hidden sm:flex  flex-row items-center bg-slate-200 h-8 rounded-full focus-within:ring-2'>
            <label htmlFor='search'><IoIosSearch className='text-2xl text-slate-600'/></label>
            <input type='text'name='search' id='search' className='outline-none  w-full  bg-slate-200 rounded-full pl-2 ' placeholder='Search news'/>
            </div>
          </div>
          <div className=''>
              <Link to='/' className='flex items-center gap-3'><SiGooglenews className=' text-5xl text-cyan-800 cursor-pointer hover:animate-spin'/>
              <div className='text-slate-700 text-xl font-poppins font-semibold'>NewsHive</div></Link>
            </div>
            <div className='flex gap-6 pr-4 items-center'>
              <span className='inline-block text-zinc-800 bg-red-500 pl-2 pr-2 pt-2 pb-2 rounded-full font-poppins cursor-pointer ' onClick={()=>setModalDispaly(true)}>Register</span>
              <span className='inline-block text-zinc-800 bg-red-500 pl-2 pr-2 pt-2 pb-2 rounded-full  font-poppins'>Login</span>
            </div>
      </div>
      <div className=' fixed top-16 xs:hidden sm:flex bg-slate-200 w-full  gap-4 justify-center ite h-9 '>
          {
            menuList.map((i)=>{
              return(
                <div className=''>
                  <Link to={i.url} className='font-poppins text-sm text-slate-700'>
                  {i.label}
                </Link>
                </div>
              )
            })
          }
      </div>
      <div className={` overflow-auto  h-screen w-72 rounded-r-md z-50 transform ${showMenu ?  "translate-x-0" : "-translate-x-full" } transition-transform duration-500 ease-in-out `}  >
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}  />
      </div>
      <Register modalDispaly={modalDispaly} setModalDispaly={setModalDispaly}>
        <div className="absolute top-24 ">
          <form className="flex flex-col border-2 rounded-md p-4 w-fit gap-3 bg-gray-100">
            <div>
              <label
                htmlFor="username"
                className="text-sm font-poppins text-gray-800"
              >
                Enter username:
              </label>
              <input
                type="text"
                required
                id="username"
                name="username"
                className="inline-block w-full rounded-md outline-none focus:ring-2 p-1 ring-2"
              />
            </div>
            <label
              htmlFor="password"
              className="text-sm font-poppins text-gray-800"
            >
              Enter password:
            </label>
            <div className="flex bg-white rounded-md items-center ring-2 focus-within:ring-2">
              <input
                type="password"
                required
                id="password"
                name="password"
                className="w-full rounded-md outline-none p-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-center p-1 rounded-md text-gray-800 font-poppins shadow-md"
            >
              Register
            </button>
          </form>
        </div>
      </Register>
    </div>
    
  )
}



