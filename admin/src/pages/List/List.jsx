import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
    const [list, setlist] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/medicine/list`);
            if (response.data.success) {
                setlist(response.data.data);
            } else {
                toast.error('Error fetching list');
            }
        } catch (error) {
            toast.error('Network Error');
        }
    };

    const removeProduct = async (productId) => {
        try {
            const response = await axios.post(`${url}/api/medicine/remove`, { id: productId });
            if (response.data.success) {
                toast.success(response.data.message);
                fetchList();
            } else {
                toast.error('Error removing product');
            }
        } catch (error) {
            toast.error('Network Error');
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="list flex flex-col w-[90%] ml-[max(5vw,25px)] mt-8">
            <p className="text-xl font-semibold mb-4">All Products List</p>
            <div className="list-table overflow-y-auto w-full max-h-[550px] lg:max-h-[420px] border border-gray-300 rounded-md">

                {/* Grid Table Header - Only visible on large screens */}
                <div className="list-table-format title hidden lg:grid grid-cols-[0.7fr_1.8fr_1.2fr_1.2fr_1.5fr_1fr_1fr_0.5fr] items-center gap-4 py-3 px-4 border-b border-solid border-[#cacaca] text-sm bg-[#f9f9f9] font-semibold sticky top-0 z-10">
                    <span>Image</span>
                    <span>Name</span>
                    <span>Category</span>
                    <span>Dosage</span>
                    <span>Description</span>
                    <span>Age Group</span>
                    <span>Price</span>
                    <span>Action</span>
                </div>

                {/* Product Rows */}
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="list-table-format grid grid-cols-1 lg:grid-cols-[0.7fr_1.8fr_1.2fr_1.2fr_1.5fr_1fr_1fr_0.5fr] gap-3 lg:gap-4 py-4 px-4 border-b border-solid border-[#cacaca] text-sm"
                    >
                        {/* Mobile & Tablet View */}
                        <div className="lg:hidden flex gap-4 items-start">
                            <img className="w-20 h-20 object-cover rounded" src={item.image} alt={item.name} />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-base">{item.name}</p>
                                <p className="text-xs text-gray-500">Category: {item.category}</p>
                                <p className="text-xs">Dosage: {item.dosage}</p>
                                <p className="text-xs">Age Group: {item.age_group}</p>
                                <p className="text-xs">Price: ${item.price}</p>
                                <p className="text-xs">Description: {item.description}</p>
                                <p
                                    className="text-red-500 text-sm mt-1 cursor-pointer w-fit"
                                    onClick={() => removeProduct(item._id)}
                                >
                                    Remove
                                </p>
                            </div>
                        </div>

                        {/* Large Screen View */}
                        <img className="w-12 hidden lg:block" src={item.image} alt={item.name} />
                        <p className="hidden lg:block">{item.name}</p>
                        <p className="hidden lg:block">{item.category}</p>
                        <p className="hidden lg:block">{item.dosage}</p>
                        <p className="hidden lg:block">{item.description}</p>
                        <p className="hidden lg:block">{item.age_group}</p>
                        <p className="hidden lg:block">${item.price}</p>
                        <p
                            className="hidden lg:block text-red-500 text-center cursor-pointer"
                            onClick={() => removeProduct(item._id)}
                        >
                            X
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
