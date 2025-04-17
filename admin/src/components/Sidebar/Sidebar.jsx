import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border-2 border-solid border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
      <div className='sidebar-options pt-12 pl-[20%] flex flex-col gap-5'>

        <NavLink to='/add' className={({ isActive }) => `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-[#fff0ed] border-[#FF6347]' : ''}`}>
          <img src={assets.add_icon} alt="" />
          <p className='hidden lg:block'>Add Items</p>
        </NavLink>

        <NavLink to='/list' className={({ isActive }) => `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-[#fff0ed] border-[#FF6347]' : ''}`}>
          <img src={assets.order_icon} alt="" />
          <p className='hidden lg:block'>List Items</p>
        </NavLink>

        <NavLink to='/orders' className={({ isActive }) => `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-[#fff0ed] border-[#FF6347]' : ''}`}>
          <img src={assets.order_icon} alt="" />
          <p className='hidden lg:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
