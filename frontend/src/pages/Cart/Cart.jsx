import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import LoginError from '../../components/LoginError/LoginError';
import { assets } from '../../assets/frontend_assets/assets';
import Loader from '../../components/Loader/Loader';

const Cart = ({ setshowLogin }) => {
  const { cartItems, medicine_list, removeFromCart, getTotalCartAmount, token, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showLoginError, setshowLoginError] = useState(false);

  const checkLogin = () => {
    if (!token) {
      setshowLogin(true)
    } else {
      navigate('/order')
    }
  };


  console.log(cartItems, "cart items");

  return (
    <>
      {showLoginError && <LoginError setshowLoginError={setshowLoginError} />}
      <div className='cart mt-24'>
        <div className='cart-items'>
          <div className='cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-center text-gray-500 text-[max(1vw,12px)]'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Add / Remove</p>
          </div>
          <br />
          <hr />
          {
            Object.keys(cartItems).length !== 0 ? (
              medicine_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={index}>
                      <div className='cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-center text-[max(1vw,12px)] my-[10px] mx-0 text-black'>
                        <img className='w-11 md:w-[50px] m-auto' src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p className='mr-4 md:mr-0'>${item.price}</p>
                        <p className='mr-5 md:mr-0'>
                          {cartItems[item._id]}
                        </p>
                        <p className='mr-6 md:mr-0'>${item.price * cartItems[item._id]}</p>
                        <p className='flex flex-col lg:flex-row items-center justify-center gap-3 mr-4 md:mr-0'>
                          <img src={assets.remove_icon_red} alt="Remove" className='w-5 cursor-pointer order-2 lg:order-1' onClick={() => removeFromCart(item._id)} />
                          <img src={assets.add_icon_green} alt="Add" className='w-5 cursor-pointer order-1 lg:order-2' onClick={() => addToCart(item._id)} />
                        </p>
                      </div>
                      <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                    </div>
                  )
                }
              })
            )
            :
            (
              <div className='w-full py-3' >
                <p className='text-slate-600 text-center' >Your cart is empty.</p>
              </div>
            )
          }
         
        </div>
        <div className='cart-bottom mt-20 flex justify-between gap-[max(12vw,20px)] flex-col-reverse lg:flex-row'>
          <div className='cart-total flex flex-col flex-1 gap-5'>
            <h2 className='font-semibold text-xl'>Cart Totals</h2>
            <div>
              <div className='cart-total-details flex justify-between text-[#555]'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10px] mx-0' />
              <div className='cart-total-details flex justify-between text-[#555]'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className='my-[10px] mx-0' />
              <div className='cart-total-details flex justify-between text-[#555]'>
                <p className='font-bold'>Total</p>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button className='border-none text-white bg-green-700 w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer' onClick={checkLogin}>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cart-promocode flex-1 pr-0 lg:pr-0 md:pr-32'>
            <div>
              <p className='text-[#555]'>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
                <input type="text" placeholder='Promo Code' className='bg-transparent border-none outline-none pl-[10px]' />
                <button className='w-20 md:w-24 lg:w-20 xl:w-24 py-3 px-[5px] bg-green-700 border-none text-white rounded'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
