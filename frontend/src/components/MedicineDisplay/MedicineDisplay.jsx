import React, { useContext, useState, useRef } from 'react'
import { StoreContext } from '../../context/StoreContext'
import MedicineItem from '../MedicineItem/MedicineItem';
import { assets } from '../../assets/frontend_assets/assets';

const MedicineDisplay = ({ category }) => {
    const { medicine_list } = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(category);
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const categories = ["All", ...new Set(medicine_list?.map(item => item.category))];

    return (
        <div className='medicine-display mt-8' id='medicines-catalog'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0'>
                <h2 className='text-[max(2vw,24px)] font-semibold'>
                    {selectedCategory === "All" ? "All Products" : selectedCategory}
                </h2>

                <div className='flex gap-4 w-full lg:w-auto'>
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
                        className='bg-gray-200 text-black text-sm px-4 py-2 rounded-2xl w-20 lg:w-[180px]'
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='medicine-display-list grid mt-8 gap-y-10 grid-cols-[repeat(auto-fill,_minmax(240px,1fr))] place-items-center'>
                {(() => {
                    const filteredItems = medicine_list.filter(item =>
                        (selectedCategory === 'All' || item.category === selectedCategory) &&
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                    return filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <MedicineItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                        ))
                    ) : (
                        <p className="text-xl mt-5 col-span-full">No Products found</p>
                    );
                })()}
            </div>
        </div>
    )
}

export default MedicineDisplay
