import React from 'react'

const Header = () => {
    return (
        <div className="header h-[34vw] my-7 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
            <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] lg:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn3s">
                <h2 className="text-white font-semibold text-[max(3.5vw,20px)] md:text-[max(4.5vw,22px)]">Order your favourite food here</h2>
                <p className='hidden lg:block text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button className='border-none text-[#747474] font-semibold py-[2vw] px-[4vw] lg:py-[1vw] lg:px-[2.3vw] bg-white text-[max(1vw,10px)] md:text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
            </div>
        </div>
    )
}

export default Header
