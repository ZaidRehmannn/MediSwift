import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Header = () => {
    return (
        <div className="header relative h-[34vw] my-7 mx-auto overflow-hidden">
            <img
                src={assets.header_image}
                alt="Header Background"
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] lg:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn3s">
                <h2 className="text-white font-semibold text-[max(3.5vw,20px)] md:text-[max(4.5vw,22px)]">
                    YOUR HEALTH IS OUR PRIORITY
                </h2>
                <p className="hidden lg:block text-white text-[1vw]">
                    MediSwift brings healthcare to your doorstep with a wide range of genuine medicines, health products, and wellness essentials. Enjoy fast, reliable, and hassle-free online medicine ordering — because your well-being matters.
                </p>
                <button className="border-2 border-green-700 text-green-700 font-semibold py-[2vw] px-[4vw] lg:py-[1vw] lg:px-[2.3vw] bg-white text-[max(1vw,10px)] md:text-[max(1vw,13px)] rounded-[50px] transition duration-300 hover:bg-green-100 hover:text-green-800">
                    Shop Medicines
                </button>
            </div>
        </div>
    );
};

export default Header;
