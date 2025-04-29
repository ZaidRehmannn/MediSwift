import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { IoMenuSharp } from "react-icons/io5";

const Navbar = ({ setshowLogin }) => {
  const { getTotalCartAmount, token, settoken, page, setpage , setIsOpen } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
  };

  return (
    <div className='navbar flex justify-between items-center py-4 px-10 md:px-28 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40'>
      {/* Logo */}
      <div className='w-1/3 md:w-1/4 lg:w-1/5 flex items-center'>
        <Link to='/'>
          <img
            src={assets.logo}
            alt="MediSwift Logo"
            className='h-[75px] w-[173px] object-contain'
            // onClick={()=>setpage('Home')}
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className='navbar-menu hidden lg:flex list-none gap-4 xl:gap-5 text-[#2f4858] text-base xl:text-lg font-medium'>
        <Link
          to='/'
          // onClick={() => setpage('Home')}
          className={page === 'Home'
            ? 'pb-[2px] border-b-2 border-green-700 text-green-700 cursor-pointer'
            : 'cursor-pointer hover:text-green-600'}
        >
          Home
        </Link>
        <Link
          to='/aboutus'
          // onClick={() => setpage('About Us')}
          className={page === 'About Us'
            ? 'pb-[2px] border-b-2 border-green-700 text-green-700 cursor-pointer'
            : 'cursor-pointer hover:text-green-600'}
        >
          About Us
        </Link>
        <Link
          to='/store?category=All'
          // onClick={() => setpage('Store')}
          className={page === 'Store'
            ? 'pb-[2px] border-b-2 border-green-700 text-green-700 cursor-pointer'
            : 'cursor-pointer hover:text-green-600'}
        >
          Store
        </Link>
        <Link
          to='/contactus'
          onClick={() => setpage('Contact Us')}
          className={page === 'Contact Us'
            ? 'pb-[2px] border-b-2 border-green-700 text-green-700 cursor-pointer'
            : 'cursor-pointer hover:text-green-600'}
        >
          Contact Us
        </Link>
      </ul>

      {/* Right Icons */}
      <div className='navbar-right flex items-center gap-3 xl:gap-9 xl:min-w-[200px] justify-end'>
        {/* Cart Icon */}
        <div className='navbar-search-icon relative'>
          <Link to='/cart'>
            <img className='w-5 h-5 md:w-auto md:h-auto' src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className='dot absolute min-w-[10px] min-h-[10px] bg-green-700 rounded-md -top-2 -right-2'></div>
          )}
        </div>

        {/* Auth */}
        {!token ? (
          <button
            onClick={() => setshowLogin(true)}
            className='bg-white text-green-700 border-2 border-green-700 px-5 py-1 md:px-7 md:py-2 rounded-full cursor-pointer transition duration-300 hover:bg-green-100 hover:text-green-800 text-sm md:text-base'
          >
            Sign in
          </button>
        ) : (
          <div className='navbar-profile relative group'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='nav-profile-dropdown absolute hidden right-0 z-[1] group-hover:flex flex-col gap-3 bg-white py-3 px-6 rounded border border-green-600 shadow-lg list-none w-36'>
              <li
                onClick={() => navigate('/myorders')}
                className='flex items-center gap-3 cursor-pointer hover:text-green-600'
              >
                <img className='w-6' src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className='flex items-center gap-3 cursor-pointer hover:text-green-600'
              >
                <img className='w-6' src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
        <div className='block lg:hidden cursor-pointer' onClick={() => setIsOpen(true)} >
           <IoMenuSharp size={40} className='text-green-700' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
