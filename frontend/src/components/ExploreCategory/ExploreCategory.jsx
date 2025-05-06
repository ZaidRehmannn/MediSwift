import React, { useContext } from 'react'
import { category_list } from '../../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'

const ExploreCategory = () => {
    const navigate = useNavigate();
    const {setPageTrans , setMovePage } = useContext(StoreContext);
    
    const handleNavigation = (to , name) => {
        
            setPageTrans(true)
            setMovePage(name)
            setTimeout(() => {
              navigate(to)
            }, 1000)
    }

    return (
        <div className='explore-category flex flex-col gap-5' id='explore-category'>
            {/* Heading */}
            <h1 className='text-[#262626] font-semibold text-xl md:text-2xl lg:text-3xl'>
                Explore Our Medicine Categories
            </h1>

            {/* Subheading / Paragraph */}
            <p className='explore-category-text text-sm md:text-base text-[#808080] lg:max-w-[75%] xl:max-w-[60%] leading-relaxed'>
                Discover a comprehensive range of trusted medicines and healthcare essentials, carefully organized by category to help you find exactly what you need. Whether it's managing chronic conditions, treating common illnesses, or boosting overall wellness — your health is our top priority.
            </p>

            {/* Category List */}
            <div className='explore-category-list flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll scrollbar-hide'>
                {category_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => handleNavigation(`/store?category=${encodeURIComponent(item.category_name)}` , item.category_name)}
                            // onClick={() => {
                            //     navigate(`/store?category=${encodeURIComponent(item.category_name)}`)
                            //     setpage('Store')
                            // }}
                            key={index}
                            className='explore-category-list-item flex flex-col items-center min-w-20 cursor-pointer'
                        >
                            <img
                                src={item.category_image}
                                alt={item.category_name}
                                className="w-[90px] h-[90px] object-cover rounded-full transition duration-200 border-2 border-gray-300"
                            />
                            <p className='mt-2 text-[#747474] text-sm md:text-base lg:text-lg'>
                                {item.category_name}
                            </p>
                        </div>
                    )
                })}
            </div>

            <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreCategory
