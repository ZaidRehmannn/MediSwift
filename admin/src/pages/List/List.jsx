import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
    const [list, setlist] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);

        if (response.data.success) {
            setlist(response.data.data);
        }
        else {
            toast.error("Error");
        }
    };

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        await fetchList();

        if (response.data.success) {
            toast.success(response.data.message);
        }
        else {
            toast.error("Error");
        }
    };

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className='list flex flex-col w-[70%] ml-[max(5vw,25px)] mt-10'>
            <p className='text-xl font-semibold mb-4'>All Foods List</p>
            <div className='list-table'>
                <div className='list-table-format title hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-3 px-4 border border-solid border-[#cacaca] text-sm bg-[#f9f9f9]'>
                    <span className='font-bold'>Image</span>
                    <span className='font-bold'>Name</span>
                    <span className='font-bold'>Category</span>
                    <span className='font-bold'>Price</span>
                    <span className='font-bold'>Action</span>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-4 md:gap-[10px] py-3 px-4 border border-solid border-[#cacaca] text-sm'>
                            <img className='w-12' src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p className='ml-3 cursor-pointer' onClick={() => removeFood(item._id)}>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
