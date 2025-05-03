import React from 'react'
import { assets } from '../../assets/assets'
import { useMediaSwiftAmdin } from '../../context/MediaSwiftAdminContextProvider';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const {settoken} = useMediaSwiftAmdin()
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("../admin/login");
  };

  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%] shadow-sm bg-white'>
      <img className='logo w-[max(10%,80px)]' src={assets.logo} alt="MediSwift Logo" />
      
      <div className='flex items-center gap-4'>
        <button 
          onClick={handleLogout}
          className='bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200'
        >
          Logout
        </button>
        {/* <img className='profile w-10 h-10 rounded-full object-cover' src={assets.profile_image} alt="Profile" /> */}
      </div>
    </div>
  )
}

export default Navbar