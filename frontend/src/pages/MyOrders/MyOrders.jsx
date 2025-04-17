import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setdata] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
        setdata(response.data.data);
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders my-[50px] mx-0'>
            <h2 className='text-xl font-semibold'>My Orders</h2>
            <div className='container flex flex-col gap-5 mt-[30px]'>
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-xs lg:text-sm py-[10px] px-5 text-[#454545] border border-solid border-[#ff6347] gap-y-1 lg:gap-y-0'>
                            <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity
                                }
                                else {
                                    return item.name + " x " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span className='text-[#ff6347]'>&#x25cf;</span> <b className='font-semibold text-[#454545]'>{order.status}</b></p>
                            <button onClick={fetchOrders} className='border-none py-3 px-0 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] font-medium text-xs xl:text-base'>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
