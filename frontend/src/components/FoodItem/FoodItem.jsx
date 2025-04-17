import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

    return (
        <div className='food-item w-full m-auto rounded-2xl shadow-[0px_0px_10px_#00000030] transition duration-300 animate-fadeIn1s'>
            <div className='food-item-img-container relative'>
                <img className='food-item-image w-full rounded-t-2xl' src={image} alt="" />
                {!cartItems[id]
                    ? <img className='add absolute w-9 bottom-4 right-4 rounded-[50%] cursor-pointer' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-[50px] bg-white'>
                        <img className='w-8 cursor-pointer' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img className='w-8 cursor-pointer' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className='food-item-info p-[10px]'>
                <div className='food-item-name-rating flex justify-between items-center mb-[10px]'>
                    <p className='text-lg font-medium'>{name}</p>
                    <img className='w-[70px]' src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc text-[#676767] text-xs'>{description}</p>
                <p className='food-item-price text-[#FF6347] text-xl font-medium my-2 mx-0'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
