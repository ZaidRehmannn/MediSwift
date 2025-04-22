import React, { useContext, useState, useRef } from 'react'
import { StoreContext } from '../../context/StoreContext'
import MedicineItem from '../MedicineItem/MedicineItem';
import { assets } from '../../assets/frontend_assets/assets';

const MedicineDisplay = ({ category }) => {
    const { medicine_list } = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className='medicine-display mt-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0'>
                <h2 className='text-[max(2vw,24px)] font-semibold'>Top Medicines for You</h2>

                {/* Search bar for medicines */}
                <div className='search-bar flex relative items-center justify-center gap-x-2 w-full md:w-[85%] lg:w-[40%]'>
                    <input type="text" placeholder='Search medicines...' ref={inputRef} className='rounded-2xl py-2 w-full px-4 text-sm text-black bg-gray-300 placeholder-black' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <img className='w-5 h-5 cursor-pointer hidden md:block' src={assets.search_icon} alt="Search icon" onClick={focusInput} />
                </div>
            </div>

            <div className='medicine-display-list grid mt-8 gap-y-10 grid-cols-[repeat(auto-fill,_minmax(240px,1fr))] place-items-center'>
                {(() => {
                    const filteredItems = medicine_list.filter(item =>
                        (category === 'All' || item.category === category) &&
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
