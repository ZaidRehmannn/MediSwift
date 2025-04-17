import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart mt-24'>
      <div className='cart-items'>
        <div className='cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-center text-gray-500 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-center text-[max(1vw,12px)] my-[10px] mx-0 text-black'>
                  <img className='w-11 md:w-[50px] m-auto' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p className='mr-4 md:mr-0'>${item.price}</p>
                  <p className='mr-5 md:mr-0'>{cartItems[item._id]}</p>
                  <p className='mr-6 md:mr-0'>${item.price * cartItems[item._id]}</p>
                  <p className='cursor-pointer mr-4 md:mr-0' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>
            )
          }
        })}
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
          <button className='border-none text-white bg-[#FF6347] w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode flex-1 pr-0 lg:pr-0 md:pr-32'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input type="text" placeholder='Promo Code' className='bg-transparent border-none outline-none pl-[10px]' />
              <button className='w-20 md:w-24 lg:w-20 xl:w-24 py-3 px-[5px] bg-[#FF6347] border-none text-white rounded'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
