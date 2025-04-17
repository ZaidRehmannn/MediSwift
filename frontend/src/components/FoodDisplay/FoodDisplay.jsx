import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display mt-8' id='food-display'>
            <h2 className='text-[max(2vw,24px)] font-semibold'>Top Dishes Near You</h2>
            <div className='food-display-list grid mt-8 gap-8 gap-y-14 grid-cols-[repeat(auto-fill,_minmax(240px,1fr))]'>
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
