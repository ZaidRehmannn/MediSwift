import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setshowLogin }) => {
    const [menu, setmenu] = useState('Home');
    const { getTotalCartAmount, token, settoken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        settoken("");
        navigate("/");
    };

    return (
        <div className='navbar flex justify-between items-center py-5 px-0'>
            <div className='w-1/3 md:w-1/4 lg:w-1/5'><Link to='/'><img src={assets.logo} alt="" className='logo' /></Link></div>
            <ul className='navbar-menu hidden lg:flex list-none gap-4 xl:gap-5 text-[#49557e] text-base xl:text-lg'>
                <Link to='/' onClick={() => { setmenu('Home') }} className={menu === 'Home' ? 'pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer' : 'cursor-pointer'}>Home</Link>
                <a href='#explore-menu' onClick={() => { setmenu('Menu') }} className={menu === 'Menu' ? 'pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer' : 'cursor-pointer'}>Menu</a>
                <a href='#app-download' onClick={() => { setmenu('Mobile-App') }} className={menu === 'Mobile-App' ? 'pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer' : 'cursor-pointer'}>Mobile-App</a>
                <a href='#footer' onClick={() => { setmenu('Contact Us') }} className={menu === 'Contact Us' ? 'pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer' : 'cursor-pointer'}>Contact Us</a>
            </ul>
            <div className='navbar-right flex items-center gap-5 md:gap-7 xl:gap-9'>
                <img className='w-5 h-5 md:w-auto md:h-auto' src={assets.search_icon} alt="" />
                <div className='navbar-search-icon relative'>
                    <Link to='/cart'><img className='w-5 h-5 md:w-auto md:h-auto' src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot absolute min-w-[8px] min-h-[8px] md:min-w-[10px] md:min-h-[10px] bg-[#FF6347] rounded-md -top-2 -right-2'}></div>
                </div>
                {!token
                    ? <button onClick={() => setshowLogin(true)} className='bg-transparent text-sm md:text-base text-[#49557e] border-[1px] border-solid border-[#FF6347] px-5 py-1 md:px-7 md:py-2 rounded-[50px] cursor-pointer transition duration-300 hover:bg-[#fff4f2]'>Sign in</button>
                    : <div className='navbar-profile relative group'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='nav-profile-dropdown absolute hidden right-0 z-[1] group-hover:flex flex-col gap-3 bg-[#fff2ef] py-3 px-6 rounded border border-solid border-[#FF6347] outline outline-2 outline-white list-none w-36'>
                            <li onClick={() => navigate('/myorders')} className='flex items-center gap-3 cursor-pointer hover:text-[#ff6347]'><img className='w-5' src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout} className='flex items-center gap-3 cursor-pointer hover:text-[#ff6347]'><img className='w-5' src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
