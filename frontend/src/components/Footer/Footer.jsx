import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24' id='footer'>
            <div className='footer-content flex flex-col w-full lg:grid grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-20'>
                <div className='footer-content-left flex flex-col items-start gap-5'>
                    <img src={assets.logo} alt="" />
                    <p>Experience the joy of delicious meals delivered with love and care. At Tomato, we're passionate about bringing your favorite dishes to your doorstep. Follow us on social media and stay connected for exclusive deals, mouth-watering updates, and more!</p>
                    <div className='footer-social-icons flex gap-3'>
                        <img className='w-10 cursor-pointer' src={assets.facebook_icon} alt="" />
                        <img className='w-10 cursor-pointer' src={assets.twitter_icon} alt="" />
                        <img className='w-10 cursor-pointer' src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg text-white'>COMPANY</h2>
                    <ul>
                        <li className='mb-[10px] cursor-pointer'>Home</li>
                        <li className='mb-[10px] cursor-pointer'>About Us</li>
                        <li className='mb-[10px] cursor-pointer'>Delivery</li>
                        <li className='mb-[10px] cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg text-white'>GET IN TOUCH</h2>
                    <ul>
                        <li className='mb-[10px] cursor-pointer'>+1-212-456-7890</li>
                        <li className='mb-[10px] cursor-pointer'>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] mt-5 mb-2 mx-0 bg-gray-400 border-none' />
            <p className='footer-copyright text-center'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
