import React from 'react'
import MedicineDisplay from '../../components/MedicineDisplay/MedicineDisplay'
import { useLocation } from 'react-router-dom';

const Store = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = decodeURIComponent(searchParams.get('category'));

    return (
        <div>
            <MedicineDisplay category={category} />
        </div>
    )
}

export default Store
