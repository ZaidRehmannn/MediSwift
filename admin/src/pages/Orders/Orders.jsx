import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
    const [orders, setorders] = useState([]);
    const fetchAllOrders = async () => {
        const response = await axios.get(url + '/api/order/list');
        if (response.data.success) {
            setorders(response.data.data);
        }
        else {
            toast.error("Error");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, [])

    const statusHandler = async (event, orderId) => {
        const response = await axios.post(url + '/api/order/status', { orderId, status: event.target.value });
        if (response.data.success) {
            fetchAllOrders();
        }
    };

    return (
        <div className='order w-[70%] ml-[max(5vw,25px)] mt-12'>
            <h3 className='text-xl font-semibold'>Order Page</h3>
            <div className='order-list'>
                {orders.map((order, index) => (
                    <div key={index} className='order-item grid grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border border-solid border-[#ff6347] py-[15px] px-2 lg:p-5 my-[30px] mx-0 text-xs lg:text-sm text-[#505050]'>
                        <img className='w-10 lg:w-auto' src={assets.parcel_icon} alt="" />
                        <div>
                            <p className='order-item-food font-semibold'>
                                {order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + " x " + item.quantity
                                    }
                                    else {
                                        return item.name + " x " + item.quantity + ", "
                                    }
                                })}
                            </p>
                            <p className='order-item-name font-semibold mt-[30px] mb-[5px]'>{order.address.firstName + " " + order.address.lastName}</p>
                            <div className='order-item-address mb-[10px]'>
                                <p>{order.address.street + ","}</p>
                                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>
                        <p>Items: {order.items.length}</p>
                        <p>${order.amount}.00</p>
                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='border border-solid border-[#ff6347] bg-[#ffe8e4] w-[max(10vw,120px)] p-[5px] lg:p-1 text-xs xl:text-sm outline-none cursor-pointer'>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order
