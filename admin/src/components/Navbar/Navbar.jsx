import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%]'>
      <img className='logo w-[max(10%,80px)]' src={assets.logo} alt="" />
      <img className='profile w-10' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
