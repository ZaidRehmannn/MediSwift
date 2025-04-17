import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/cart');
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token])

  return (
    <form className='place-order flex items-start justify-between gap-12 mt-24' onSubmit={placeOrder}>
      <div className='place-order-left w-full max-w-[max(30%,500px)]'>
        <p className='title text-3xl font-semibold mb-12'>Delivery Information</p>
        <div className='multi-fields flex gap-[10px]'>
          <input required type="text" placeholder='First Name' name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
          <input required type="text" placeholder='Last Name' name='lastName' onChange={onChangeHandler} value={data.lastName} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
        </div>
        <input required type="email" placeholder='Email Address' name='email' onChange={onChangeHandler} value={data.email} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
        <input required type="text" placeholder='Street' name='street' onChange={onChangeHandler} value={data.street} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
        <div className='multi-fields flex gap-[10px]'>
          <input required type="text" placeholder='City' name='city' onChange={onChangeHandler} value={data.city} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
          <input required type="text" placeholder='State' name='state' onChange={onChangeHandler} value={data.state} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
        </div>
        <div className='multi-fields flex gap-[10px]'>
          <input required type="text" placeholder='Zip Code' name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
          <input required type="text" placeholder='Country' name='country' onChange={onChangeHandler} value={data.country} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
        </div>
        <input required type="text" placeholder='Phone Number' name='phone' onChange={onChangeHandler} value={data.phone} className='mb-4 w-full p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#FF6347]' />
      </div>
      <div className='place-order-right w-full max-w-[max(40%,500px)]'>
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
          <button className='border-none text-white bg-[#FF6347] w-[max(15vw,200px)] py-3 px-0 rounded-[4px] cursor-pointer mt-7' type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
