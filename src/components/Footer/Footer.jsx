
import React from 'react'
import { SiGooglenews } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const menuList = [
    {id: 1, label:"Home", url:"/"},
    {id: 2, label:"Business", url:"/"},
    {id: 3, label:"Entertainment", url:"/"},
    {id: 4, label:"Health Care", url:"/"},
    {id: 5, label:"Science", url:"/"},
    {id: 6, label:"Technology", url:"/"},
  ]
export default function Footer() {
  return (
    <div className=' flex flex-col justify-center bg-slate-400 mt-6 border-t-2 pb-24'>
         <Link to='/' className='flex items-center gap-3 ml-2'><SiGooglenews className=' text-5xl text-cyan-800 cursor-pointer hover:animate-spin'/>
            <div className='text-slate-700 text-xl font-poppins font-semibold'>NewsHive
            </div></Link>
        <div className='font-poppins flex flex-wrap gap-6   ml-2 text-gray-800 mb-4'>
            {menuList.map((i,index)=>(
                <div key={index}>
                    <Link to={i.url}>{i.label}</Link>
                </div>
            ))}
        </div>
        <div className='flex items-center border-2 w-fit bg-gray-100  ml-2 mb-4 font-poppins  font-semibold text-slate-700 rounded-lg p-1'>
            NewsHive in other languages <IoMdArrowDropdown/>
        </div>
        <div className='border-t-2 pt-4 '>
           <span className='flex gap-4 mb-3'>
          <span className='font-poppins text-slate-700 pl-2'> Follow us on:</span>
                <FaFacebook className='text-2xl'/> <FaInstagram className='text-2xl'mSquare/> <FaLinkedin className='text-2xl'/> <FaTiktok className='text-2xl'/>  <FaTwitter className='text-2xl'/> <FaYoutube className='text-2xl'/>
            </span>
            <span className='text-slate-700 font-poppins text-sm inline-block m-2'>Terms of Use
                About the BBC
                Privacy Policy
                Cookies
                Accessibility Help
                Contact the BBC
                Advertise with us
                Do not share or sell my info
                Contact technical support
                Copyright 2024 BBC. All rights reserved.  The BBC is not responsible for the content of external sites. Read about our approach to external linking.
            </span>
        </div>
    </div>
  )
}
