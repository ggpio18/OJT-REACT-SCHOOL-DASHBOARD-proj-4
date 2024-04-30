import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";


const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
      <h1>School</h1>

      <ul className='nav'>
        <li className='nav-link active'><Link to="#"><MdOutlineDashboard />Dashboard</Link></li>
        <li className='nav-link'><Link to="#"><AiOutlineMessage />Messenger</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Calendar</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Database</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Attendance</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Settings</Link></li>
      </ul>
    </aside>
  )
}

export default Navigation
