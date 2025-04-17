import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setcategory }) => {
    return (
        <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
            <h1 className='text-[#262626] font-semibold text-2xl'>Explore Our Menu</h1>
            <p className='explore-menu-text md:max-w-[75%] xl:max-w-[60%] text-[#808080] text-sm md:text-base'>Indulge in a wide selection of mouthwatering dishes, thoughtfully prepared with premium ingredients and a passion for great taste. Whether you're craving comfort food or exploring new cuisines, we're here to deliver happiness to your doorstep, one flavorful bite at a time.</p>
            <div className='explore-menu-list flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll scrollbar-hide'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" className={category === item.menu_name ? "w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition duration-200 border-4 border-solid border-[#FF6347] p-[2px]" : "w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition duration-200"} />
                            <p className='mt-2 cursor-pointer text-[#747474] text-[max(1.4vw,16px)]'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
