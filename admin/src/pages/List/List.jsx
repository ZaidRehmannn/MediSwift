import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets.js';

const List = ({ url }) => {
    const [list, setlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const inputRef = useRef();

    const focusInput = () => inputRef.current?.focus();

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

    const categories = ["All", ...new Set(list.map(item => item.category))];

    // Filtered list based on search and category
    const filteredList = list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || item.category === selectedCategory)
    );

    return (
        <div className="list flex flex-col w-[90%] ml-[max(5vw,25px)] mt-8">
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 gap-4'>
                <h2 className="text-xl font-semibold">All Products List</h2>

                <div className='flex flex-col lg:flex-row gap-4 w-full lg:w-auto'>
                    {/* Search bar for medicines */}
                    <div className='flex relative items-center w-full lg:w-[240px]'>
                        <input
                            type="text"
                            placeholder='Search medicines...'
                            ref={inputRef}
                            className='rounded-2xl py-2 w-full px-4 text-sm text-black bg-gray-200 placeholder-black'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            className='w-5 h-5 cursor-pointer absolute right-3'
                            src={assets.search_icon}
                            alt="Search"
                            onClick={focusInput}
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='bg-gray-200 text-black text-sm px-4 py-2 rounded-2xl w-full lg:w-[180px]'
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="list-table overflow-y-auto w-full max-h-[550px] lg:max-h-[420px] border border-gray-300 rounded-md">

                {/* Header */}
                <div className="list-table-format title hidden lg:grid grid-cols-[0.7fr_1.8fr_1.2fr_1.2fr_1.5fr_1fr_1fr_0.5fr] items-center gap-4 py-3 px-4 border-b border-[#cacaca] text-sm bg-[#f9f9f9] font-semibold sticky top-0 z-10">
                    <span>Image</span>
                    <span>Name</span>
                    <span>Category</span>
                    <span>Dosage</span>
                    <span>Description</span>
                    <span>Age Group</span>
                    <span>Price</span>
                    <span>Action</span>
                </div>

                {/* Products */}
                {filteredList.length > 0 ? (
                    filteredList.map((item, index) => (
                        <div
                            key={index}
                            className="list-table-format grid grid-cols-1 lg:grid-cols-[0.7fr_1.8fr_1.2fr_1.2fr_1.5fr_1fr_1fr_0.5fr] gap-3 lg:gap-4 py-4 px-4 border-b border-[#cacaca] text-sm"
                        >
                            {/* Mobile View */}
                            <div className="lg:hidden flex gap-4">
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

                            {/* Desktop View */}
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
                    ))
                ) : (
                    <div className='text-center py-6 text-black font-semibold text-sm'>
                        No Products found
                    </div>
                )}
            </div>
        </div>
    );
};

export default List;
