import React, { useContext, useEffect } from 'react'
import MedicineDisplay from '../../components/MedicineDisplay/MedicineDisplay'
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Store = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = decodeURIComponent(searchParams.get('category'));

    const { setpage } = useContext(StoreContext);
          
    useEffect(() => { 
            setpage("Store");
    },[])

    return (
        <div>
            <MedicineDisplay category={category} />
        </div>
    )
}

export default Store
