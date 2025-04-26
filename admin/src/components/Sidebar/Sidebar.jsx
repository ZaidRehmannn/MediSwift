import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar w-[20%] h-screen border-r-2 border-solid border-[#a9a9a9] text-[max(1vw,10px)]'>
      <div className='sidebar-options pt-12 pl-[20%] flex flex-col gap-5'>

        <NavLink
          to='/add'
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-green-100 border-2 border-green-700' : ''
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className='hidden lg:block'>Add New Product</p>
        </NavLink>

        <NavLink
          to='/list'
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-green-100 border-2 border-green-700' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className='hidden lg:block'>List of Products</p>
        </NavLink>

        <NavLink
          to='/orders'
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-green-100 border-2 border-green-700' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className='hidden lg:block'>Orders</p>
        </NavLink>

        <NavLink
          to='/queries'
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-2 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[8px] cursor-pointer rounded-tl-md rounded-bl-md ${isActive ? 'bg-green-100 border-2 border-green-700' : ''
            }`
          }
        >
          <FontAwesomeIcon icon={faClipboardQuestion} className='w-8 h-8' />
          <p className='hidden lg:block'>Queries</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
