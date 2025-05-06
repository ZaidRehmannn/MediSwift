import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import MedicineItem from '../MedicineItem/MedicineItem';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const HomeMedicines = () => {
    const navigate = useNavigate();

    const {setPageTrans , setMovePage ,medicine_list } = useContext(StoreContext);
    
    const handleNavigation = (to , name) => {
        
            setPageTrans(true)
            setMovePage(name)
            setTimeout(() => {
              navigate(to)
            }, 1000)
    }

    return (
        <div className='medicine-display mt-8' id='medicines-catalog'>
            <h2 className='text-[max(2vw,24px)] font-semibold'>Top Medicines for You</h2>

            <div className='w-full' >
                {
                    medicine_list ?
                    (
                        <div className='medicine-display-list grid mt-8 gap-y-10 grid-cols-[repeat(auto-fill,_minmax(240px,1fr))] place-items-center' >
                            {
                                medicine_list.length > 0 ? (
                                    medicine_list.slice(0, 7).map((item, index) => (
                                        <MedicineItem
                                            key={index}
                                            id={item._id}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            image={item.image}
                                        />
                                    ))
                                ) : (
                                    <p className="text-xl mt-5 col-span-full">No Products found</p>
                                )
                            }
                        </div>
                       
                    )
                    :
                    (
                        <Loader />
                    )
                }
                
            </div>
            <div className='flex justify-center items-center mt-16'>
                <button
                    className='p-5 bg-green-600 text-white rounded-xl'
                    // onClick={() => {
                    //     navigate('/store?category=All')
                    //     setpage('Store')
                    // }}
                    onClick={() => handleNavigation('/store?category=All' , 'Store')}
                    >
                    View More Products
                </button>
            </div>
        </div>
    )
}

export default HomeMedicines
