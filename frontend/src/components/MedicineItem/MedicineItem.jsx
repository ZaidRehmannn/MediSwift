import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MedicineItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='w-full max-w-[240px] h-[350px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02] justify-center items-center border-2' onClick={() => navigate(`/product/${id}`)}>
            {/* Medicine Image */}
            <div className='h-[180px] w-full relative flex items-center justify-center'>
                <img
                    src={image}
                    alt={name}
                    className='w-[85%] h-[85%] object-cover'
                />
                {!cartItems[id] ? (
                    <img
                        className='absolute w-9 bottom-3 right-3 cursor-pointer bg-green-600 rounded-full p-[2px]'
                        src={assets.add_icon_white}
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(id);
                            toast.success("Product Added to Cart");
                        }}
                        alt="Add"
                    />
                ) : (
                    <div className='absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm'>
                        <img
                            className='w-7 cursor-pointer'
                            src={assets.remove_icon_red}
                            onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(id);
                                if (cartItems[id] === 1) {
                                    toast.error("Product Removed from Cart");
                                }
                            }}
                            alt="Remove"
                        />
                        <p className='text-sm'>{cartItems[id]}</p>
                        <img
                            className='w-7 cursor-pointer'
                            src={assets.add_icon_green}
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(id);
                            }}
                            alt="Add"
                        />
                    </div>
                )}
            </div>

            {/* Medicine Details */}
            <div className='flex flex-col flex-grow justify-between p-4'>
                <div className='mb-2'>
                    <p className='text-lg font-semibold truncate max-w-[180px]'>{name}</p>
                    <p className='text-sm text-gray-600 truncate-3-lines'>{description}</p>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <p className='text-green-700 font-bold text-lg'>${price}</p>
                    <img className='w-[70px]' src={assets.rating_starts} alt="rating" />
                </div>
            </div>
        </div>
    );
};

export default MedicineItem;
