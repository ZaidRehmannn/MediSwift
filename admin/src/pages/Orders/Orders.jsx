import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
    const [orders, setorders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get(url + '/api/order/list');
            if (response.data.success) {
                setorders(response.data.data);
            } else {
                toast.error("Error fetching orders");
            }
        } catch (error) {
            toast.error("Network error");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    const statusHandler = async (event, orderId) => {
        try {
            const response = await axios.post(url + '/api/order/status', {
                orderId,
                status: event.target.value,
            });
            if (response.data.success) {
                fetchAllOrders();
            } else {
                toast.error("Error updating status");
            }
        } catch (error) {
            toast.error("Network error");
        }
    };

    return (
        <div className='order w-[90%] ml-[max(5vw,25px)] mt-10'>
            <h3 className='text-xl font-semibold'>Orders</h3>

            <div className='order-list overflow-y-auto max-h-[550px] lg:max-h-[420px] pr-2'>
                {orders.map((order, index) => (
                    <div
                        key={index}
                        className='order-item grid grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border border-green-700 py-[15px] px-2 lg:p-5 my-[30px] text-xs lg:text-sm text-[#505050] bg-white rounded-md shadow-sm'
                    >
                        <img className='w-10 lg:w-auto' src={assets.parcel_icon} alt="parcel" />
                        
                        <div>
                            <p className='order-item-food font-semibold'>
                                {order.items.map((item, idx) => (
                                    <span key={idx}>
                                        {item.name} x {item.quantity}{idx !== order.items.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                            <p className='order-item-name font-semibold mt-6 mb-1'>
                                {order.address.firstName} {order.address.lastName}
                            </p>
                            <div className='order-item-address mb-2'>
                                <p>{order.address.street},</p>
                                <p>
                                    {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                                </p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>

                        <p>Items: {order.items.length}</p>
                        <p>${order.amount}.00</p>
                        <select
                            onChange={(e) => statusHandler(e, order._id)}
                            value={order.status}
                            className='border border-green-700 bg-green-50 w-[max(10vw,120px)] p-1 text-xs xl:text-sm outline-none cursor-pointer rounded'
                        >
                            <option value="Order Processing">Order Processing</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
