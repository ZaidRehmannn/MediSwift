import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const {setPageTrans , setMovePage , page} = useContext(StoreContext);
    const navigate = useNavigate();

    const handleNavigation = (to , name) => {
        const path = page !== 'Home'
          ? to === 'Home' ? '../' : `../${to}`
          : `./${to === 'Home' ? './' : to }`
    
        setPageTrans(true)
        setMovePage(name)
        setTimeout(() => {
          navigate(path)
        }, 1000)
    }

    return (
        <div className='footer text-[#d9d9d9] bg-[#057230] flex flex-col items-center gap-5 py-5 px-[8vw] pt-11 mt-24' id='footer'>
            <div className='footer-content flex flex-col w-full lg:grid grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-20'>
                <div className='footer-content-left flex flex-col items-start gap-5'>
                    <img src={assets.logo_inverted} alt="" className='w-44 h-40' />
                    <p>MediSwift is your trusted partner in healthcare, making it easier than ever to access genuine medicines and wellness products online. Stay connected with us on social media for health tips, exclusive offers, and the latest in medical care innovation.</p>
                    <div className='footer-social-icons flex gap-3'>
                        <img className='w-10 cursor-pointer' src={assets.facebook_icon} alt="" />
                        <img className='w-10 cursor-pointer' src={assets.twitter_icon} alt="" />
                        <img className='w-10 cursor-pointer' src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg text-white'>COMPANY</h2>
                    <ul className='flex flex-col'>
                        <p onClick={() => handleNavigation('Home' , 'Home')}  className='mb-[10px] cursor-pointer'>Home</p>
                        <p onClick={() => handleNavigation('aboutus' , 'About Us')} className='mb-[10px] cursor-pointer'>About Us</p>
                        <p onClick={() => handleNavigation('contactus' , 'ContactUs')} className='mb-[10px] cursor-pointer'>Contact Us</p>
                        <p className='mb-[10px] cursor-pointer'>Privacy Policy</p>
                    </ul>
                </div>
                <div className='footer-content-right flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg text-white'>GET IN TOUCH</h2>
                    <ul>
                        <li className='mb-[10px] cursor-pointer'>+1-212-456-7890</li>
                        <li className='mb-[10px] cursor-pointer'>contact@mediswift.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] mt-5 mb-2 mx-0 bg-gray-400 border-none' />
            <p className='footer-copyright text-center'>Copyright 2024 © MediSwift.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
